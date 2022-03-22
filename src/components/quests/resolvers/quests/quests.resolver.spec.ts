import { Test, TestingModule } from '@nestjs/testing';
import { QuestsResolver } from './quests.resolver';

describe('ResolversResolver', () => {
  let resolver: QuestsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QuestsResolver],
    }).compile();

    resolver = module.get<QuestsResolver>(QuestsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
