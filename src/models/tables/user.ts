import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { TimeColumns } from '../common/time-columns';

@Entity()
export class User extends TimeColumns {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column('varchar', { nullable: false, unique: true, select: false })
  oauthId: string;

  @Column('varchar', { nullable: false, select: false })
  name: string;

  @Column('varchar', { nullable: true, select: false })
  profileImage: string;

  @Column('varchar', { nullable: false, unique: true, select: false })
  phoneNumber: string;

  @Column('varchar', { nullable: true, unique: true, select: false })
  email: string;

  @Column('varchar', { nullable: false, select: false })
  nickname: string;

  @Column('datetime', { nullable: true, select: false })
  birth: string;

  @Column('tinyint', { width: 1, nullable: false, select: false })
  gender: number;

  @Column('int', { nullable: true, select: false })
  mileage: number;

  @Column('tinyint', { width: 1, nullable: false, select: false, default: 0 })
  smsAdsConsent: boolean;

  @Column('tinyint', { width: 1, nullable: false, select: false, default: 0 })
  emailAdsConsent: boolean;
}
