/* tslint:disable */
/* eslint-disable */
import { Product } from '../models/product';
export interface OrderItem {
  id: number;
  note?: string | null;
  order: number;
  product: number;
  product_data: Product;
  quantity?: number;
}
