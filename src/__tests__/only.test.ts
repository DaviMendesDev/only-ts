import only, { M } from '../index';

const personObject: object = {
    name: "Phillipi",
    age: 18,
    birthday: new Date('06/06/2001')
};

const personArray: M = [];

personArray[("name" as string)] = "Phillipi";
personArray[("age" as string)] = 18,
personArray[("birthday" as string)] = new Date('06/06/2001');

const emptyObject = {};
const emptyArray: M = [];

test(`should return only the 'age' from 'personObject' object`, () => {
    const anAgeOnlyObject = { age: 18 };
    const theCallOnly = only(personObject, [ 'age' ]);

    // console.log(anAgeOnlyObject);
    // console.log(theCallOnly);

    expect(theCallOnly).toEqual(anAgeOnlyObject);
})

test(`should return only the 'age' from 'personArray' array`, () => {
    const anAgeOnlyObject = { age: 18 };
    const theCallOnly = only(personArray, [ 'age' ]);

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
    const wrongObject = only(personObject, ['name']);

    const anEmptyObject = { };
    const theCallOnly = only(wrongObject, [ 'age' ]);

    // console.log(anEmptyObject);
    // console.log(theCallOnly);

    expect(theCallOnly).toEqual(anEmptyObject);
})

test(`should return empty object ({ }) from array that doesn't have the given keys`, () => {
    const wrongObject = only(personArray, ['name']);

    const anEmptyObject = { };
    const theCallOnly = only(wrongObject, [ 'age' ]);

    // console.log(anEmptyObject);
    // console.log(theCallOnly);

    expect(theCallOnly).toEqual(anEmptyObject);
})