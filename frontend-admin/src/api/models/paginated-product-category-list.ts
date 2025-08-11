/* tslint:disable */
/* eslint-disable */
import { ProductCategory } from '../models/product-category';
export interface PaginatedProductCategoryList {
  count: number;
  next?: string | null;
  previous?: string | null;
  results: Array<ProductCategory>;
}
