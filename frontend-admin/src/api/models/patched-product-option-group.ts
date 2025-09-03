/* tslint:disable */
/* eslint-disable */
import { ProductOptionItem } from '../models/product-option-item';

/**
 * Adds nested create feature
 */
export interface PatchedProductOptionGroup {
  id?: number;
  items?: Array<number>;
  items_data?: Array<ProductOptionItem>;
  max_choices?: number;
  min_choices?: number;
  name?: string;
  product?: number;
  sort_order?: number;
  source_category?: number | null;
}
