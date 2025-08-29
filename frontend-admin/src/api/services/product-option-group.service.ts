/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { PaginatedProductOptionGroupList } from '../models/paginated-product-option-group-list';
import { ProductOptionGroup } from '../models/product-option-group';
import { productOptionGroupCreate$FormData } from '../fn/product-option-group/product-option-group-create-form-data';
import { ProductOptionGroupCreate$FormData$Params } from '../fn/product-option-group/product-option-group-create-form-data';
import { productOptionGroupCreate$Json } from '../fn/product-option-group/product-option-group-create-json';
import { ProductOptionGroupCreate$Json$Params } from '../fn/product-option-group/product-option-group-create-json';
import { productOptionGroupCreate$XWwwFormUrlencoded } from '../fn/product-option-group/product-option-group-create-x-www-form-urlencoded';
import { ProductOptionGroupCreate$XWwwFormUrlencoded$Params } from '../fn/product-option-group/product-option-group-create-x-www-form-urlencoded';
import { productOptionGroupList } from '../fn/product-option-group/product-option-group-list';
import { ProductOptionGroupList$Params } from '../fn/product-option-group/product-option-group-list';
import { productOptionGroupPartialUpdate$FormData } from '../fn/product-option-group/product-option-group-partial-update-form-data';
import { ProductOptionGroupPartialUpdate$FormData$Params } from '../fn/product-option-group/product-option-group-partial-update-form-data';
import { productOptionGroupPartialUpdate$Json } from '../fn/product-option-group/product-option-group-partial-update-json';
import { ProductOptionGroupPartialUpdate$Json$Params } from '../fn/product-option-group/product-option-group-partial-update-json';
import { productOptionGroupPartialUpdate$XWwwFormUrlencoded } from '../fn/product-option-group/product-option-group-partial-update-x-www-form-urlencoded';
import { ProductOptionGroupPartialUpdate$XWwwFormUrlencoded$Params } from '../fn/product-option-group/product-option-group-partial-update-x-www-form-urlencoded';
import { productOptionGroupRetrieve } from '../fn/product-option-group/product-option-group-retrieve';
import { ProductOptionGroupRetrieve$Params } from '../fn/product-option-group/product-option-group-retrieve';
import { productOptionGroupUpdate$FormData } from '../fn/product-option-group/product-option-group-update-form-data';
import { ProductOptionGroupUpdate$FormData$Params } from '../fn/product-option-group/product-option-group-update-form-data';
import { productOptionGroupUpdate$Json } from '../fn/product-option-group/product-option-group-update-json';
import { ProductOptionGroupUpdate$Json$Params } from '../fn/product-option-group/product-option-group-update-json';
import { productOptionGroupUpdate$XWwwFormUrlencoded } from '../fn/product-option-group/product-option-group-update-x-www-form-urlencoded';
import { ProductOptionGroupUpdate$XWwwFormUrlencoded$Params } from '../fn/product-option-group/product-option-group-update-x-www-form-urlencoded';

