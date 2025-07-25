/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Order } from '../../models/order';
import { PatchedOrder } from '../../models/patched-order';

export interface OrderPartialUpdate$XWwwFormUrlencoded$Params {

/**
 * A unique integer value identifying this order.
 */
  id: number;
      body?: PatchedOrder
}

export function orderPartialUpdate$XWwwFormUrlencoded(http: HttpClient, rootUrl: string, params: OrderPartialUpdate$XWwwFormUrlencoded$Params, context?: HttpContext): Observable<StrictHttpResponse<Order>> {
  const rb = new RequestBuilder(rootUrl, orderPartialUpdate$XWwwFormUrlencoded.PATH, 'patch');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'application/x-www-form-urlencoded');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Order>;
    })
  );
}

orderPartialUpdate$XWwwFormUrlencoded.PATH = '/api/order/{id}/';
