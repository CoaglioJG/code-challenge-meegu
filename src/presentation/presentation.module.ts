import { Module } from '@nestjs/common';
import { DomainModule } from 'src/domain/domain.module';
import { UserController } from './controllers/user.controller';

@Module({
  imports: [DomainModule],
  providers: [],
  controllers: [UserController],
})
export class PresentationModule {}
