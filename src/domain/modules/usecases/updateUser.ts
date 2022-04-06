import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UserRepository } from 'src/domain/repositories/user.repository';
import { User } from '../entities/user';

@Injectable()
export class UpdateUser {
  constructor(private readonly userRepository: UserRepository) {}

  async call(id: number, user: Partial<User>): Promise<any> {
    try {
      const updateUser = await this.userRepository.findById(id);

      if (!updateUser) throw new NotFoundException('User not found');

      return await this.userRepository.update(id, user);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
}
