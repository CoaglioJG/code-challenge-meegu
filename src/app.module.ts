import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DomainModule } from './domain/domain.module';
import { DatabaseModule } from './infra/databases/database.module';
import { HttpsModule } from './infra/http/http.module';
import { PresentationModule } from './presentation/presentation.module';
import { DataBaseConnectionService } from './shared/databases/meegu';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: DataBaseConnectionService,
    }),
    ConfigModule.forRoot({ isGlobal: true }),
    DomainModule,
    DatabaseModule,
    PresentationModule,
    HttpsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
