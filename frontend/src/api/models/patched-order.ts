/* tslint:disable */
/* eslint-disable */
import { OrderItem } from '../models/order-item';
export interface PatchedOrder {
  bill?: number;
  delivered?: boolean;
  id?: number;
  items?: Array<OrderItem>;
  user?: null | number;
}
