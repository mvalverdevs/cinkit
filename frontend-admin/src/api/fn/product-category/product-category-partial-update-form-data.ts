/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PatchedProductCategory } from '../../models/patched-product-category';
import { ProductCategory } from '../../models/product-category';

export interface ProductCategoryPartialUpdate$FormData$Params {

/**
 * A unique integer value identifying this product category.
 */
  id: number;
      body?: PatchedProductCategory
}

export function productCategoryPartialUpdate$FormData(http: HttpClient, rootUrl: string, params: ProductCategoryPartialUpdate$FormData$Params, context?: HttpContext): Observable<StrictHttpResponse<ProductCategory>> {
  const rb = new RequestBuilder(rootUrl, productCategoryPartialUpdate$FormData.PATH, 'patch');
  if (params) {
    rb.path('id', params.id, {});
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

productCategoryPartialUpdate$FormData.PATH = '/api/product_category/{id}/';
