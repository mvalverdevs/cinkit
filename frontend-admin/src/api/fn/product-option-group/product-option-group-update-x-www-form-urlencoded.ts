/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ProductOptionGroup } from '../../models/product-option-group';

export interface ProductOptionGroupUpdate$XWwwFormUrlencoded$Params {
  id: string;
      body: ProductOptionGroup
}

export function productOptionGroupUpdate$XWwwFormUrlencoded(http: HttpClient, rootUrl: string, params: ProductOptionGroupUpdate$XWwwFormUrlencoded$Params, context?: HttpContext): Observable<StrictHttpResponse<ProductOptionGroup>> {
  const rb = new RequestBuilder(rootUrl, productOptionGroupUpdate$XWwwFormUrlencoded.PATH, 'put');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'application/x-www-form-urlencoded');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ProductOptionGroup>;
    })
  );
}

productOptionGroupUpdate$XWwwFormUrlencoded.PATH = '/api/product_option_group/{id}/';
