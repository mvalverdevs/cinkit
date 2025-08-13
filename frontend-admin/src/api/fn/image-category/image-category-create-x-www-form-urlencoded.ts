/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ImageCategory } from '../../models/image-category';

export interface ImageCategoryCreate$XWwwFormUrlencoded$Params {
      body: ImageCategory
}

export function imageCategoryCreate$XWwwFormUrlencoded(http: HttpClient, rootUrl: string, params: ImageCategoryCreate$XWwwFormUrlencoded$Params, context?: HttpContext): Observable<StrictHttpResponse<ImageCategory>> {
  const rb = new RequestBuilder(rootUrl, imageCategoryCreate$XWwwFormUrlencoded.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/x-www-form-urlencoded');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ImageCategory>;
    })
  );
}

imageCategoryCreate$XWwwFormUrlencoded.PATH = '/api/image_category/';
