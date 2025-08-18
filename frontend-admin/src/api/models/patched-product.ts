/* tslint:disable */
/* eslint-disable */
import { Image } from '../models/image';
export interface PatchedProduct {
  category?: number | null;
  complements?: Array<number>;
  complements_data?: string;
  id?: number;
  image?: number | null;
  image_data?: Image;
  name?: string;
  price?: string;
}
