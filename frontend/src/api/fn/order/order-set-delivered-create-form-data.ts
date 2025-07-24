/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Bill } from '../../models/bill';
import { Empty } from '../../models/empty';

export interface OrderSetDeliveredCreate$FormData$Params {

/**
 * A unique integer value identifying this order.
 */
  id: number;
      body?: Empty
}

export function orderSetDeliveredCreate$FormData(http: HttpClient, rootUrl: string, params: OrderSetDeliveredCreate$FormData$Params, context?: HttpContext): Observable<StrictHttpResponse<Bill>> {
  const rb = new RequestBuilder(rootUrl, orderSetDeliveredCreate$FormData.PATH, 'post');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'multipart/form-data');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Bill>;
    })
  );
}

orderSetDeliveredCreate$FormData.PATH = '/api/order/{id}/set_delivered/';
