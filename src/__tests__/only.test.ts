import only, { M } from '../index';

interface Person {
  name: string;
  age: number;
  birthday: Date;
}

const defaultValues: Person = {
  name: 'Phillipi',
  age: 18,
  birthday: new Date('06/06/2001'),
};

const personObject: object = defaultValues;

const personArray: M = [];

personArray['name'] = defaultValues.name;
personArray['age'] = defaultValues.age;
personArray['birthday'] = defaultValues.birthday;

// console.log(personObject, personArray);

const emptyObject = {};
const emptyArray: M = [];

const nestedObject: object = { user: personObject };
const nestedArray: M = [];
nestedArray["user"] = personArray;

test(`should return only the 'age' from 'personObject' object`, () => {
  const anAgeOnlyObject = { age: defaultValues.age };
  const theCallOnly = only(personObject, ['age']);

  // console.log(anAgeOnlyObject);
  // console.log(theCallOnly);

  expect(theCallOnly).toEqual(anAgeOnlyObject);
});

test(`should return only the 'age' from 'personArray' array`, () => {
  const anAgeOnlyObject = { age: defaultValues.age };
  const theCallOnly = only(personArray, ['age']);

  // console.log(anAgeOnlyObject);
  // console.log(theCallOnly);

  expect(theCallOnly).toEqual(anAgeOnlyObject);
});

test(`should return empty object ({ }) from empty array ([ ])`, () => {
  const anEmptyObject = {};
  const theCallOnly = only(emptyArray, ['age']);

  // console.log(anEmptyObject);
  // console.log(theCallOnly);

  expect(theCallOnly).toEqual(anEmptyObject);
});

test(`should return empty object ({ }) from empty object ({ })`, () => {
  const anEmptyObject = {};
  const theCallOnly = only(emptyObject, ['age']);

  // console.log(anEmptyObject);
  // console.log(theCallOnly);

  expect(theCallOnly).toEqual(anEmptyObject);
});

test(`should return empty object ({ }) from object that doesn't have the given keys`, () => {
  const wrongObject = only(personObject, ['name']);

  const anEmptyObject = {};
  const theCallOnly = only(wrongObject, ['age']);

  // console.log(anEmptyObject);
  // console.log(theCallOnly);

  expect(theCallOnly).toEqual(anEmptyObject);
});

test(`should return empty object ({ }) from array that doesn't have the given keys`, () => {
  const wrongObject = only(personArray, ['name']);

  const anEmptyObject = {};
  const theCallOnly = only(wrongObject, ['age']);

  // console.log(anEmptyObject);
  // console.log(theCallOnly);

  expect(theCallOnly).toEqual(anEmptyObject);
});

test(`should return only the 'age' and 'birthday' from string key: ('age birthday')`, () => {
  const personObjectWithouName = { age: defaultValues.age, birthday: defaultValues.birthday };
  const theCallOnly = only(personObject, 'age birthday');

  // console.log(personObjectWithouName);
  // console.log(theCallOnly);

  expect(theCallOnly).toEqual(personObjectWithouName);
});

test(`should return only the 'age' from string key: ('age birthday')`, () => {
  const personWithoutBirthday = { name: defaultValues.name, age: defaultValues.age };

  const anAgeOnlyObject = { age: defaultValues.age };
  const theCallOnly = only(personWithoutBirthday, 'age birthday');

  // console.log(anAgeOnlyObject);
  // console.log(theCallOnly);

  expect(theCallOnly).toEqual(anAgeOnlyObject);
});

test(`should return 'name' as 'username' from 'personObject' object` , () => {
  const usernameAliasesObject = { username: defaultValues.name };
  const theCallOnly = only(personObject, ['name as username']);

  // console.log(usernameAliasesObject);
  // console.log(theCallOnly);

  expect(theCallOnly).toEqual(usernameAliasesObject);
})

test(`should return 'name' as 'username' from 'personArray' array` , () => {
  const usernameAliasesObject = { username: defaultValues.name };
  const theCallOnly = only(personArray, ['name as username']);

  // console.log(usernameAliasesObject);
  // console.log(theCallOnly);

  expect(theCallOnly).toEqual(usernameAliasesObject);
})

test(`should return 'name' as 'username' from 'personArray' array` , () => {
  const usernameAliasesObject = { username: defaultValues.name };
  const theCallOnly = only(personArray, ['name as username']);

  // console.log(usernameAliasesObject);
  // console.log(theCallOnly);

  expect(theCallOnly).toEqual(usernameAliasesObject);
})

test(`should return 'user.name' as 'username' from nested object` , () => {
  const usernameAliasesObject = { username: defaultValues.name };
  const theCallOnly = only(nestedObject, ['user.name as username']);

  // console.log(usernameAliasesObject);
  // console.log(theCallOnly);

  expect(theCallOnly).toEqual(usernameAliasesObject);
})

test(`should return 'user.name' as 'username' from nested array` , () => {
  const usernameAliasesObject = { username: defaultValues.name };
  const theCallOnly = only(nestedArray, ['user.name as username']);

  // console.log(usernameAliasesObject);
  // console.log(theCallOnly);

  expect(theCallOnly).toEqual(usernameAliasesObject);
})

test(`should return '{ user: { name: "${defaultValues.name}}}' from nested object that don't passes an aliases to properties` , () => {
  const expected = { user: { name: defaultValues.name }};
  const theCallOnly = only(nestedObject, ['user.name']);

  // console.log(expected);
  // console.log(theCallOnly);

  expect(theCallOnly).toEqual(expected);
})

test(`should return '{ user: { name: "${defaultValues.name}}}' from nested array that don't passes an aliases to properties` , () => {
  const expected = { user: { name: defaultValues.name }};
  const theCallOnly = only(nestedArray, ['user.name']);

  // console.log(expected);
  // console.log(theCallOnly);

  expect(theCallOnly).toEqual(expected);
})

test(`should return '{ user: { name: "${defaultValues.name}}}' from nested object that don't passes the alias 'person.name' to properties` , () => {
  const expected = { person: { name: defaultValues.name }};
  const theCallOnly = only(nestedObject, ['user.name as person.name']);

  // console.log(expected);
  // console.log(theCallOnly);

  expect(theCallOnly).toEqual(expected);
})

test(`should return '{ person: { name: "${defaultValues.name}}}' from nested array that passes the alias 'person.name' to properties` , () => {
  const expected = { person: { name: defaultValues.name }};
  const theCallOnly = only(nestedArray, ['user.name as person.name']);

  // console.log(expected);
  // console.log(theCallOnly);

  expect(theCallOnly).toEqual(expected);
})