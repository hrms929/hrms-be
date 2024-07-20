import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('user_test')
export class UserEntity {
  @PrimaryColumn()
  id: number;

  @Column({ name: 'name' })
  name: string;
}
