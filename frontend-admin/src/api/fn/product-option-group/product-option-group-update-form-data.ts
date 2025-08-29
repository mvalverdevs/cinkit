/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ProductOptionGroup } from '../../models/product-option-group';

export interface ProductOptionGroupUpdate$FormData$Params {
  id: string;
      body: ProductOptionGroup
}

export function productOptionGroupUpdate$FormData(http: HttpClient, rootUrl: string, params: ProductOptionGroupUpdate$FormData$Params, context?: HttpContext): Observable<StrictHttpResponse<ProductOptionGroup>> {
  const rb = new RequestBuilder(rootUrl, productOptionGroupUpdate$FormData.PATH, 'put');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'multipart/form-data');
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

productOptionGroupUpdate$FormData.PATH = '/api/product_option_group/{id}/';
