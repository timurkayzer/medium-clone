import { ClassConstructor, plainToClass } from "class-transformer";
import { validate } from "class-validator";
import { Handler, NextFunction, Request, RequestHandler, Response } from "express";


export function ValidateMiddleware(classToValidate: ClassConstructor<object>) {
    return function (req: Request, res: Response, next: NextFunction) {
        const instance = plainToClass(classToValidate, req.body);
        validate(instance).then((errors) => {
            if (errors.length > 0) {
                res.status(400).send(errors);
            } else {
                next();
            }
        });
        next();
    };
}