import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { TimeColumns } from '../common/time-columns';
import { Product } from './product';

@Entity()
export class User extends TimeColumns {
  @PrimaryGeneratedColumn()
  public readonly id!: number;

  // @Column('varchar', { nullable: false, unique: true, select: false })
  // public oauthId!: string;

  @Column('varchar', { nullable: false, select: false })
  public name!: string;

  @Column('varchar')
  public nickname!: string;

  @Column('varchar', { nullable: true, select: false })
  public profileImage!: string;

  @Column('varchar', { nullable: true, unique: true, select: false })
  public phoneNumber!: string;

  @Column('varchar', { nullable: true, unique: true, select: false })
  public email!: string;

  @Column({ select: false })
  password: string;

  @Column('datetime', { nullable: true, select: false })
  public birth!: string;

  @Column('tinyint', { nullable: true, width: 1, select: false })
  public gender!: number;

  @Column('int', {
    nullable: false,
    select: false,
    comment: '마일리지 잔여금',
    default: 0,
  })
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

  @ManyToMany(() => Product, (product) => product.users, { nullable: false })
  @JoinTable({ name: 'user_like_product' })
  products: Product[];
}
