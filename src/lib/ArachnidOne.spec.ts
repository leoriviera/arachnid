import test from 'ava';

import { Direction } from '../types';

import { ArachnidOne } from './ArachnidOne';

test('will throw error if backs into back wall', (t) => {
    const spider = new ArachnidOne({
        coordinates: {
            x: 0,
            y: 0,
        },
    });

    const controlSequence = ['B'] as Direction[];

    t.throws(() => spider.move(controlSequence));
});

test('will throw error if backs into right wall', (t) => {
    const spider = new ArachnidOne({
        coordinates: {
            x: 0,
            y: 0,
        },
    });

    const controlSequence = ['R'] as Direction[];
    t.throws(() => spider.move(controlSequence));
});

test('will throw error if given invalid direction', (t) => {
    const spider = new ArachnidOne({
        coordinates: {
            x: 0,
            y: 0,
        },
    });

    const controlSequence = ['P'];

    // @ts-ignore: Ignore error to allow testing.
    t.throws(() => spider.move(controlSequence));
});

test('will throw error on invalid control string', (t) => {
    const spider = new ArachnidOne({
        coordinates: {
            x: 0,
            y: 0,
        },
    });

    const controlString = 'FRFRFFFFFFFLLLLFFFFFRFFFFLFFLRRF';
    const controlSequence = controlString.split('') as Direction[];
    t.throws(() => spider.move(controlSequence));
});

test('can travel forward', (t) => {
    const spider = new ArachnidOne({
        coordinates: {
            x: 0,
            y: 0,
        },
    });

    const controlSequence = ['F'] as Direction[];
    const currentCoordinates = spider.move(controlSequence);

    t.deepEqual(currentCoordinates, {
        x: 1,
        y: 0,
    });
});

test('can travel backward', (t) => {
    const spider = new ArachnidOne({
        coordinates: {
            x: 1,
            y: 0,
        },
    });

    const controlSequence = ['B'] as Direction[];
    const currentCoordinates = spider.move(controlSequence);

    t.deepEqual(currentCoordinates, {
        x: 0,
        y: 0,
    });
});

test('can travel left', (t) => {
    const spider = new ArachnidOne({
        coordinates: {
            x: 0,
            y: 0,
        },
    });

    const controlSequence = ['L'] as Direction[];
    const currentCoordinates = spider.move(controlSequence);

    t.deepEqual(currentCoordinates, {
        x: 0,
        y: 1,
    });
});

test('can travel right', (t) => {
    const spider = new ArachnidOne({
        coordinates: {
            x: 0,
            y: 1,
        },
    });

    const controlSequence = ['R'] as Direction[];
    const currentCoordinates = spider.move(controlSequence);

    t.deepEqual(currentCoordinates, {
        x: 0,
        y: 0,
    });
});
