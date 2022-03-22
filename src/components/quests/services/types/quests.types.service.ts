import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { QuestsTypeEntity } from "../../entities/quests.type.entity";
import { CreateQuestTypeInput } from "../../inputs/types/create.quest.type.input";
import { UpdateQuestTypeInput } from "../../inputs/types/update.quest.type.input";

@Injectable()
export class QuestsTypesService {
	constructor (
		@InjectRepository(QuestsTypeEntity)
		private readonly questsTypesRepository: Repository<QuestsTypeEntity>,
	) {}

	async createQuestType (createQuestInput: CreateQuestTypeInput): Promise<QuestsTypeEntity> {
		return await this.questsTypesRepository.save({
			name: createQuestInput.name,
			description: createQuestInput.description,
		});
	}

	async getQuestTypeById (questTypeId: number): Promise<QuestsTypeEntity> {
		return this.questsTypesRepository.findOne({ where: { id: questTypeId } });
	}

	async getAllQuestTypes (): Promise<QuestsTypeEntity[]> {
		return this.questsTypesRepository.find();
	}

	async updateQuestType (updateQuestTypeInput: UpdateQuestTypeInput): Promise<QuestsTypeEntity> {
		await this.questsTypesRepository
			.update({ id: updateQuestTypeInput.id },
				{ name: updateQuestTypeInput.name, description: updateQuestTypeInput.description });
		return this.getQuestTypeById(updateQuestTypeInput.id);
	}
}
