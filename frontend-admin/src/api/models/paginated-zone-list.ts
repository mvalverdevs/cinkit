/* tslint:disable */
/* eslint-disable */
import { Zone } from '../models/zone';
export interface PaginatedZoneList {
  count: number;
  next?: string | null;
  previous?: string | null;
  results: Array<Zone>;
}
