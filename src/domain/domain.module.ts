import { Module } from '@nestjs/common';
import { DeleteUser } from './modules/usecases/deleteUser';
import { GetUser } from './modules/usecases/getUser';
import { GetUserByName } from './modules/usecases/getUserByName';
import { ListUser } from './modules/usecases/listUser';
import { SaveUser } from './modules/usecases/saveUser';
import { UpdateUser } from './modules/usecases/updateUser';

@Module({
  providers: [
    SaveUser,
    UpdateUser,
    GetUser,
    ListUser,
    GetUserByName,
    DeleteUser,
  ],
  exports: [SaveUser, UpdateUser, GetUser, ListUser, GetUserByName, DeleteUser],
})
export class DomainModule {}
