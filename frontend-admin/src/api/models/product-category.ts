/* tslint:disable */
/* eslint-disable */
import { Image } from '../models/image';
export interface ProductCategory {
  id: number;
  image?: number | null;
  image_data: Image;
  name: string;
}
