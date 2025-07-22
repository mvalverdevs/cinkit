/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ProductCategory } from '../../models/product-category';

export interface ProductCategoryRetrieve$Params {

/**
 * A unique integer value identifying this product category.
 */
  id: number;
}

export function productCategoryRetrieve(http: HttpClient, rootUrl: string, params: ProductCategoryRetrieve$Params, context?: HttpContext): Observable<StrictHttpResponse<ProductCategory>> {
  const rb = new RequestBuilder(rootUrl, productCategoryRetrieve.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
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

productCategoryRetrieve.PATH = '/api/product_category/{id}/';
