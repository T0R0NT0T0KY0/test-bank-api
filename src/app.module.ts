import { Module } from "@nestjs/common";
import { postgres } from "./database/postgres";
import { UsersModule } from "./components/users/users.module";
import { GraphQLModule } from "@nestjs/graphql";

@Module({
	imports: [
		postgres(),
		UsersModule,
		GraphQLModule.forRoot({
			autoSchemaFile: "schema.gql",
			sortSchema: true,
			playground: true,
		}),
	],
	providers: [],
})
export class AppModule {}
