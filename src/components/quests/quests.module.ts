import { Module } from "@nestjs/common";
import { QuestsService } from "./services/quests/quests.service";
import { QuestsResolver } from "./resolvers/quests/quests.resolver";
import { TypeOrmModule } from "@nestjs/typeorm";
import { QuestsTypeEntity } from "./entities/quests.type.entity";
import { QuestsEntity } from "./entities/quests.entity";
import { QuestsTypesService } from "./services/types/quests.types.service";
import { QuestsTypesResolver } from "./resolvers/types/quests.types.resolver";

@Module({
	imports: [TypeOrmModule.forFeature([QuestsEntity, QuestsTypeEntity])],
	providers: [QuestsService, QuestsTypesResolver, QuestsResolver, QuestsTypesService],
})
export class QuestsModule {}
