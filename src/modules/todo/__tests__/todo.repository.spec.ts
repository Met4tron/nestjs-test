import { Test, TestingModule } from '@nestjs/testing';
import { TodoRepository } from '../todo.repository';

describe('TodoRepository', () => {
  let service: TodoRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TodoRepository],
    }).compile();

    service = module.get<TodoRepository>(TodoRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
