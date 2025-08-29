/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { PaginatedProductOptionItemList } from '../models/paginated-product-option-item-list';
import { ProductOptionItem } from '../models/product-option-item';
import { productOptionItemCreate$FormData } from '../fn/product-option-item/product-option-item-create-form-data';
import { ProductOptionItemCreate$FormData$Params } from '../fn/product-option-item/product-option-item-create-form-data';
import { productOptionItemCreate$Json } from '../fn/product-option-item/product-option-item-create-json';
import { ProductOptionItemCreate$Json$Params } from '../fn/product-option-item/product-option-item-create-json';
import { productOptionItemCreate$XWwwFormUrlencoded } from '../fn/product-option-item/product-option-item-create-x-www-form-urlencoded';
import { ProductOptionItemCreate$XWwwFormUrlencoded$Params } from '../fn/product-option-item/product-option-item-create-x-www-form-urlencoded';
import { productOptionItemList } from '../fn/product-option-item/product-option-item-list';
import { ProductOptionItemList$Params } from '../fn/product-option-item/product-option-item-list';
import { productOptionItemPartialUpdate$FormData } from '../fn/product-option-item/product-option-item-partial-update-form-data';
import { ProductOptionItemPartialUpdate$FormData$Params } from '../fn/product-option-item/product-option-item-partial-update-form-data';
import { productOptionItemPartialUpdate$Json } from '../fn/product-option-item/product-option-item-partial-update-json';
import { ProductOptionItemPartialUpdate$Json$Params } from '../fn/product-option-item/product-option-item-partial-update-json';
import { productOptionItemPartialUpdate$XWwwFormUrlencoded } from '../fn/product-option-item/product-option-item-partial-update-x-www-form-urlencoded';
import { ProductOptionItemPartialUpdate$XWwwFormUrlencoded$Params } from '../fn/product-option-item/product-option-item-partial-update-x-www-form-urlencoded';
import { productOptionItemRetrieve } from '../fn/product-option-item/product-option-item-retrieve';
import { ProductOptionItemRetrieve$Params } from '../fn/product-option-item/product-option-item-retrieve';
import { productOptionItemUpdate$FormData } from '../fn/product-option-item/product-option-item-update-form-data';
import { ProductOptionItemUpdate$FormData$Params } from '../fn/product-option-item/product-option-item-update-form-data';
import { productOptionItemUpdate$Json } from '../fn/product-option-item/product-option-item-update-json';
import { ProductOptionItemUpdate$Json$Params } from '../fn/product-option-item/product-option-item-update-json';
import { productOptionItemUpdate$XWwwFormUrlencoded } from '../fn/product-option-item/product-option-item-update-x-www-form-urlencoded';
import { ProductOptionItemUpdate$XWwwFormUrlencoded$Params } from '../fn/product-option-item/product-option-item-update-x-www-form-urlencoded';

