import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './modules/todo/todo.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todo } from './modules/todo/entities/todo.entity';
import { UserModule } from './modules/user/user.module';
import { User } from './modules/user/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: '',
      password: '',
      database: 'todo',
      entities: [Todo, User],
      synchronize: true,
    }),
    TodoModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
