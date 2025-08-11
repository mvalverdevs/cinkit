/* tslint:disable */
/* eslint-disable */
export interface Bill {
  amount?: string;
  closed_at?: string | null;
  created_at: string;
  id: number;
  is_open?: boolean;
  last_3_products: string;
  orders_number: string;
  zone?: number | null;
}
