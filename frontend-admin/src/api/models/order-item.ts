/* tslint:disable */
/* eslint-disable */
import { Product } from '../models/product';
export interface OrderItem {
  id: number;
  note?: null | string;
  order: number;
  product: number;
  product_data: Product;
  quantity?: number;
}
