/* tslint:disable */
/* eslint-disable */
export interface Order {
  bill: number;
  delivered?: boolean;
  id: number;
  products?: Array<number>;
  user?: null | number;
}
