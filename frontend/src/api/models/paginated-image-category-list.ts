/* tslint:disable */
/* eslint-disable */
import { ImageCategory } from '../models/image-category';
export interface PaginatedImageCategoryList {
  count: number;
  next?: null | string;
  previous?: null | string;
  results: Array<ImageCategory>;
}
