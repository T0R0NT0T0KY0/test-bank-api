import { config } from "dotenv";
config();

export const Envs = {
	PORT: +process.env.PORT || 5000,

	PG_HOST: process.env.PG_HOST,
	PG_PORT: process.env.PG_PORT,
	PG_PASSWORD: process.env.PG_PASSWORD,
	PG_DATABASE: process.env.PG_DATABASE,
	PG_USERNAME: process.env.PG_USERNAME,
};
