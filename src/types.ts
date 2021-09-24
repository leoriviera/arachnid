export enum Mark {
    MarkOne = 1,
    MarkTwo,
    MarkThree,
}

export enum Boost {
    Zero = 1,
    One,
    Two,
    Three,
    Four,
    Five,
}

export type Constructor = {
    coordinates: Coordinates;
    markNumber?: Mark;
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
