import { Handler, NextFunction, Request, RequestHandler, Response } from "express";


export function AuthMiddleware(req: Request, res: Response, next: NextFunction) {
    next();
}