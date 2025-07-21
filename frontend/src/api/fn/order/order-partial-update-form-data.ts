/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Ordererializer } from '../../models/ordererializer';
import { Patchedordererializer } from '../../models/patchedordererializer';

export interface OrderPartialUpdate$FormData$Params {

/**
 * A unique integer value identifying this order.
 */
  id: number;
      body?: Patchedordererializer
}

export function orderPartialUpdate$FormData(http: HttpClient, rootUrl: string, params: OrderPartialUpdate$FormData$Params, context?: HttpContext): Observable<StrictHttpResponse<Ordererializer>> {
  const rb = new RequestBuilder(rootUrl, orderPartialUpdate$FormData.PATH, 'patch');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'multipart/form-data');
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

orderPartialUpdate$FormData.PATH = '/api/order/{id}/';
