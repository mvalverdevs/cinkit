/* tslint:disable */
/* eslint-disable */
import { User } from '../models/user';
export interface PaginatedUserList {
  count: number;
  next?: string | null;
  previous?: string | null;
  results: Array<User>;
}
