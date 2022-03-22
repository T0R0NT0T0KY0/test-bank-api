import { Field, ID, InputType } from "@nestjs/graphql";

@InputType()
export class UpdateQuestInput {
	@Field(() => ID)
	id: number;

	@Field()
	questTypeId: number;

	@Field()
	name: string;

	@Field()
	description: string;

	@Field()
	prize: number;

	@Field()
	prizeDescription: string;
}