/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Bill } from '../../models/bill';

export interface BillRetrieve$Params {

/**
 * A unique integer value identifying this bill.
 */
  id: number;
}

export function billRetrieve(http: HttpClient, rootUrl: string, params: BillRetrieve$Params, context?: HttpContext): Observable<StrictHttpResponse<Bill>> {
  const rb = new RequestBuilder(rootUrl, billRetrieve.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
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

billRetrieve.PATH = '/api/bill/{id}/';