@Injectable({ providedIn: 'root' })
export class ProductOptionItemService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `productOptionItemList()` */
  static readonly ProductOptionItemListPath = '/api/product_option_item/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `productOptionItemList()` instead.
   *
   * This method doesn't expect any request body.
   */
  productOptionItemList$Response(params?: ProductOptionItemList$Params, context?: HttpContext): Observable<StrictHttpResponse<PaginatedProductOptionItemList>> {
    return productOptionItemList(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `productOptionItemList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  productOptionItemList(params?: ProductOptionItemList$Params, context?: HttpContext): Observable<PaginatedProductOptionItemList> {
    return this.productOptionItemList$Response(params, context).pipe(
      map((r: StrictHttpResponse<PaginatedProductOptionItemList>): PaginatedProductOptionItemList => r.body)
    );
  }

  /** Path part for operation `productOptionItemCreate()` */
  static readonly ProductOptionItemCreatePath = '/api/product_option_item/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `productOptionItemCreate$Json()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  productOptionItemCreate$Json$Response(params: ProductOptionItemCreate$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<ProductOptionItem>> {
    return productOptionItemCreate$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `productOptionItemCreate$Json$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  productOptionItemCreate$Json(params: ProductOptionItemCreate$Json$Params, context?: HttpContext): Observable<ProductOptionItem> {
    return this.productOptionItemCreate$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<ProductOptionItem>): ProductOptionItem => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `productOptionItemCreate$XWwwFormUrlencoded()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  productOptionItemCreate$XWwwFormUrlencoded$Response(params: ProductOptionItemCreate$XWwwFormUrlencoded$Params, context?: HttpContext): Observable<StrictHttpResponse<ProductOptionItem>> {
    return productOptionItemCreate$XWwwFormUrlencoded(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `productOptionItemCreate$XWwwFormUrlencoded$Response()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  productOptionItemCreate$XWwwFormUrlencoded(params: ProductOptionItemCreate$XWwwFormUrlencoded$Params, context?: HttpContext): Observable<ProductOptionItem> {
    return this.productOptionItemCreate$XWwwFormUrlencoded$Response(params, context).pipe(
      map((r: StrictHttpResponse<ProductOptionItem>): ProductOptionItem => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `productOptionItemCreate$FormData()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  productOptionItemCreate$FormData$Response(params: ProductOptionItemCreate$FormData$Params, context?: HttpContext): Observable<StrictHttpResponse<ProductOptionItem>> {
    return productOptionItemCreate$FormData(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `productOptionItemCreate$FormData$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  productOptionItemCreate$FormData(params: ProductOptionItemCreate$FormData$Params, context?: HttpContext): Observable<ProductOptionItem> {
    return this.productOptionItemCreate$FormData$Response(params, context).pipe(
      map((r: StrictHttpResponse<ProductOptionItem>): ProductOptionItem => r.body)
    );
  }

  /** Path part for operation `productOptionItemRetrieve()` */
  static readonly ProductOptionItemRetrievePath = '/api/product_option_item/{id}/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `productOptionItemRetrieve()` instead.
   *
   * This method doesn't expect any request body.
   */
  productOptionItemRetrieve$Response(params: ProductOptionItemRetrieve$Params, context?: HttpContext): Observable<StrictHttpResponse<ProductOptionItem>> {
    return productOptionItemRetrieve(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `productOptionItemRetrieve$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  productOptionItemRetrieve(params: ProductOptionItemRetrieve$Params, context?: HttpContext): Observable<ProductOptionItem> {
    return this.productOptionItemRetrieve$Response(params, context).pipe(
      map((r: StrictHttpResponse<ProductOptionItem>): ProductOptionItem => r.body)
    );
  }

  /** Path part for operation `productOptionItemUpdate()` */
  static readonly ProductOptionItemUpdatePath = '/api/product_option_item/{id}/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `productOptionItemUpdate$Json()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  productOptionItemUpdate$Json$Response(params: ProductOptionItemUpdate$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<ProductOptionItem>> {
    return productOptionItemUpdate$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `productOptionItemUpdate$Json$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  productOptionItemUpdate$Json(params: ProductOptionItemUpdate$Json$Params, context?: HttpContext): Observable<ProductOptionItem> {
    return this.productOptionItemUpdate$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<ProductOptionItem>): ProductOptionItem => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `productOptionItemUpdate$XWwwFormUrlencoded()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  productOptionItemUpdate$XWwwFormUrlencoded$Response(params: ProductOptionItemUpdate$XWwwFormUrlencoded$Params, context?: HttpContext): Observable<StrictHttpResponse<ProductOptionItem>> {
    return productOptionItemUpdate$XWwwFormUrlencoded(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `productOptionItemUpdate$XWwwFormUrlencoded$Response()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  productOptionItemUpdate$XWwwFormUrlencoded(params: ProductOptionItemUpdate$XWwwFormUrlencoded$Params, context?: HttpContext): Observable<ProductOptionItem> {
    return this.productOptionItemUpdate$XWwwFormUrlencoded$Response(params, context).pipe(
      map((r: StrictHttpResponse<ProductOptionItem>): ProductOptionItem => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `productOptionItemUpdate$FormData()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  productOptionItemUpdate$FormData$Response(params: ProductOptionItemUpdate$FormData$Params, context?: HttpContext): Observable<StrictHttpResponse<ProductOptionItem>> {
    return productOptionItemUpdate$FormData(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `productOptionItemUpdate$FormData$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  productOptionItemUpdate$FormData(params: ProductOptionItemUpdate$FormData$Params, context?: HttpContext): Observable<ProductOptionItem> {
    return this.productOptionItemUpdate$FormData$Response(params, context).pipe(
      map((r: StrictHttpResponse<ProductOptionItem>): ProductOptionItem => r.body)
    );
  }

  /** Path part for operation `productOptionItemPartialUpdate()` */
  static readonly ProductOptionItemPartialUpdatePath = '/api/product_option_item/{id}/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `productOptionItemPartialUpdate$Json()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  productOptionItemPartialUpdate$Json$Response(params: ProductOptionItemPartialUpdate$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<ProductOptionItem>> {
    return productOptionItemPartialUpdate$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `productOptionItemPartialUpdate$Json$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  productOptionItemPartialUpdate$Json(params: ProductOptionItemPartialUpdate$Json$Params, context?: HttpContext): Observable<ProductOptionItem> {
    return this.productOptionItemPartialUpdate$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<ProductOptionItem>): ProductOptionItem => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `productOptionItemPartialUpdate$XWwwFormUrlencoded()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  productOptionItemPartialUpdate$XWwwFormUrlencoded$Response(params: ProductOptionItemPartialUpdate$XWwwFormUrlencoded$Params, context?: HttpContext): Observable<StrictHttpResponse<ProductOptionItem>> {
    return productOptionItemPartialUpdate$XWwwFormUrlencoded(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `productOptionItemPartialUpdate$XWwwFormUrlencoded$Response()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  productOptionItemPartialUpdate$XWwwFormUrlencoded(params: ProductOptionItemPartialUpdate$XWwwFormUrlencoded$Params, context?: HttpContext): Observable<ProductOptionItem> {
    return this.productOptionItemPartialUpdate$XWwwFormUrlencoded$Response(params, context).pipe(
      map((r: StrictHttpResponse<ProductOptionItem>): ProductOptionItem => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `productOptionItemPartialUpdate$FormData()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  productOptionItemPartialUpdate$FormData$Response(params: ProductOptionItemPartialUpdate$FormData$Params, context?: HttpContext): Observable<StrictHttpResponse<ProductOptionItem>> {
    return productOptionItemPartialUpdate$FormData(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `productOptionItemPartialUpdate$FormData$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  productOptionItemPartialUpdate$FormData(params: ProductOptionItemPartialUpdate$FormData$Params, context?: HttpContext): Observable<ProductOptionItem> {
    return this.productOptionItemPartialUpdate$FormData$Response(params, context).pipe(
      map((r: StrictHttpResponse<ProductOptionItem>): ProductOptionItem => r.body)
    );
  }

}
