import { Test, TestingModule } from '@nestjs/testing';
import { QuestsTypesService } from './quests.types.service';

describe('TypesService', () => {
  let service: QuestsTypesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QuestsTypesService],
    }).compile();

    service = module.get<QuestsTypesService>(QuestsTypesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
