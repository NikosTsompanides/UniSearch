import { hash, compare } from 'bcrypt';
import { config } from '../../config';

export class BCryptService {
	public static hashPassword(password: string) {
		return hash(password, config.bcrypt.saltRounds);
	}

	public static checkPassword(payload: string, hash: string) {
		return compare(payload, hash);
	}
}
