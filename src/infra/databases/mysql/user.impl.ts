import { BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/domain/modules/entities/user';
import { UserRepository } from 'src/domain/repositories/user.repository';
import { Like, Repository } from 'typeorm';

export class UserImpl implements UserRepository {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async all(): Promise<User[]> {
    try {
      return await this.userRepository.find();
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  async findById(id: number): Promise<User> {
    try {
      return await this.userRepository.findOne(id);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  async findByName(name: string): Promise<User> {
    try {
      return await this.userRepository.findOne({
        where: { name: Like('%' + name + '%') },
      });
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  async save(user: User): Promise<User> {
    try {
      const addUser = this.userRepository.create(user);

      if (!addUser)
        throw new BadRequestException('Error creating, review data');

      try {
        return await this.userRepository.save(addUser);
      } catch (error) {
        throw new BadRequestException(error.message);
      }
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async update(id: number, user: Partial<User>) {
    try {
      return await this.userRepository.update(id, user);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async delete(id: number) {
    try {
      return await this.userRepository.softDelete(id);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
