/* tslint:disable */
/* eslint-disable */
import { Bill } from '../models/bill';
export interface PaginatedBillList {
  count: number;
  next?: string | null;
  previous?: string | null;
  results: Array<Bill>;
}
