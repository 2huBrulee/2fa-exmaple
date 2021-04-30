import { Test } from '@nestjs/testing';
import { Simios2faService } from './simios2fa.service';

describe('Simios2faService', () => {
  let service: Simios2faService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [Simios2faService],
    }).compile();

    service = module.get(Simios2faService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
