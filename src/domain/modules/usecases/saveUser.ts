import { BadRequestException, Injectable } from '@nestjs/common';
import { UserRepository } from 'src/domain/repositories/user.repository';
import { ViaCepRepository } from 'src/domain/repositories/via-cep.repository';
import { Idade } from 'src/shared/utils/idade';
import { User } from '../entities/user';

@Injectable()
export class SaveUser {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly viaCepRepository: ViaCepRepository,
  ) {}

  async call(user: User): Promise<any> {
    try {
      const older = Idade(user.birthdate);

      if (older < 18)
        throw new BadRequestException('You must be over 18 to register');

      const consultUser = await this.viaCepRepository.consultAdress(
        user.zipcode,
      );

      if (!consultUser) throw new BadRequestException('Check the zip code');

      return await this.userRepository.save({
        ...user,
        street: consultUser.logradouro,
        neighborhood: consultUser.bairro,
        city: consultUser.localidade,
        state: consultUser.uf,
      });
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
