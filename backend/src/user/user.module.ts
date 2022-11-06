import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './service/user-info.service';
import { UserController } from './user.controller';
import { UserInfoRepository } from './repository/user-info.repository';
@Module({
  imports: [TypeOrmModule.forFeature([UserInfoRepository])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
