/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Bill } from '../../models/bill';
import { PatchedBill } from '../../models/patched-bill';

export interface BillPartialUpdate$XWwwFormUrlencoded$Params {

/**
 * A unique integer value identifying this bill.
 */
  id: number;
      body?: PatchedBill
}

export function billPartialUpdate$XWwwFormUrlencoded(http: HttpClient, rootUrl: string, params: BillPartialUpdate$XWwwFormUrlencoded$Params, context?: HttpContext): Observable<StrictHttpResponse<Bill>> {
  const rb = new RequestBuilder(rootUrl, billPartialUpdate$XWwwFormUrlencoded.PATH, 'patch');
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

billPartialUpdate$XWwwFormUrlencoded.PATH = '/api/bill/{id}/';
