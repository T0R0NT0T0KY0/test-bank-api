import { createLogger, format, transports } from "winston";

export const logger = createLogger({
	format: format.json(),
	handleExceptions: true,
	exitOnError: false,
	transports: [new transports.Console({ format: format.simple() })],
});
