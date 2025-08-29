/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ProductOptionItem } from '../../models/product-option-item';

export interface ProductOptionItemCreate$FormData$Params {
      body: ProductOptionItem
}

export function productOptionItemCreate$FormData(http: HttpClient, rootUrl: string, params: ProductOptionItemCreate$FormData$Params, context?: HttpContext): Observable<StrictHttpResponse<ProductOptionItem>> {
  const rb = new RequestBuilder(rootUrl, productOptionItemCreate$FormData.PATH, 'post');
  if (params) {
    rb.body(params.body, 'multipart/form-data');
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

productOptionItemCreate$FormData.PATH = '/api/product_option_item/';
