const { config } = require('./src/config');
const { isProduction, isSeed } = config.server;
module.exports = {
	type: 'postgres',
	host: config.db.host,
	port: config.db.port,
	username: config.db.username,
	password: config.db.password,
	database: config.db.database,
	synchronize: true,
	charset: 'utf8mb4',
	logging: !(isProduction || isSeed),
	seeds: ['src/components/**/seeder.ts'],
	factories: ['src/components/**/factory.ts'],
	entities: ['src/components/**/entity.ts'],
	migrations: ['src/db/migrations/**/*.ts'],
	// subscribers: ['src/subscriber/**/*.ts'],
};
