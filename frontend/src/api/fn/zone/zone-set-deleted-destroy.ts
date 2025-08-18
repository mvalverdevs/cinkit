/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Zone } from '../../models/zone';

export interface ZoneSetDeletedDestroy$Params {

/**
 * A unique integer value identifying this zone.
 */
  id: number;
}

export function zoneSetDeletedDestroy(http: HttpClient, rootUrl: string, params: ZoneSetDeletedDestroy$Params, context?: HttpContext): Observable<StrictHttpResponse<Zone>> {
  const rb = new RequestBuilder(rootUrl, zoneSetDeletedDestroy.PATH, 'delete');
  if (params) {
    rb.path('id', params.id, {});
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

zoneSetDeletedDestroy.PATH = '/api/zone/{id}/set_deleted/';
