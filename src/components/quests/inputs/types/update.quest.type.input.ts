import { Field, ID, InputType } from "@nestjs/graphql";

@InputType()
export class UpdateQuestTypeInput {
	@Field(() => ID)
	id: number;

	@Field()
	name: string;

	@Field()
	description: string;
}