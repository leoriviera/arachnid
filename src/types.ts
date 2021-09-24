export type Constructor = {
    coordinates: Coordinates;
};

export type Coordinates = {
    x: number;
    y: number;
};

export enum Direction {
    Forward = 'F',
    Backward = 'B',
    Left = 'L',
    Right = 'R',
}
