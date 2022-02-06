import { Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'product_has_categories' })
export class ProductHasCategory {
  @PrimaryColumn()
  public readonly categoryId!: number;

  @PrimaryColumn()
  public readonly productId!: number;
}
