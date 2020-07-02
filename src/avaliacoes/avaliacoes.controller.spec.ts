import { Test, TestingModule } from '@nestjs/testing';
import { AvaliacoesController } from './avaliacoes.controller';

describe('Avaliacoes Controller', () => {
  let controller: AvaliacoesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AvaliacoesController],
    }).compile();

    controller = module.get<AvaliacoesController>(AvaliacoesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
