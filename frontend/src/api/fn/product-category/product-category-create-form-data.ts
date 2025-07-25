/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ProductCategory } from '../../models/product-category';

export interface ProductCategoryCreate$FormData$Params {
      body: ProductCategory
}

export function productCategoryCreate$FormData(http: HttpClient, rootUrl: string, params: ProductCategoryCreate$FormData$Params, context?: HttpContext): Observable<StrictHttpResponse<ProductCategory>> {
  const rb = new RequestBuilder(rootUrl, productCategoryCreate$FormData.PATH, 'post');
  if (params) {
    rb.body(params.body, 'multipart/form-data');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ProductCategory>;
    })
  );
}

productCategoryCreate$FormData.PATH = '/api/product_category/';
