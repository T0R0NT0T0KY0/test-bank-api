import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { QuestsTypesService } from "../../services/types/quests.types.service";
import { QuestsTypeEntity } from "../../entities/quests.type.entity";
import { CreateQuestTypeInput } from "../../inputs/types/create.quest.type.input";
import { UpdateQuestTypeInput } from "../../inputs/types/update.quest.type.input";

@Resolver()
export class QuestsTypesResolver {
	constructor (
		private readonly questsTypesService: QuestsTypesService,
	) {}

	@Mutation(() => QuestsTypeEntity)
	async createQuestType (@Args("createQuestType") createQuestTypeInput: CreateQuestTypeInput): Promise<QuestsTypeEntity> {
		return await this.questsTypesService.createQuestType(createQuestTypeInput);
	}

	@Mutation(() => QuestsTypeEntity)
	async updateQuestType (@Args("updateQuestType") updateQuestTypeInput: UpdateQuestTypeInput): Promise<QuestsTypeEntity> {
		return await this.questsTypesService.createQuestType(updateQuestTypeInput);
	}

	@Query(() => QuestsTypeEntity)
	async questType (@Args("questTypeId") questTypeId: number ): Promise<QuestsTypeEntity> {
		return await this.questsTypesService.getQuestTypeById(questTypeId);
	}

	@Query(() => [QuestsTypeEntity])
	async questsTypes (): Promise<QuestsTypeEntity[]> {
		return await this.questsTypesService.getAllQuestTypes();
	}
}
