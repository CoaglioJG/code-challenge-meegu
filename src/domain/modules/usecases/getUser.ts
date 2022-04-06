import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UserRepository } from 'src/domain/repositories/user.repository';
import { User } from '../entities/user';

@Injectable()
export class GetUser {
  constructor(private readonly userRepository: UserRepository) {}

  async call(id?: number): Promise<User> {
    try {
      const user = await this.userRepository.findById(id);

      if (!user) throw new NotFoundException('User not found');

      return user;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
}
