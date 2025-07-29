/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Order } from '../../models/order';
import { OrderItem } from '../../models/order-item';

export interface BillNewOrderCreate$FormData$Params {

/**
 * A unique integer value identifying this bill.
 */
  id: number;
      body: Array<OrderItem>
}

export function billNewOrderCreate$FormData(http: HttpClient, rootUrl: string, params: BillNewOrderCreate$FormData$Params, context?: HttpContext): Observable<StrictHttpResponse<Order>> {
  const rb = new RequestBuilder(rootUrl, billNewOrderCreate$FormData.PATH, 'post');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'multipart/form-data');
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

billNewOrderCreate$FormData.PATH = '/api/bill/{id}/new_order/';
