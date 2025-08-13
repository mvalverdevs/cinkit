/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ImageCategory } from '../../models/image-category';
import { PatchedImageCategory } from '../../models/patched-image-category';

export interface ImageCategoryPartialUpdate$FormData$Params {

/**
 * A unique integer value identifying this image category.
 */
  id: number;
      body?: PatchedImageCategory
}

export function imageCategoryPartialUpdate$FormData(http: HttpClient, rootUrl: string, params: ImageCategoryPartialUpdate$FormData$Params, context?: HttpContext): Observable<StrictHttpResponse<ImageCategory>> {
  const rb = new RequestBuilder(rootUrl, imageCategoryPartialUpdate$FormData.PATH, 'patch');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'multipart/form-data');
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

imageCategoryPartialUpdate$FormData.PATH = '/api/image_category/{id}/';
