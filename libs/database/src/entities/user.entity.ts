import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'USERS' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  sub_cognito_id: string;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  phone: string;

  @Column({ nullable: false, unique: false })
  email: string;

  @Column({ nullable: false, type: 'decimal', precision: 10, scale: 2 })
  pay_rate: number;

  @Column({ nullable: true })
  home_address: string;

  @CreateDateColumn({ nullable: false, name: 'created_at' })
  created_at: Date;

  @Column({ nullable: false })
  creator_user_id: string;

  @UpdateDateColumn({ nullable: true, name: 'updated_at' })
  updated_at: Date;

  @Column({ nullable: true })
  modifier_user_id: string;

  @Column({ nullable: true })
  date_invited: Date;

  @Column({ nullable: true })
  date_registered: Date;

  @Column({ nullable: true })
  last_login: Date;

  @Column({ nullable: true })
  user_system_rol: String;

  @Column({ nullable: true })
  employee_id: String;
}
