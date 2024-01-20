import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken'
import {config} from '../config/index'


export const authenticate = (req: Request, res: Response, next: NextFunction) => {
    var { token = ""} = req.query;
	var tempToken: any = token;
	if (!token) {
		const tokenAuthHeader = req.headers['authorization'];
		tempToken = tokenAuthHeader && (tokenAuthHeader as string).split(" ")[1];
	}
	if (!tempToken) {
		return res
            .status(401)
			.json({
				msg: "Token not provided.",
			});
	}
    try {
		const { data } = jwt.verify(tempToken, config.jwtSecret) as jwt.JwtPayload;
		next();
	} catch (error: any) {
		if (error.name === "TokenExpiredError") {
            res.status(401).json({msg: "Token has expired."})
        } else {
			console.log(error.stack);
			res.status(401).json({ msg: "Unauthorized" });
		}
	}
}