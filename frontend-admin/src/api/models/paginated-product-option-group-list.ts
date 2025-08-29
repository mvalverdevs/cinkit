/* tslint:disable */
/* eslint-disable */
import { ProductOptionGroup } from '../models/product-option-group';
export interface PaginatedProductOptionGroupList {
  count: number;
  next?: string | null;
  previous?: string | null;
  results: Array<ProductOptionGroup>;
}
