/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ProductOptionGroup } from '../../models/product-option-group';

export interface ProductOptionGroupCreate$FormData$Params {
      body: ProductOptionGroup
}

export function productOptionGroupCreate$FormData(http: HttpClient, rootUrl: string, params: ProductOptionGroupCreate$FormData$Params, context?: HttpContext): Observable<StrictHttpResponse<ProductOptionGroup>> {
  const rb = new RequestBuilder(rootUrl, productOptionGroupCreate$FormData.PATH, 'post');
  if (params) {
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

productOptionGroupCreate$FormData.PATH = '/api/product_option_group/';
