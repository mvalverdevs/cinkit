/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Order } from '../../models/order';

export interface OrderUpdate$FormData$Params {

/**
 * A unique integer value identifying this order.
 */
  id: number;
      body: Order
}

export function orderUpdate$FormData(http: HttpClient, rootUrl: string, params: OrderUpdate$FormData$Params, context?: HttpContext): Observable<StrictHttpResponse<Order>> {
  const rb = new RequestBuilder(rootUrl, orderUpdate$FormData.PATH, 'put');
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

orderUpdate$FormData.PATH = '/api/order/{id}/';
