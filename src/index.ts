import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
// import expressPinoLogger from 'express-pino-logger';

import { runGraphQLServer } from './server';
import { getConnection } from './db';
import { logger } from './utils/Logger';

export const runApp = async (): Promise<void> => {
	// Connect to Postgres
	await getConnection();
	console.log('💾 Database connection established 💾');

	// Initialize Express Server
	const app = express();
	app.use('*', cors());
	//app.use(expressPinoLogger({ logger }));

	// Run GraphQL Server
	await runGraphQLServer(app);
};

process.on('uncaughtException', (error: Error): void => {
	logger.error(error);
	process.exit(1);
});

process.on('unhandledRejection', (error: Error): void => {
	logger.error(error);
	process.exit(1);
});

runApp();
