/* tslint:disable */
/* eslint-disable */
import { OrderItem } from '../models/order-item';
import { User } from '../models/user';
export interface Order {
  amount?: string;
  bill: number;
  created_at: string;
  delivered?: boolean;
  delivered_at: string;
  id: number;
  items: Array<OrderItem>;
  user?: number | null;
  user_data: User;
}
