import { Test, TestingModule } from '@nestjs/testing';
import { InstructorsController } from './instructors.controller';

describe('InstructorsController', () => {
  let controller: InstructorsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InstructorsController],
    }).compile();

    controller = module.get<InstructorsController>(InstructorsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
