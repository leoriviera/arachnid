export type Constructor = {
    coordinates: Coordinates;
    isMarkOne?: boolean;
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
