/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Bill } from '../../models/bill';

export interface BillUpdate$XWwwFormUrlencoded$Params {

/**
 * A unique integer value identifying this bill.
 */
  id: number;
      body?: Bill
}

export function billUpdate$XWwwFormUrlencoded(http: HttpClient, rootUrl: string, params: BillUpdate$XWwwFormUrlencoded$Params, context?: HttpContext): Observable<StrictHttpResponse<Bill>> {
  const rb = new RequestBuilder(rootUrl, billUpdate$XWwwFormUrlencoded.PATH, 'put');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'application/x-www-form-urlencoded');
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

billUpdate$XWwwFormUrlencoded.PATH = '/api/bill/{id}/';
