import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UserRepository } from 'src/domain/repositories/user.repository';

@Injectable()
export class DeleteUser {
  constructor(private readonly userRepository: UserRepository) {}

  async call(id: number) {
    try {
      const user = await this.userRepository.findById(id);

      if (!user) throw new NotFoundException('User not found');

      return await this.userRepository.delete(id);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
