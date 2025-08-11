/* tslint:disable */
/* eslint-disable */
import { Image } from '../models/image';
export interface PaginatedImageList {
  count: number;
  next?: string | null;
  previous?: string | null;
  results: Array<Image>;
}
