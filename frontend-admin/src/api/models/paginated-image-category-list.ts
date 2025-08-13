/* tslint:disable */
/* eslint-disable */
import { ImageCategory } from '../models/image-category';
export interface PaginatedImageCategoryList {
  count: number;
  next?: string | null;
  previous?: string | null;
  results: Array<ImageCategory>;
}
