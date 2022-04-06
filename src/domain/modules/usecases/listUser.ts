import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UserRepository } from 'src/domain/repositories/user.repository';
import { User } from '../entities/user';

@Injectable()
export class ListUser {
  constructor(private readonly userRepository: UserRepository) {}

  async call(): Promise<User[]> {
    try {
      const listUsers = await this.userRepository.all();

      if (!listUsers)
        throw new NotFoundException('There is no registered user');

      return listUsers;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
