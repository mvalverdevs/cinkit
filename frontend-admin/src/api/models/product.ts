/* tslint:disable */
/* eslint-disable */
import { Image } from '../models/image';
export interface Product {
  category?: null | number;
  id: number;
  image?: null | number;
  image_data: Image;
  name: string;
  price?: string;
}
