import { Test, TestingModule } from '@nestjs/testing';
import { UserDto } from 'src/presentation/dto/user.dto';
import { UserRepository } from '../repositories/user.repository';

const mockUserRepository = () => ({
  save: jest.fn(),
  findById: jest.fn(),
  findByName: jest.fn(),
  update: jest.fn(),
  all: jest.fn(),
  delete: jest.fn(),
});

describe('UsersService', () => {
  let userRepository = null;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: UserRepository,
          useFactory: mockUserRepository,
        },
      ],
    }).compile();

    userRepository = module.get<UserRepository>(UserRepository);
  });

  it('should be defined', () => {
    expect(userRepository).toBeDefined();
  });

  describe('createUser', () => {
    let mockCreateUserDto: UserDto;

    beforeEach(() => {
      mockCreateUserDto = {
        name: 'Mock User',
        birthdate: '2005/10/22',
        document: '132546',
        acceptedTerms: true,
        zipcode: '01001000',
        street: 'Praça da Sé',
        neighborhood: 'Sé',
        city: 'São Paulo',
        state: 'SP',
      };
    });

    it('Create User', async () => {
      const result = await userRepository.save(mockCreateUserDto);

      expect(result);
    });
  });
});
