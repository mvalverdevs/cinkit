/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Bill } from '../../models/bill';

export interface BillUpdate$FormData$Params {

/**
 * A unique integer value identifying this bill.
 */
  id: number;
      body?: Bill
}

export function billUpdate$FormData(http: HttpClient, rootUrl: string, params: BillUpdate$FormData$Params, context?: HttpContext): Observable<StrictHttpResponse<Bill>> {
  const rb = new RequestBuilder(rootUrl, billUpdate$FormData.PATH, 'put');
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

billUpdate$FormData.PATH = '/api/bill/{id}/';
