/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ImageCategory } from '../../models/image-category';

export interface ImageCategoryRetrieve$Params {

/**
 * A unique integer value identifying this image category.
 */
  id: number;
}

export function imageCategoryRetrieve(http: HttpClient, rootUrl: string, params: ImageCategoryRetrieve$Params, context?: HttpContext): Observable<StrictHttpResponse<ImageCategory>> {
  const rb = new RequestBuilder(rootUrl, imageCategoryRetrieve.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
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

imageCategoryRetrieve.PATH = '/api/image_category/{id}/';
