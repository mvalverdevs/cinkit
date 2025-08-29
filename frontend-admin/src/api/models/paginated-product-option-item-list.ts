/* tslint:disable */
/* eslint-disable */
import { ProductOptionItem } from '../models/product-option-item';
export interface PaginatedProductOptionItemList {
  count: number;
  next?: string | null;
  previous?: string | null;
  results: Array<ProductOptionItem>;
}
