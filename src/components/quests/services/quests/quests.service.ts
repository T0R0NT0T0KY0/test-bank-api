import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { QuestsEntity } from "../../entities/quests.entity";
import { CreateQuestInput } from "../../inputs/quests/create.quest.Input";
import { QuestsTypeEntity } from "../../entities/quests.type.entity";
import { UpdateQuestInput } from "../../inputs/quests/update.quest.input";

@Injectable()
export class QuestsService {
	constructor (
		@InjectRepository(QuestsEntity)
		private readonly questsRepository: Repository<QuestsEntity>,
		@InjectRepository(QuestsTypeEntity)
		private readonly questsTypeRepository: Repository<QuestsTypeEntity>,
	) {}

	async createQuest (createQuestInput: CreateQuestInput): Promise<QuestsEntity> {
		const questType = await this.questsTypeRepository.findOne({ where: { id: createQuestInput.questTypeId } });
		return await this.questsRepository.save({
			questType: questType,
			name: createQuestInput.name,
			description: createQuestInput.description,
			prize: createQuestInput.prize,
			prizeDescription: createQuestInput.prizeDescription,
		});
	}

	async getQuestById (questId: number): Promise<QuestsEntity> {
		return await this.questsRepository.findOne({ where: { id: questId } });
	}

	async getAllQuest (): Promise<QuestsEntity[]> {
		return await this.questsRepository.find();
	}

	async updateQuest (updateQuestInput: UpdateQuestInput): Promise<QuestsEntity> {
		const questType = await this.questsTypeRepository.findOne({ where: { id: updateQuestInput.questTypeId } });
		await this.questsRepository.update({ id: updateQuestInput.id }, {
			questType: questType,
			name: updateQuestInput.name,
			description: updateQuestInput.description,
			prize: updateQuestInput.prize,
			prizeDescription: updateQuestInput.prizeDescription,
		});
		return this.getQuestById(updateQuestInput.id);
	}
}
