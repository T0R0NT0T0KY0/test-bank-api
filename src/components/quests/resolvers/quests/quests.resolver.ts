import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { QuestsService } from "../../services/quests/quests.service";
import { CreateQuestInput } from "../../inputs/quests/create.quest.Input";
import { QuestsEntity } from "../../entities/quests.entity";
import { UpdateQuestInput } from "../../inputs/quests/update.quest.input";

@Resolver()
export class QuestsResolver {
	constructor (
		private readonly questsService: QuestsService,
	) {}

	@Mutation(() => QuestsEntity)
	async createUser (@Args("createUser") createQuestInput: CreateQuestInput): Promise<QuestsEntity> {
		return await this.questsService.createQuest(createQuestInput);
	}

	@Mutation(() => QuestsEntity)
	async updateUser (@Args("updateUser") updateQuestInput: UpdateQuestInput): Promise<QuestsEntity> {
		return await this.questsService.updateQuest(updateQuestInput);
	}

	@Query(() => QuestsEntity)
	async quest (@Args("questId") questId: number): Promise<QuestsEntity> {
		return await this.questsService.getQuestById(questId);
	}

	@Query(() => [QuestsEntity])
	async quests (): Promise<QuestsEntity[]> {
		return await this.questsService.getAllQuest();
	}
}
