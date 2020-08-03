import pino from "pino";
import { config } from '../config'
export const logger = pino ({
  name: 'Insitutions',
  level: 'debug',
  prettyPrint: config.server.isDevelopment
});