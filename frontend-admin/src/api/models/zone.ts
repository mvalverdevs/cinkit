/* tslint:disable */
/* eslint-disable */
import { Image } from '../models/image';
export interface Zone {
  id: number;
  image?: number | null;
  image_data: Image;
  is_deleted: boolean;
  name: string;
}
