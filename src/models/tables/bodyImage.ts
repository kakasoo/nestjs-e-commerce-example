import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  Index,
} from 'typeorm';
import { Product } from './product';

@Index('FK__BodyImage__Product', ['productId'], {})
@Entity()
export class BodyImage {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int', { nullable: false, select: false })
  productId: number;

  @Column('varchar', { nullable: false })
  url: string;

  @ManyToOne(() => Product, (product) => product.bodies)
  @JoinColumn({ name: 'productId', referencedColumnName: 'id' })
  product: Product;
}
