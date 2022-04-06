import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UserRepository } from 'src/domain/repositories/user.repository';
import { User } from '../entities/user';

@Injectable()
export class GetUserByName {
  constructor(private readonly userRepository: UserRepository) {}

  async call(name: string): Promise<User> {
    try {
      const user = await this.userRepository.findByName(name);

      if (!user) throw new NotFoundException('User not found');

      return user;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
}
