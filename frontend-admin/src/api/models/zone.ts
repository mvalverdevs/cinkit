/* tslint:disable */
/* eslint-disable */
import { Image } from '../models/image';
export interface Zone {
  id: number;
  image?: number | null;
  image_data: Image;
  name: string;
}
