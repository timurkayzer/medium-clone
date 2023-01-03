import { Handler, NextFunction, Request, RequestHandler, Response } from "express";


export function ValidateMiddleware(req: Request, res: Response, next: NextFunction) {
    next();
}