import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from 'src/domain/repositories/user.repository';
import { User } from './entities/user.entity';
import { UserImpl } from './mysql/user.impl';

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [{ provide: UserRepository, useClass: UserImpl }],
  exports: [UserRepository],
})
export class DatabaseModule {}
