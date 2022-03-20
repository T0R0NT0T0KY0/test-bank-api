import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { Envs } from "./envs";
import { logger } from "./utils/winston.logger";

const PORT = Envs.PORT;

export const run = async () => {
	const app = await NestFactory.create(AppModule);
	await app.listen(PORT, () => {
		logger.info(`Server start on port: ${PORT} at ${new Date()}`);
	});
};
