import { User } from 'src/auth/entity/user.entity';
import { EntityRepository, Repository } from 'typeorm';
import { UserInfoDto } from '../dto/user-info.dto';
import { UserInfo } from '../entity/user-info.entity';
import { userInfoData } from '../interface/user-info.interface';

@EntityRepository(UserInfo)
export class UserInfoRepository extends Repository<UserInfo> {
  async getUser(user: User): Promise<UserInfo> {
    const userInfo = await this.findOne({
      where: { id: user.user_info.id },
    });

    return userInfo;
  }

  async updateUserProfile(
    user: User,
    userInfoDto: UserInfoDto,
  ): Promise<userInfoData> {
    const userInfo = await this.getUser(user);
    userInfo.address = userInfoDto.address;
    userInfo.petName = userInfoDto.petName;

    await userInfo.save();
    return userInfo;
  }
}
