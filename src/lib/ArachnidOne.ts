import { Constructor, Coordinates, Direction } from '../types';

export class ArachnidOne {
    x: number;
    y: number;

    constructor({ coordinates }: Constructor) {
        const { x, y } = coordinates;

        this.x = x;
        this.y = y;
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
        this.x += 1;
    };

    private moveBackward = (): void => {
        if (this.x - 1 < 0) {
            throw new Error(
                'Invalid move. Would move robot into backmost wall.'
            );
        }

        this.x -= 1;
    };

    private moveLeft = (): void => {
        this.y += 1;
    };

    private moveRight = (): void => {
        if (this.y - 1 < 0) {
            throw new Error(
                'Invalid move. Would move robot into rightmost wall.'
            );
        }

        this.y -= 1;
    };

    get coordinates(): Coordinates {
        return {
            x: this.x,
            y: this.y,
        };
    }
}
