import { createLogger, format, transports } from "winston";

const customFormat = format.combine(
	format.colorize({
		all: true,
	}),
	format.simple(),
);

export const logger = createLogger({
	level: "info",
	transports: [
		new transports.Console({
			format: customFormat,
		}),
	],
});
