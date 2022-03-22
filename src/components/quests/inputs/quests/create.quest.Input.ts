import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateQuestInput {
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