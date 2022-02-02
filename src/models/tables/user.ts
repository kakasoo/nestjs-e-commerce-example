import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { TimeColumns } from '../common/time-columns';

@Entity()
export class User extends TimeColumns {
  @PrimaryGeneratedColumn({ type: 'int' })
  public readonly id!: number;

  @Column('varchar', { nullable: false, unique: true, select: false })
  public readonly oauthId!: string;

  @Column('varchar', { nullable: false, select: true })
  public readonly name!: string;

  @Column('varchar', { nullable: true, select: false })
  public readonly nickname!: string;

  @Column('varchar', { nullable: true, select: false })
  public readonly profileImage!: string;

  @Column('varchar', { nullable: true, unique: true, select: false })
  public readonly phoneNumber!: string;

  @Column('varchar', { nullable: true, unique: true, select: false })
  public readonly email!: string;

  @Column('datetime', { nullable: true, select: false })
  public readonly birth!: string;

  @Column('tinyint', { width: 1, nullable: true, select: false })
  public readonly gender!: number;

  @Column('int', { nullable: true, select: false })
  public readonly mileage!: number;

  @Column('tinyint', { width: 1, nullable: false, select: false, default: 0 })
  public readonly smsAdsConsent!: boolean;

  @Column('tinyint', { width: 1, nullable: false, select: false, default: 0 })
  public readonly emailAdsConsent!: boolean;
}
