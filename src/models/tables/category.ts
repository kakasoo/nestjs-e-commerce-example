import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { TimeColumns } from '../common/time-columns';

@Entity()
export class Category extends TimeColumns {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
