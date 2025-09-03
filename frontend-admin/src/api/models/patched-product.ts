/* tslint:disable */
/* eslint-disable */
import { Image } from '../models/image';
import { ProductOptionGroup } from '../models/product-option-group';
import { TypeEnum } from '../models/type-enum';

/**
 * Adds nested create feature
 */
export interface PatchedProduct {
  category?: number | null;
  created?: string;
  id?: number;
  image?: number | null;
  image_data?: Image;
  modified?: string;
  name?: string;
  option_groups?: Array<ProductOptionGroup>;
  price?: string;
  type?: TypeEnum;
}
