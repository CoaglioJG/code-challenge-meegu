import { Module } from '@nestjs/common';
import { ViaCepModule } from './conductor/via-cep.module';

@Module({
  imports: [ViaCepModule],
})
export class HttpsModule {}
