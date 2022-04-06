import { BadRequestException, HttpException, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';
import { ViaCepRepository } from 'src/domain/repositories/via-cep.repository';

@Injectable()
export class ViaCepImpl implements ViaCepRepository {
  constructor(private httpService: HttpService) {}

  async consultAdress(zipcode: string) {
    try {
      const cep = await lastValueFrom(
        this.httpService.get(`/${zipcode}/json/`),
      );

      console.log(cep);
      if (!cep) throw new BadRequestException('Check the zip code');

      return cep.data;
    } catch (error) {
      throw new HttpException(error.response.data, error.status);
    }
  }
}
