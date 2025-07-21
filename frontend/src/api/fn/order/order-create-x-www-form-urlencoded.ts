/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Ordererializer } from '../../models/ordererializer';

export interface OrderCreate$XWwwFormUrlencoded$Params {
      body: Ordererializer
}

export function orderCreate$XWwwFormUrlencoded(http: HttpClient, rootUrl: string, params: OrderCreate$XWwwFormUrlencoded$Params, context?: HttpContext): Observable<StrictHttpResponse<Ordererializer>> {
  const rb = new RequestBuilder(rootUrl, orderCreate$XWwwFormUrlencoded.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/x-www-form-urlencoded');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Ordererializer>;
    })
  );
}

orderCreate$XWwwFormUrlencoded.PATH = '/api/order/';
