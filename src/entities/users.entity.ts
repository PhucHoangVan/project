import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { AbstractEntity } from '../share/base/abstract.entity';

export enum ROLES {
  USER = 'user',
  ADMIN = 'admin',
}

@Entity('users')
export class UserEntity extends AbstractEntity {
  @PrimaryGeneratedColumn({ name: 'user_id' })
  id: string;

  @Column({ name: 'email', type: 'varchar', length: '40', nullable: false })
  email: string;

  @Column({ name: 'password', type: 'text', nullable: false })
  password: string;

  @Column({ name: 'role', type: 'enum', nullable: false, default: ROLES.USER })
  @Column({ name: 'user_name', type: 'varchar', length: '40', default: 'user' })
  userName: string;

  @Column({ name: 'date_of_birth', type: 'date' })
  dateOfBirth: Date;
}
