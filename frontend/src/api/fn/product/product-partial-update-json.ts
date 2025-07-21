/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PatchedProduct } from '../../models/patched-product';
import { Product } from '../../models/product';

export interface ProductPartialUpdate$Json$Params {

/**
 * A unique integer value identifying this product.
 */
  id: number;
      body?: PatchedProduct
}

export function productPartialUpdate$Json(http: HttpClient, rootUrl: string, params: ProductPartialUpdate$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Product>> {
  const rb = new RequestBuilder(rootUrl, productPartialUpdate$Json.PATH, 'patch');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Product>;
    })
  );
}

productPartialUpdate$Json.PATH = '/api/product/{id}/';
