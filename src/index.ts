export type M = { [key: string]: any };

export default function only(obj: M, keys: string[] | string): object {
  const result: M = new Object();

  if (typeof keys === 'string') keys = keys.split(' ');

  for (const key of keys) {
    if (obj[key]) result[key] = obj[key];
  }

  return result;
}

export function onlyToReq(req: Request, keys: string[]): object {
  const result: M = new Object();

  if (!req.body) return result;

  const body: M = req.body as M;

  for (const key of keys) {
    if (body[key]) result[key] = body[key];
  }

  return result;
}
