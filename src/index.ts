export type M = { [key: string]: any };

export type Key = { key: string; alias: string | null };

function getValue(obj: M, key: string): any {
  if (key.indexOf('.') === -1) {
    return obj[key];
  } else {
    const leftSide = key.slice(0, key.indexOf('.'));
    const rightSide = key.slice(key.indexOf('.') + 1);

    return getValue(obj[leftSide], rightSide);
  }
}

function separateKeyFromAlias(key: string): Key {
  if (key.indexOf(' as ') === -1) return { key, alias: null };

  return {
    key: key.split(' as ')[0]!.trim(),
    alias: key.split(' as ').pop()!.trim(),
  };
}

function getAlias(key: string): string | null {
  return separateKeyFromAlias(key).alias;
}

function getOriginalKey(key: string): string {
  return separateKeyFromAlias(key).key;
}

function setValueToAlias(alias: string, value: any): M {
  if (alias.indexOf('.') === -1) {
    return { [alias]: value };
  } else {
    const leftSide = alias.slice(0, alias.indexOf('.'));
    const rightSide = alias.slice(alias.indexOf('.') + 1);

    return { [leftSide]: setValueToAlias(rightSide, value) };
  }
}

export function deepMerge(to: M, from: M): M {
  let result: M = { ...to };

  for (const key in from) {
    if (key in to) result[key] = deepMerge(to[key], from[key]);
    else result = { ...to, ...from };
  }

  return result;
}

export default function only(obj: M, keys: string[] | string): object {
  let result: M = {};

  if (typeof keys === 'string') keys = keys.split(' ');

  for (let key of keys) {
    const alias: string | null = getAlias(key);
    key = getOriginalKey(key);

    const value = getValue(obj, key);

    result = deepMerge(result, setValueToAlias(alias ?? key, value));
  }

  return result;
}

export function onlyToReq(req: Request, keys: string[] | string): object {
  if (!req.body) return {};

  const body: M = req.body as M;

  return only(body, keys);
}
