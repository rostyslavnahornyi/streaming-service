export interface IContext {
    user: any,
    req: Express.Request,
    res: Express.Response
}

type ResolverFn = (parent: any, args: any, ctx: IContext, info: any) => Promise<any>;

export interface IResolverMap {
    [field: string]: ResolverFn;
}
