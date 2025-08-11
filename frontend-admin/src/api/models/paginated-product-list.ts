/* tslint:disable */
/* eslint-disable */
import { Product } from '../models/product';
export interface PaginatedProductList {
  count: number;
  next?: string | null;
  previous?: string | null;
  results: Array<Product>;
}
