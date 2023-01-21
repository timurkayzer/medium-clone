import { Request, Response, NextFunction } from 'express';
import { IUserService } from '../user/user.service.interface';
import { IMiddleware } from './middleware.interface';

export class AuthMiddleware implements IMiddleware {
	constructor(private userService: IUserService) { }

	async execute(req: Request, res: Response, next: NextFunction): Promise<void> {
		if (!req.userEmail) {
			res.status(401).send();
		} else {
			const user = await this.userService.getUserInfo(req.userEmail);
			if (user) {
				req.userModel = user;
				next();
			} else {
				res.status(403).send();
			}
		}
	}
}
