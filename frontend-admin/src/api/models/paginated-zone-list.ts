/* tslint:disable */
/* eslint-disable */
import { Zone } from '../models/zone';
export interface PaginatedZoneList {
  count: number;
  next?: null | string;
  previous?: null | string;
  results: Array<Zone>;
}
