import {
  Body,
  Controller,
  Get,
  Logger,
  Patch,
  Put,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBearerAuth, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { GetUser } from '../auth/decorator/get-user.decorator';
import { User } from '../auth/entity/user.entity';
import { editFileName, imageFileFilter } from '../utils/file-upload.utils';
import { userInfoData } from './interface/user-info.interface';
import { UserService } from './service/user-info.service';
import { UserInfoDto } from './dto/user-info.dto';

@ApiTags('User')
@ApiBearerAuth()
@Controller('user')
@UseGuards(AuthGuard())
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  getUserInfo(@GetUser() user: User): Promise<userInfoData> {
    return this.userService.getUser(user);
  }

  @Put()
  updateUserInfo(
    @Body() userInfoDto: UserInfoDto,
    @GetUser() user: User,
  ): Promise<userInfoData> {
    return this.userService.updateUserProfile(user, userInfoDto);
  }
}
