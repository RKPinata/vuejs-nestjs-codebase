import { User } from 'src/auth/entity/user.entity';
import { EntityRepository, Repository } from 'typeorm';
import { UserInfo } from '../entity/user-info.entity';

@EntityRepository(UserInfo)
export class UserInfoRepository extends Repository<UserInfo> {
  async getUser(user: User): Promise<UserInfo> {
    const userInfo = await this.findOne({
      where: { id: user.user_info.id },
    });

    return userInfo;
  }
}
