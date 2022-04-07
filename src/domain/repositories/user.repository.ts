import { User } from '../modules/entities/user';

export abstract class UserRepository {
  save: (user: User) => Promise<User>;
  findById: (id: number) => Promise<User>;
  findByName: (name: string) => Promise<User>;
  update: (id: number, user: Partial<User>) => Promise<any>;
  all: () => Promise<User[]>;
  delete: (id: number) => Promise<any>;
}
