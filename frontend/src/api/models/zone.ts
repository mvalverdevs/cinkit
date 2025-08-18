/* tslint:disable */
/* eslint-disable */
import { Image } from '../models/image';
export interface Zone {
  id: number;
  image?: null | number;
  image_data: Image;
  is_deleted: boolean;
  name: string;
}
