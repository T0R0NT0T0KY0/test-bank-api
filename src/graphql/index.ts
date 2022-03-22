import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";


export const graphql = async () => {
	return GraphQLModule.forRoot<ApolloDriverConfig>({
		driver: ApolloDriver,
		autoSchemaFile: "schema.gql",
		sortSchema: true,
		playground: true,
	});
};
