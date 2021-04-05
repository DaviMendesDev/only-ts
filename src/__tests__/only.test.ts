import only, { M } from '../index';

const person_o: object = {
    name: "Phillipi",
    age: 18,
    birthday: new Date('06/06/2001')
};

const person_a: M = [];

person_a["name"] = "Phillipi";
person_a["age"] = 18,
person_a["birthday"] = new Date('06/06/2001');

const emptyObject = {};
const emptyArray: M = [];

test(`should return only the 'age' from 'person_o' object`, () => {
    const anAgeOnlyObject = { age: 18 };
    const theCallOnly = only(person_o, [ 'age' ]);

    // console.log(anAgeOnlyObject);
    // console.log(theCallOnly);

    expect(theCallOnly).toEqual(anAgeOnlyObject);
})

test(`should return only the 'age' from 'person_a' array`, () => {
    const anAgeOnlyObject = { age: 18 };
    const theCallOnly = only(person_a, [ 'age' ]);

    // console.log(anAgeOnlyObject);
    // console.log(theCallOnly);

    expect(theCallOnly).toEqual(anAgeOnlyObject);
})

test(`should return empty object ({ }) from empty array ([ ])`, () => {
    const anEmptyObject = { };
    const theCallOnly = only(emptyArray, [ 'age' ]);

    // console.log(anEmptyObject);
    // console.log(theCallOnly);

    expect(theCallOnly).toEqual(anEmptyObject);
})

test(`should return empty object ({ }) from empty object ({ })`, () => {
    const anEmptyObject = { };
    const theCallOnly = only(emptyObject, [ 'age' ]);

    // console.log(anEmptyObject);
    // console.log(theCallOnly);

    expect(theCallOnly).toEqual(anEmptyObject);
})

test(`should return empty object ({ }) from object that doesn't have the given keys`, () => {
    const wrongObject = only(person_o, ['name']);

    const anEmptyObject = { };
    const theCallOnly = only(wrongObject, [ 'age' ]);

    // console.log(anEmptyObject);
    // console.log(theCallOnly);

    expect(theCallOnly).toEqual(anEmptyObject);
})

test(`should return empty object ({ }) from array that doesn't have the given keys`, () => {
    const wrongObject = only(person_a, ['name']);

    const anEmptyObject = { };
    const theCallOnly = only(wrongObject, [ 'age' ]);

    // console.log(anEmptyObject);
    // console.log(theCallOnly);

    expect(theCallOnly).toEqual(anEmptyObject);
})