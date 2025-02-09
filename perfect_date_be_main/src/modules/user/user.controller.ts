import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/request/create-user.dto';
import { ResponseMessage } from 'src/decorators/response-message.decorator';
import { User } from 'src/decorators/user-infor.decorator';
import { UserInterface } from './dto/response/user.interface';


@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }

  @Get(':id')
  @ResponseMessage('User found')
  findOne(@Param('id') id: string) {
    return this.userService.findById(id);
  }

  @Patch("add-partner")
  @ResponseMessage('Partner added')
  async addPartner(
    @User() user: UserInterface,
    @Body("partnerCode") partnerCode: string
  ) {
    return this.userService.addPartner(user._id, partnerCode);
  }

  @Get("partner")
  @ResponseMessage('Partner found')
  async getPartner(@User() user: UserInterface) {
    return this.userService.getPartner(user._id);
  }
}
