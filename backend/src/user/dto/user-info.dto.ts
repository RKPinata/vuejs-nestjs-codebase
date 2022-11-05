import { ApiProperty } from '@nestjs/swagger';

export class UserInfoDto {
  @ApiProperty({
    required: false,
  })
  petName: string;

  @ApiProperty({
    required: false,
  })
  address: string;
}
