/* tslint:disable */
/* eslint-disable */
import { ProductOptionItem } from '../models/product-option-item';
export interface ProductOptionGroup {
  id: number;
  items_data: Array<ProductOptionItem>;
  max_choices?: number;
  min_choices?: number;
  name: string;
  product: number;
  sort_order?: number;
  source_category?: number | null;
}
