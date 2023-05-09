import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { TodoRepository } from './todo.repository';

@Injectable()
export class TodoService {
  constructor(private readonly todoRepository: TodoRepository) {}

  create(createTodoDto: CreateTodoDto) {
    return this.todoRepository.create(createTodoDto);
  }

  findAll() {
    return this.todoRepository.findAll();
  }

  findOne(id: number) {
    return this.todoRepository.findOne(id);
  }

  update(id: number, updateTodoDto: UpdateTodoDto) {
    return `This action updates a #${id} todo`;
  }

  remove(id: number) {
    return this.todoRepository.remove(id);
  }
}
