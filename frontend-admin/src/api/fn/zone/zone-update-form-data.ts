/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Zone } from '../../models/zone';

export interface ZoneUpdate$FormData$Params {

/**
 * A unique integer value identifying this zone.
 */
  id: number;
      body: Zone
}

export function zoneUpdate$FormData(http: HttpClient, rootUrl: string, params: ZoneUpdate$FormData$Params, context?: HttpContext): Observable<StrictHttpResponse<Zone>> {
  const rb = new RequestBuilder(rootUrl, zoneUpdate$FormData.PATH, 'put');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'multipart/form-data');
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

zoneUpdate$FormData.PATH = '/api/zone/{id}/';
