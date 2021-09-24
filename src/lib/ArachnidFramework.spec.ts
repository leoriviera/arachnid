import test from 'ava';

import { Direction, Mark } from '../types';

import { ArachnidFramework } from './ArachnidFramework';

test('mark one will back off a building', (t) => {
    const spider = new ArachnidFramework({
        coordinates: {
            x: 0,
            y: 0,
        },
        markNumber: Mark.MarkOne,
    });

    const controlSequence = ['B'] as Direction[];
    const currentCoordinates = spider.move(controlSequence);

    t.deepEqual(currentCoordinates, {
        x: -1,
        y: 0,
    });
});

test('mark one will move right off a building', (t) => {
    const spider = new ArachnidFramework({
        coordinates: {
            x: 0,
            y: 0,
        },
        markNumber: Mark.MarkOne,
    });

    const controlSequence = ['R'] as Direction[];
    const currentCoordinates = spider.move(controlSequence);

    t.deepEqual(currentCoordinates, {
        x: 0,
        y: -1,
    });
});

test('mark one will throw error if given invalid direction', (t) => {
    const spider = new ArachnidFramework({
        coordinates: {
            x: 0,
            y: 0,
        },
        markNumber: Mark.MarkOne,
    });

    const controlSequence = ['P'];

    // @ts-ignore: Ignore error to allow testing.
    t.throws(() => spider.move(controlSequence));
});

test('mark one can travel forward', (t) => {
    const spider = new ArachnidFramework({
        coordinates: {
            x: 0,
            y: 0,
        },
        markNumber: Mark.MarkOne,
    });

    const controlSequence = ['F'] as Direction[];
    const currentCoordinates = spider.move(controlSequence);

    t.deepEqual(currentCoordinates, {
        x: 1,
        y: 0,
    });
});

test('mark one can travel backward', (t) => {
    const spider = new ArachnidFramework({
        coordinates: {
            x: 1,
            y: 0,
        },
        markNumber: Mark.MarkOne,
    });

    const controlSequence = ['B'] as Direction[];
    const currentCoordinates = spider.move(controlSequence);

    t.deepEqual(currentCoordinates, {
        x: 0,
        y: 0,
    });
});

test('mark one can travel left', (t) => {
    const spider = new ArachnidFramework({
        coordinates: {
            x: 0,
            y: 0,
        },
        markNumber: Mark.MarkOne,
    });

    const controlSequence = ['L'] as Direction[];
    const currentCoordinates = spider.move(controlSequence);

    t.deepEqual(currentCoordinates, {
        x: 0,
        y: 1,
    });
});

test('mark one can travel right', (t) => {
    const spider = new ArachnidFramework({
        coordinates: {
            x: 0,
            y: 1,
        },
        markNumber: Mark.MarkOne,
    });

    const controlSequence = ['R'] as Direction[];
    const currentCoordinates = spider.move(controlSequence);

    t.deepEqual(currentCoordinates, {
        x: 0,
        y: 0,
    });
});

test('mark two will throw error if backs into back wall', (t) => {
    const spider = new ArachnidFramework({
        coordinates: {
            x: 0,
            y: 0,
        },
        markNumber: 2,
    });

    const controlSequence = ['B'] as Direction[];

    t.throws(() => spider.move(controlSequence));
});

test('mark two will throw error if backs into right wall', (t) => {
    const spider = new ArachnidFramework({
        coordinates: {
            x: 0,
            y: 0,
        },
        markNumber: 2,
    });

    const controlSequence = ['R'] as Direction[];
    t.throws(() => spider.move(controlSequence));
});

test('mark two will throw error if given invalid direction', (t) => {
    const spider = new ArachnidFramework({
        coordinates: {
            x: 0,
            y: 0,
        },
        markNumber: 2,
    });

    const controlSequence = ['P'];

    // @ts-ignore: Ignore error to allow testing.
    t.throws(() => spider.move(controlSequence));
});

test('mark two will throw error on invalid control string', (t) => {
    const spider = new ArachnidFramework({
        coordinates: {
            x: 0,
            y: 0,
        },
        markNumber: 2,
    });

    const controlString = 'FRFRFFFFFFFLLLLFFFFFRFFFFLFFLRRF';
    const controlSequence = controlString.split('') as Direction[];
    t.throws(() => spider.move(controlSequence));
});

test('mark two can travel forward', (t) => {
    const spider = new ArachnidFramework({
        coordinates: {
            x: 0,
            y: 0,
        },
        markNumber: 2,
    });

    const controlSequence = ['F'] as Direction[];
    const currentCoordinates = spider.move(controlSequence);

    t.deepEqual(currentCoordinates, {
        x: 1,
        y: 0,
    });
});

test('mark two can travel backward', (t) => {
    const spider = new ArachnidFramework({
        coordinates: {
            x: 1,
            y: 0,
        },
        markNumber: 2,
    });

    const controlSequence = ['B'] as Direction[];
    const currentCoordinates = spider.move(controlSequence);

    t.deepEqual(currentCoordinates, {
        x: 0,
        y: 0,
    });
});

test('mark two can travel left', (t) => {
    const spider = new ArachnidFramework({
        coordinates: {
            x: 0,
            y: 0,
        },
        markNumber: 2,
    });

    const controlSequence = ['L'] as Direction[];
    const currentCoordinates = spider.move(controlSequence);

    t.deepEqual(currentCoordinates, {
        x: 0,
        y: 1,
    });
});

test('mark two can travel right', (t) => {
    const spider = new ArachnidFramework({
        coordinates: {
            x: 0,
            y: 1,
        },
        markNumber: 2,
    });

    const controlSequence = ['R'] as Direction[];
    const currentCoordinates = spider.move(controlSequence);

    t.deepEqual(currentCoordinates, {
        x: 0,
        y: 0,
    });
});

// test('mark three can travel left')
