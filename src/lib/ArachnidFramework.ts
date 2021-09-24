import { Boost, Constructor, Coordinates, Direction, Mark } from '../types';

export class ArachnidFramework {
    x: number;
    y: number;
    markNumber: Mark;
    heading: Direction;
    boost: Boost;
    tank: number;

    constructor({ coordinates, markNumber }: Constructor) {
        const { x, y } = coordinates;

        this.x = x;
        this.y = y;
        this.markNumber = markNumber || 3;
        this.heading = Direction.Forward;
        this.boost = Boost.Zero;
        this.tank = 30;
    }

    move = (directions: (Direction | Boost)[]): Coordinates => {
        console.log(this.coordinates);

        for (const direction of directions) {
            if (this.markNumber === Mark.MarkThree) {
                const boostCount = Number(direction);
                if (!Number.isNaN(boostCount)) {
                    if (Object.values(Boost).includes(boostCount)) {
                        this.boost = direction as Boost;
                        continue;
                    } else {
                        throw new Error(
                            'Invalid move. Incorrect number of boosts.'
                        );
                    }
                }

                if (this.boost !== Boost.Zero) {
                    this.boostForward();
                } else {
                    this.moveForward();
                }
            } else {
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
        }

        return this.coordinates;
    };

    private boostForward = (): void => {
        if (this.tank - this.boost < 0) {
            throw new Error('Invalid move. Tank out of fuel.');
        }

        switch (this.heading) {
            case Direction.Forward:
                this.x += this.boost - 1;
                this.boost = Boost.Zero;
                break;
            case Direction.Backward:
                this.x -= this.boost - 1;
                this.boost = Boost.Zero;
                break;
            case Direction.Left:
                this.y += this.boost - 1;
                this.boost = Boost.Zero;
                break;
            case Direction.Right:
                this.y -= this.boost - 1;
                this.boost = Boost.Zero;
                break;
        }
    };

    private moveForward = (): void => {
        switch (this.markNumber) {
            case 1:
                this.x += 1;
                break;
            case 2:
            case 3:
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
                break;
        }
    };

    private moveBackward = (): void => {
        if (this.markNumber === Mark.MarkOne) {
            this.x -= 1;
        } else {
            this.rotateLeft();
            this.rotateLeft();
        }
    };

    private moveLeft = (): void => {
        if (this.markNumber === Mark.MarkOne) {
            this.y += 1;
        } else {
            this.rotateLeft();
        }
    };

    private moveRight = (): void => {
        if (this.markNumber === Mark.MarkOne) {
            this.y -= 1;
        } else {
            this.rotateRight();
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
