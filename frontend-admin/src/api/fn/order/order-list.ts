/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PaginatedOrderList } from '../../models/paginated-order-list';

export interface OrderList$Params {
  bill_id?: number;
  delivered?: boolean;

/**
 * Number of results to return per page.
 */
  limit?: number;

/**
 * The initial index from which to return the results.
 */
  offset?: number;

/**
 * Which field to use when ordering the results.
 */
  ordering?: string;

/**
 * A search term.
 */
  search?: string;
}

export function orderList(http: HttpClient, rootUrl: string, params?: OrderList$Params, context?: HttpContext): Observable<StrictHttpResponse<PaginatedOrderList>> {
  const rb = new RequestBuilder(rootUrl, orderList.PATH, 'get');
  if (params) {
    rb.query('bill_id', params.bill_id, {});
    rb.query('delivered', params.delivered, {});
    rb.query('limit', params.limit, {});
    rb.query('offset', params.offset, {});
    rb.query('ordering', params.ordering, {});
    rb.query('search', params.search, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PaginatedOrderList>;
    })
  );
}

orderList.PATH = '/api/order/';
