import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { TimeColumns } from '../common/time-columns';
import { Product } from './product';

@Entity()
export class Seller extends TimeColumns {
  @PrimaryGeneratedColumn()
  public readonly id!: number;

  @Column('varchar', { nullable: false, unique: true, select: false })
  public address!: string;

  @Column('varchar', { nullable: false, select: false })
  public password!: string;

  @Column('varchar', { nullable: false, select: true })
  public name!: string;

  @Column('varchar', { nullable: true, select: false })
  public nickname!: string;

  @Column('varchar', { nullable: true, select: false })
  public profileImage!: string;

  @Column('varchar', { nullable: true, unique: true, select: false })
  public phoneNumber!: string;

  @Column('varchar', { nullable: true, unique: true, select: false })
  public email!: string;

  @Column('varchar', { nullable: false, select: true })
  public shopName!: string;

  @Column('int', { nullable: false, select: true, default: 0 })
  public basicFee!: number;

  @Column('int', { nullable: false, select: true, default: 0 })
  public exceptionFee: number;

  @Column('int', { nullable: false, select: true, default: 0 })
  public baseFee: number;

  @Column('varchar', { nullable: false, select: false })
  public companyName!: string;

  @Column('varchar', { nullable: false, select: false })
  public companyEmail!: string;

  @Column('varchar', { nullable: false, select: false })
  public companyPhonNumber!: string;

  @Column('varchar', { nullable: false, select: false })
  public businessNumber!: string;

  @OneToMany((Type) => Product, (product) => product.seller)
  @JoinColumn({ name: 'sellerId', referencedColumnName: 'id' })
  products: Product[];
}
