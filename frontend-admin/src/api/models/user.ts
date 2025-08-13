/* tslint:disable */
/* eslint-disable */
import { RoleEnum } from '../models/role-enum';

/**
 * A ModelSerializer that takes additional arguments for
 * "fields" and "include" in order to
 * control which fields are displayed, and whether to replace simple values with
 * complex, nested serializations.
 */
export interface User {
  deactivation_datetime: string | null;
  dni: string;
  first_name?: string | null;
  has_login_blocked: string;
  id: number;
  is_active?: boolean | null;
  last_bad_login_attempt_datetime: string | null;
  last_name?: string | null;
  login_attempts?: number;
  password: string;
  phone?: string | null;
  role?: RoleEnum;
}
