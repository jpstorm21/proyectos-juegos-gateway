import { Test, TestingModule } from '@nestjs/testing';
import { AuthcService } from './auth.service';

describe('AuthcService', () => {
  let service: AuthcService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthcService],
    }).compile();

    service = module.get<AuthcService>(AuthcService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
