import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserInfo extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'pet_name', type: 'varchar', nullable: true })
  petName: string;

  @Column({ type: 'varchar', nullable: true })
  address: string;
}
