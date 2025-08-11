/* tslint:disable */
/* eslint-disable */
import { Order } from '../models/order';
export interface PaginatedOrderList {
  count: number;
  next?: string | null;
  previous?: string | null;
  results: Array<Order>;
}