@Injectable({ providedIn: 'root' })
export class ProductOptionGroupService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `productOptionGroupList()` */
  static readonly ProductOptionGroupListPath = '/api/product_option_group/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `productOptionGroupList()` instead.
   *
   * This method doesn't expect any request body.
   */
  productOptionGroupList$Response(params?: ProductOptionGroupList$Params, context?: HttpContext): Observable<StrictHttpResponse<PaginatedProductOptionGroupList>> {
    return productOptionGroupList(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `productOptionGroupList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  productOptionGroupList(params?: ProductOptionGroupList$Params, context?: HttpContext): Observable<PaginatedProductOptionGroupList> {
    return this.productOptionGroupList$Response(params, context).pipe(
      map((r: StrictHttpResponse<PaginatedProductOptionGroupList>): PaginatedProductOptionGroupList => r.body)
    );
  }

  /** Path part for operation `productOptionGroupCreate()` */
  static readonly ProductOptionGroupCreatePath = '/api/product_option_group/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `productOptionGroupCreate$Json()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  productOptionGroupCreate$Json$Response(params: ProductOptionGroupCreate$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<ProductOptionGroup>> {
    return productOptionGroupCreate$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `productOptionGroupCreate$Json$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  productOptionGroupCreate$Json(params: ProductOptionGroupCreate$Json$Params, context?: HttpContext): Observable<ProductOptionGroup> {
    return this.productOptionGroupCreate$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<ProductOptionGroup>): ProductOptionGroup => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `productOptionGroupCreate$XWwwFormUrlencoded()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  productOptionGroupCreate$XWwwFormUrlencoded$Response(params: ProductOptionGroupCreate$XWwwFormUrlencoded$Params, context?: HttpContext): Observable<StrictHttpResponse<ProductOptionGroup>> {
    return productOptionGroupCreate$XWwwFormUrlencoded(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `productOptionGroupCreate$XWwwFormUrlencoded$Response()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  productOptionGroupCreate$XWwwFormUrlencoded(params: ProductOptionGroupCreate$XWwwFormUrlencoded$Params, context?: HttpContext): Observable<ProductOptionGroup> {
    return this.productOptionGroupCreate$XWwwFormUrlencoded$Response(params, context).pipe(
      map((r: StrictHttpResponse<ProductOptionGroup>): ProductOptionGroup => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `productOptionGroupCreate$FormData()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  productOptionGroupCreate$FormData$Response(params: ProductOptionGroupCreate$FormData$Params, context?: HttpContext): Observable<StrictHttpResponse<ProductOptionGroup>> {
    return productOptionGroupCreate$FormData(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `productOptionGroupCreate$FormData$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  productOptionGroupCreate$FormData(params: ProductOptionGroupCreate$FormData$Params, context?: HttpContext): Observable<ProductOptionGroup> {
    return this.productOptionGroupCreate$FormData$Response(params, context).pipe(
      map((r: StrictHttpResponse<ProductOptionGroup>): ProductOptionGroup => r.body)
    );
  }

  /** Path part for operation `productOptionGroupRetrieve()` */
  static readonly ProductOptionGroupRetrievePath = '/api/product_option_group/{id}/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `productOptionGroupRetrieve()` instead.
   *
   * This method doesn't expect any request body.
   */
  productOptionGroupRetrieve$Response(params: ProductOptionGroupRetrieve$Params, context?: HttpContext): Observable<StrictHttpResponse<ProductOptionGroup>> {
    return productOptionGroupRetrieve(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `productOptionGroupRetrieve$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  productOptionGroupRetrieve(params: ProductOptionGroupRetrieve$Params, context?: HttpContext): Observable<ProductOptionGroup> {
    return this.productOptionGroupRetrieve$Response(params, context).pipe(
      map((r: StrictHttpResponse<ProductOptionGroup>): ProductOptionGroup => r.body)
    );
  }

  /** Path part for operation `productOptionGroupUpdate()` */
  static readonly ProductOptionGroupUpdatePath = '/api/product_option_group/{id}/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `productOptionGroupUpdate$Json()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  productOptionGroupUpdate$Json$Response(params: ProductOptionGroupUpdate$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<ProductOptionGroup>> {
    return productOptionGroupUpdate$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `productOptionGroupUpdate$Json$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  productOptionGroupUpdate$Json(params: ProductOptionGroupUpdate$Json$Params, context?: HttpContext): Observable<ProductOptionGroup> {
    return this.productOptionGroupUpdate$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<ProductOptionGroup>): ProductOptionGroup => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `productOptionGroupUpdate$XWwwFormUrlencoded()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  productOptionGroupUpdate$XWwwFormUrlencoded$Response(params: ProductOptionGroupUpdate$XWwwFormUrlencoded$Params, context?: HttpContext): Observable<StrictHttpResponse<ProductOptionGroup>> {
    return productOptionGroupUpdate$XWwwFormUrlencoded(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `productOptionGroupUpdate$XWwwFormUrlencoded$Response()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  productOptionGroupUpdate$XWwwFormUrlencoded(params: ProductOptionGroupUpdate$XWwwFormUrlencoded$Params, context?: HttpContext): Observable<ProductOptionGroup> {
    return this.productOptionGroupUpdate$XWwwFormUrlencoded$Response(params, context).pipe(
      map((r: StrictHttpResponse<ProductOptionGroup>): ProductOptionGroup => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `productOptionGroupUpdate$FormData()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  productOptionGroupUpdate$FormData$Response(params: ProductOptionGroupUpdate$FormData$Params, context?: HttpContext): Observable<StrictHttpResponse<ProductOptionGroup>> {
    return productOptionGroupUpdate$FormData(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `productOptionGroupUpdate$FormData$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  productOptionGroupUpdate$FormData(params: ProductOptionGroupUpdate$FormData$Params, context?: HttpContext): Observable<ProductOptionGroup> {
    return this.productOptionGroupUpdate$FormData$Response(params, context).pipe(
      map((r: StrictHttpResponse<ProductOptionGroup>): ProductOptionGroup => r.body)
    );
  }

  /** Path part for operation `productOptionGroupPartialUpdate()` */
  static readonly ProductOptionGroupPartialUpdatePath = '/api/product_option_group/{id}/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `productOptionGroupPartialUpdate$Json()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  productOptionGroupPartialUpdate$Json$Response(params: ProductOptionGroupPartialUpdate$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<ProductOptionGroup>> {
    return productOptionGroupPartialUpdate$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `productOptionGroupPartialUpdate$Json$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  productOptionGroupPartialUpdate$Json(params: ProductOptionGroupPartialUpdate$Json$Params, context?: HttpContext): Observable<ProductOptionGroup> {
    return this.productOptionGroupPartialUpdate$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<ProductOptionGroup>): ProductOptionGroup => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `productOptionGroupPartialUpdate$XWwwFormUrlencoded()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  productOptionGroupPartialUpdate$XWwwFormUrlencoded$Response(params: ProductOptionGroupPartialUpdate$XWwwFormUrlencoded$Params, context?: HttpContext): Observable<StrictHttpResponse<ProductOptionGroup>> {
    return productOptionGroupPartialUpdate$XWwwFormUrlencoded(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `productOptionGroupPartialUpdate$XWwwFormUrlencoded$Response()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  productOptionGroupPartialUpdate$XWwwFormUrlencoded(params: ProductOptionGroupPartialUpdate$XWwwFormUrlencoded$Params, context?: HttpContext): Observable<ProductOptionGroup> {
    return this.productOptionGroupPartialUpdate$XWwwFormUrlencoded$Response(params, context).pipe(
      map((r: StrictHttpResponse<ProductOptionGroup>): ProductOptionGroup => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `productOptionGroupPartialUpdate$FormData()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  productOptionGroupPartialUpdate$FormData$Response(params: ProductOptionGroupPartialUpdate$FormData$Params, context?: HttpContext): Observable<StrictHttpResponse<ProductOptionGroup>> {
    return productOptionGroupPartialUpdate$FormData(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `productOptionGroupPartialUpdate$FormData$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  productOptionGroupPartialUpdate$FormData(params: ProductOptionGroupPartialUpdate$FormData$Params, context?: HttpContext): Observable<ProductOptionGroup> {
    return this.productOptionGroupPartialUpdate$FormData$Response(params, context).pipe(
      map((r: StrictHttpResponse<ProductOptionGroup>): ProductOptionGroup => r.body)
    );
  }

}
