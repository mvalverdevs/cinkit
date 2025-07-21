/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Product } from '../../models/product';

export interface ProductRetrieve$Params {

/**
 * A unique integer value identifying this product.
 */
  id: number;
}

export function productRetrieve(http: HttpClient, rootUrl: string, params: ProductRetrieve$Params, context?: HttpContext): Observable<StrictHttpResponse<Product>> {
  const rb = new RequestBuilder(rootUrl, productRetrieve.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
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

productRetrieve.PATH = '/api/product/{id}/';
