import { Global, Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { ViaCepRepository } from 'src/domain/repositories/via-cep.repository';
import { ViaCepImpl } from './impl/via-cep';

@Global()
@Module({
  imports: [
    HttpModule.registerAsync({
      useFactory: async (configService: ConfigService) => ({
        baseURL: configService.get<string>('VIA_CEP'),
        responseType: 'json',
        headers: {
          'Content-Type': 'application/json',
        },
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [{ provide: ViaCepRepository, useClass: ViaCepImpl }],
  exports: [ViaCepRepository],
})
export class ViaCepModule {}
