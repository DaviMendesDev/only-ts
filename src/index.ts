export type M = { [key: string]: any };

export default function only(obj: M, keys: string[]): object {
  const result: M = new Object();

  for (const key of keys) {
    result[key] = obj[key];
  }

  return result;
}

export function onlyToReq(req: Request, keys: string[]): object {
  const result: M = new Object();

  if (!req.body) return result;

  const body: M = req.body as M;

  for (const key of keys) {
    result[key] = body[key];
  }

  return result;
}
