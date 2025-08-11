/* tslint:disable */
/* eslint-disable */
import { Image } from '../models/image';
export interface Product {
  category?: number | null;
  id: number;
  image?: number | null;
  image_data: Image;
  name: string;
  price?: string;
}
