import dotenv from 'dotenv';
import { SALT_ROUNDS } from './constants';
dotenv.config();

export const config = {
	server: {
		host: process.env.APP_HOST,
		port: process.env.APP_PORT,
		isProduction: process.env.NODE_ENV === 'production',
		isSeed: process.env.NODE_ENV === 'seed',
		isDevelopment: process.env.NODE_ENV !== 'production',
	},
	db: {
		host: process.env.POSTGRES_HOST,
		port: process.env.POSTGRES_PORT,
		username: process.env.POSTGRES_USER,
		password: process.env.POSTGRES_PASSWORD,
		database: process.env.POSTGRES_DB,
	},
	jwt: {
		secret: process.env.JWT_SECRET,
	},
	bcrypt: {
		saltRounds: SALT_ROUNDS,
	},
};
