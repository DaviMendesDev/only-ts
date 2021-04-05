export type M = { [key: string]: any };

export default function only (obj: M, keys: Array<string|String>): Object {
    const result: M = new Object();

    for (const key of keys) {
        result[key.toString()] = obj[key.toString()];
    }
    
    return result;
}

export function onlyToReq(req: Request, keys: Array<string|String>): Object {
    const result: M = new Object();

    if (! req.body)
        return result;

    const body: M = req.body as M;

    for (const key of keys) {
        result[key.toString()] = body[key.toString()];
    }
    
    return result;
}