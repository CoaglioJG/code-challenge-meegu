import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { User } from 'src/domain/modules/entities/user';
import { GetUser } from 'src/domain/modules/usecases/getUser';
import { GetUserByName } from 'src/domain/modules/usecases/getUserByName';
import { ListUser } from 'src/domain/modules/usecases/listUser';
import { SaveUser } from 'src/domain/modules/usecases/saveUser';
import { UpdateUser } from 'src/domain/modules/usecases/updateUser';
import { UserDto } from '../dto/user.dto';

@Controller('user')
export class UserController {
  constructor(
    private readonly listUser: ListUser,
    private readonly getUser: GetUser,
    private readonly saveUser: SaveUser,
    private readonly updateUser: UpdateUser,
    private readonly getUserByName: GetUserByName,
  ) {}

  @Get()
  all(): Promise<User[]> {
    return this.listUser.call();
  }

  @Get(':id')
  find(@Param('id') id: number): Promise<User> {
    return this.getUser.call(id);
  }

  @Get('find/name')
  findName(@Query('name') name: string): Promise<User> {
    return this.getUserByName.call(name);
  }

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  save(@Body() user: UserDto): Promise<User> {
    return this.saveUser.call(user);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() user: Partial<User>): Promise<any> {
    return this.updateUser.call(id, user);
  }
}
