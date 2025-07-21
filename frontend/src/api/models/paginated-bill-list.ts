/* tslint:disable */
/* eslint-disable */
import { Bill } from '../models/bill';
export interface PaginatedBillList {
  count: number;
  next?: null | string;
  previous?: null | string;
  results: Array<Bill>;
}
