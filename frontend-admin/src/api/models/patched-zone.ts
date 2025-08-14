/* tslint:disable */
/* eslint-disable */
import { Image } from '../models/image';
export interface PatchedZone {
  id?: number;
  image?: number | null;
  image_data?: Image;
  is_deleted?: boolean;
  name?: string;
}
