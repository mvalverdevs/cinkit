/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PatchedZone } from '../../models/patched-zone';
import { Zone } from '../../models/zone';

export interface ZonePartialUpdate$Json$Params {

/**
 * A unique integer value identifying this zone.
 */
  id: number;
      body?: PatchedZone
}

export function zonePartialUpdate$Json(http: HttpClient, rootUrl: string, params: ZonePartialUpdate$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Zone>> {
  const rb = new RequestBuilder(rootUrl, zonePartialUpdate$Json.PATH, 'patch');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'application/json');
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

zonePartialUpdate$Json.PATH = '/api/zone/{id}/';
