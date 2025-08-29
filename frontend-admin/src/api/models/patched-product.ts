/* tslint:disable */
/* eslint-disable */
import { Image } from '../models/image';
import { ProductOptionGroup } from '../models/product-option-group';
import { TypeEnum } from '../models/type-enum';
export interface PatchedProduct {
  category?: number | null;
  id?: number;
  image?: number | null;
  image_data?: Image;
  name?: string;
  option_groups_data?: Array<ProductOptionGroup>;
  price?: string;
  type?: TypeEnum;
}
