import { Test, TestingModule } from '@nestjs/testing';
import { UserscService } from './users.service';

describe('UserscService', () => {
  let service: UserscService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserscService],
    }).compile();

    service = module.get<UserscService>(UserscService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
