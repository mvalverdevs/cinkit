/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PaginatedBillList } from '../../models/paginated-bill-list';

export interface BillList$Params {

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
  zone_id?: number;
}

export function billList(http: HttpClient, rootUrl: string, params?: BillList$Params, context?: HttpContext): Observable<StrictHttpResponse<PaginatedBillList>> {
  const rb = new RequestBuilder(rootUrl, billList.PATH, 'get');
  if (params) {
    rb.query('limit', params.limit, {});
    rb.query('offset', params.offset, {});
    rb.query('ordering', params.ordering, {});
    rb.query('search', params.search, {});
    rb.query('zone_id', params.zone_id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PaginatedBillList>;
    })
  );
}

billList.PATH = '/api/bill/';
