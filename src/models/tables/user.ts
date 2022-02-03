import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { TimeColumns } from '../common/time-columns';

@Entity()
export class User extends TimeColumns {
  @PrimaryGeneratedColumn({ type: 'int' })
  public readonly id!: number;

  @Column('varchar', { nullable: false, unique: true, select: false })
  public oauthId!: string;

  @Column('varchar', { nullable: false, select: false })
  public name!: string;

  @Column('varchar', { nullable: true, select: true })
  public nickname!: string;

  @Column('varchar', { nullable: true, select: false })
  public profileImage!: string;

  @Column('varchar', { nullable: true, unique: true, select: false })
  public phoneNumber!: string;

  @Column('varchar', { nullable: true, unique: true, select: false })
  public email!: string;

  @Column('datetime', { nullable: true, select: false })
  public birth!: string;

  @Column('tinyint', { width: 1, nullable: true, select: false })
  public gender!: number;

  @Column('int', { nullable: true, select: false })
  public mileage!: number;

  @Column('tinyint', { width: 1, nullable: false, select: false, default: 0 })
  public smsAdsConsent!: boolean;

  @Column('tinyint', { width: 1, nullable: false, select: false, default: 0 })
  public emailAdsConsent!: boolean;
}
