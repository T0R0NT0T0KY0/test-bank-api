import { TypeOrmModule } from "@nestjs/typeorm";
import { Envs } from "../../envs";

export const postgres = async () => {
	return TypeOrmModule.forRootAsync({
		useFactory: async () => ({
			type: "postgres",
			host: Envs.PG_HOST,
			port: Envs.PG_PORT,
			username: Envs.PG_USERNAME,
			password: Envs.PG_PASSWORD,
			database: Envs.PG_DATABASE,
			entities: [__dirname + "dist/**/*.entity.ts"],
			synchronize: true,
			verboseRetryLog: true,
			autoLoadEntities: true,
			logging: true,
		}),
	});
};
