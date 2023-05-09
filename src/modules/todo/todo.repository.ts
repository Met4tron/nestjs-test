import { Injectable } from '@nestjs/common';
import { Todo } from './entities/todo.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTodoDto } from './dto/create-todo.dto';

@Injectable()
export class TodoRepository {
  constructor(
    @InjectRepository(Todo)
    private todosRepository: Repository<Todo>,
  ) {}

  create(createTodoDto: CreateTodoDto) {
    return this.todosRepository.insert(createTodoDto);
  }

  findAll(): Promise<Todo[]> {
    return this.todosRepository.find({
      relations: {
        user: true,
      }
    });
  }

  findOne(id: number): Promise<Todo | null> {
    return this.todosRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.todosRepository.delete(id);
  }
}
