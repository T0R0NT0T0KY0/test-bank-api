import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateQuestTypeInput {
	@Field()
	name: string;

	@Field()
	description: string;
}