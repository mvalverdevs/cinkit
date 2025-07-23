/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Order } from '../../models/order';
import { OrderItem } from '../../models/order-item';

export interface BillNewOrderCreate$XWwwFormUrlencoded$Params {

/**
 * A unique integer value identifying this bill.
 */
  id: number;
      body: Array<OrderItem>
}

export function billNewOrderCreate$XWwwFormUrlencoded(http: HttpClient, rootUrl: string, params: BillNewOrderCreate$XWwwFormUrlencoded$Params, context?: HttpContext): Observable<StrictHttpResponse<Order>> {
  const rb = new RequestBuilder(rootUrl, billNewOrderCreate$XWwwFormUrlencoded.PATH, 'post');
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

billNewOrderCreate$XWwwFormUrlencoded.PATH = '/api/bill/{id}/new_order/';
