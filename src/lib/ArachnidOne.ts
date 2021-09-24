import { Constructor, Coordinates, Direction } from '../types';

export class ArachnidOne {
    x: number;
    y: number;
    isMarkOne: boolean;
    heading: Direction;

    constructor({ coordinates, isMarkOne }: Constructor) {
        const { x, y } = coordinates;

        this.x = x;
        this.y = y;
        this.isMarkOne = isMarkOne || false;
        this.heading = Direction.Forward;
    }

    move = (directions: Direction[]): Coordinates => {
        for (const direction of directions) {
            switch (direction) {
                case Direction.Forward:
                    this.moveForward();
                    break;
                case Direction.Backward:
                    this.moveBackward();
                    break;
                case Direction.Left:
                    this.moveLeft();
                    break;
                case Direction.Right:
                    this.moveRight();
                    break;
                default:
                    throw new Error('Invalid move. Invalid direction.');
            }
        }

        return this.coordinates;
    };

    private moveForward = (): void => {
        if (this.isMarkOne) {
            this.x += 1;
        } else {
            switch (this.heading) {
                case Direction.Forward:
                    this.x += 1;
                    break;
                case Direction.Backward:
                    if (this.x - 1 < 0) {
                        throw new Error(
                            'Invalid move. Would move robot into backmost wall.'
                        );
                    }
                    this.x -= 1;
                    break;
                case Direction.Left:
                    this.y += 1;
                    break;
                case Direction.Right:
                    if (this.y - 1 < 0) {
                        throw new Error(
                            'Invalid move. Would move robot into rightmost wall.'
                        );
                    }
                    this.y -= 1;
                    break;
            }
        }
    };

    private moveBackward = (): void => {
        if (this.isMarkOne) {
            this.x -= 1;
        } else {
            this.rotateLeft();
            this.rotateLeft();
            this.moveForward();
        }
    };

    private moveLeft = (): void => {
        if (this.isMarkOne) {
            this.y += 1;
        } else {
            this.rotateLeft();
            this.moveForward();
        }
    };

    private moveRight = (): void => {
        if (this.isMarkOne) {
            this.y -= 1;
        } else {
            this.rotateRight();
            this.moveForward();
        }
    };

    private rotateLeft = (): void => {
        switch (this.heading) {
            case Direction.Forward:
                this.heading = Direction.Left;
                break;
            case Direction.Backward:
                this.heading = Direction.Right;
                break;
            case Direction.Left:
                this.heading = Direction.Backward;
                break;
            case Direction.Right:
                this.heading = Direction.Forward;
                break;
        }
    };

    private rotateRight = (): void => {
        this.rotateLeft();
        this.rotateLeft();
        this.rotateLeft();
    };

    get coordinates(): Coordinates {
        return {
            x: this.x,
            y: this.y,
        };
    }
}
