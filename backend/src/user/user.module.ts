import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './service/user-info.service';
import { UserController } from './user.controller';
import { UserInfoRepository } from './repository/user-info.repository';
@Module({
  imports: [
    MulterModule.register({
      dest: './uploads',
    }),
    TypeOrmModule.forFeature([UserInfoRepository]),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
