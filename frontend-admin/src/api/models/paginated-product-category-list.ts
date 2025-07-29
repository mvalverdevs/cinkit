/* tslint:disable */
/* eslint-disable */
import { ProductCategory } from '../models/product-category';
export interface PaginatedProductCategoryList {
  count: number;
  next?: null | string;
  previous?: null | string;
  results: Array<ProductCategory>;
}
