import { M } from '../index';

interface Person {
  name: string;
  age: number;
  birthday: Date;
}

export default class ComplexObjects {

  private static readonly defaultValues: Person = {
    name: 'Phillipi',
    age: 18,
    birthday: new Date('06/06/2001'),
  };

  private static readonly personObject: object = ComplexObjects.defaultValues;

  private static personArray: M = [];


  public static init () {
    this.personArray.name = this.defaultValues.name;
    this.personArray.age = this.defaultValues.age;
    this.personArray.birthday = this.defaultValues.birthday;
    return this;
  }

  public static defaultValuesObject () {
    return this.defaultValues;
  }

  public static nestedObject() {
    return { user: this.defaultValues };
  }

  public static nestedArray() {
    const nestedArray: M = [];
    return nestedArray.user = this.personArray;
  }

  public static emptyArray() {
    return [ ];
  }

  public static emptyObject() {
    return { };
  }

  public static plainSimpleObject () {
    return this.defaultValues;
  }

  public static nestedAgeSimpleObject () {
    return { age: this.defaultValues.age };
  }

  public static complexNestedObject () {

  }
}