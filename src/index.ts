export type M = { [key: string]: any };

function getValue(obj: M, key: string): any {
  if (key.indexOf('.') === -1) return obj[key];

  const nextNestedObject: string = key.split('.')[0];
  key = key.replace(`${nextNestedObject}.`, '');

  return getValue(obj[nextNestedObject], key);
}

function getAlias(key: string): string {
  if (key.indexOf(' as ') === -1) return key;

  return key.split(' as ').pop()!.trim();
}

function getOriginalKey(key: string): string {
  if (key.indexOf(' as ') === -1) return key;

  return key.split(' as ')[0]!.trim();
}

export default function only(obj: M, keys: string[] | string): object {
  const result: M = new Object();

  if (typeof keys === 'string') keys = keys.split(' ');

  for (let key of keys) {
    const alias: string = getAlias(key);
    key = getOriginalKey(key);
    const value = getValue(obj, key);
    if (value) result[alias] = value;
  }

  return result;
}

export function onlyToReq(req: Request, keys: string[] | string): object {
  if (!req.body) return {};

  const body: M = req.body as M;

  return only(body, keys);
}
