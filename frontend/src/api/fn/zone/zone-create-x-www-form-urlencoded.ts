/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Zone } from '../../models/zone';

export interface ZoneCreate$XWwwFormUrlencoded$Params {
      body: Zone
}

export function zoneCreate$XWwwFormUrlencoded(http: HttpClient, rootUrl: string, params: ZoneCreate$XWwwFormUrlencoded$Params, context?: HttpContext): Observable<StrictHttpResponse<Zone>> {
  const rb = new RequestBuilder(rootUrl, zoneCreate$XWwwFormUrlencoded.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/x-www-form-urlencoded');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Zone>;
    })
  );
}

zoneCreate$XWwwFormUrlencoded.PATH = '/api/zone/';
