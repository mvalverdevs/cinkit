/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PatchedProductOptionItem } from '../../models/patched-product-option-item';
import { ProductOptionItem } from '../../models/product-option-item';

export interface ProductOptionItemPartialUpdate$Json$Params {
  id: string;
      body?: PatchedProductOptionItem
}

export function productOptionItemPartialUpdate$Json(http: HttpClient, rootUrl: string, params: ProductOptionItemPartialUpdate$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<ProductOptionItem>> {
  const rb = new RequestBuilder(rootUrl, productOptionItemPartialUpdate$Json.PATH, 'patch');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ProductOptionItem>;
    })
  );
}

productOptionItemPartialUpdate$Json.PATH = '/api/product_option_item/{id}/';
