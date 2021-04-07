# only-ts
[OnlyTS](https://github.com/DaviMendesDev/only-ts) is a typescript package based on [only](https://github.com/tj/node-only) project. It will receive an array or object and return only the expected values, some more examples are below.

## Installation
run the following command on your npm project.

    $ npm i only-ts

## Getting Started
Let's imagine that we have a form-body-data-like this (like `req.body`) :

```ts
type FormData = {
    [key: string]: any,
}
```
and we receive this form data to create a new user:
```ts
const personData: FormData = {
    name: 'Willson',
    age: '24',
    jwtoken: 'some-token',
}
```
But we don't want that a user can sets up your own JWToken, so we just use only to extract what we want from this data, like that:

```ts
    import only from 'only-ts'

    // ...

    only(personData, ['name', 'age']); // = { name: 'Willson', age: '24' }

    // ...
```

You can also use aliases:
```ts
    only(personData, ['name as username', 'age']); // = { username: 'Willson', age: '24' }
```

<!-- And you can get data from nested objects too:
```ts
    only({ user: personData }, ['user.name as username', 'age']); // = { username: 'Willson', age: '24' }
```
**Notice**: nested properties needs an alias to work. -->