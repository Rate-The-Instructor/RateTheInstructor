import { Test, TestingModule } from '@nestjs/testing';
import { SrcService } from './src.service';

describe('SrcService', () => {
  let service: SrcService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SrcService],
    }).compile();

    service = module.get<SrcService>(SrcService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
