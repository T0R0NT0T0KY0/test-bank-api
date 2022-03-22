import { Module } from "@nestjs/common";
import { postgres } from "./database/postgres";
import { UsersModule } from "./components/users/users.module";
import { graphql } from "./graphql";
import { QuestsModule } from "./components/quests/quests.module";

@Module({
	imports: [
		postgres(),
		graphql(),
		UsersModule,
		QuestsModule
	],
	providers: [],
})
export class AppModule {}
