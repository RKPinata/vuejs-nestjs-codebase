import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './service/user-info.service';
import { UserController } from './user.controller';
import { UserInfo } from './entity/user-info.entity';

@Module({
  imports: [
    MulterModule.register({
      dest: './uploads',
    }),
    TypeOrmModule.forFeature([UserInfo]),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
