import { sign, SignOptions, verify } from 'jsonwebtoken';
import { config } from '../config';
import { logger } from './Logger';

export class AuthenticationService {
	public static signToken(payload: object, options?: SignOptions): Promise<string> {
		return new Promise((resolve, reject) => {
			sign(payload, config.jwt.secret, options, function (err, token) {
				if (err) {
					logger.error(err);
					reject(err);
					return;
				}
				return resolve(token);
			});
		});
	}

	public static verifyToken(token: string) {
		return new Promise((resolve, reject) => {
			verify(token, config.jwt.secret, function (err, decoded) {
				if (err) {
					logger.error(err);
					reject(err);
					return;
				}
				return resolve(decoded);
			});
		});
	}
}
