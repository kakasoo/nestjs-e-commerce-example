import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { TimeColumns } from '../common/time-columns';

@Entity()
export class User extends TimeColumns {
  @PrimaryGeneratedColumn()
  public readonly id!: number;

  @Column('varchar', { nullable: false, unique: true, select: false })
  public oauthId!: string;

  @Column('varchar', { nullable: false, select: false })
  public name!: string;

  @Column('varchar')
  public nickname!: string;

  @Column('varchar', { select: false })
  public profileImage!: string;

  @Column('varchar', { unique: true, select: false })
  public phoneNumber!: string;

  @Column('varchar', { unique: true, select: false })
  public email!: string;

  @Column('datetime', { select: false })
  public birth!: string;

  @Column('tinyint', { width: 1, select: false })
  public gender!: number;

  @Column('int', { select: false, comment: '마일리지 잔여금' })
  public mileage!: number;

  @Column('tinyint', {
    width: 1,
    nullable: false,
    select: false,
    default: false,
    comment: 'sms 광고 수신 동의',
  })
  public smsAdsConsent!: boolean;

  @Column('tinyint', {
    width: 1,
    nullable: false,
    select: false,
    default: false,
    comment: 'email 광고 수신 동의',
  })
  public emailAdsConsent!: boolean;
}
