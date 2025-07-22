/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Image } from '../../models/image';

export interface ImageLibraryCreate$Params {
      body?: Image
}

export function imageLibraryCreate(http: HttpClient, rootUrl: string, params?: ImageLibraryCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<Image>> {
  const rb = new RequestBuilder(rootUrl, imageLibraryCreate.PATH, 'post');
  if (params) {
    rb.body(params.body, 'multipart/form-data');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Image>;
    })
  );
}

imageLibraryCreate.PATH = '/api/image_library/';
