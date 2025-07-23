/* tslint:disable */
/* eslint-disable */
import { Order } from '../models/order';
export interface PaginatedOrderList {
  count: number;
  next?: null | string;
  previous?: null | string;
  results: Array<Order>;
}
