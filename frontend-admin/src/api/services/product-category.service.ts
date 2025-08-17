/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { PaginatedProductCategoryList } from '../models/paginated-product-category-list';
import { ProductCategory } from '../models/product-category';
import { productCategoryCreate$FormData } from '../fn/product-category/product-category-create-form-data';
import { ProductCategoryCreate$FormData$Params } from '../fn/product-category/product-category-create-form-data';
import { productCategoryCreate$Json } from '../fn/product-category/product-category-create-json';
import { ProductCategoryCreate$Json$Params } from '../fn/product-category/product-category-create-json';
import { productCategoryCreate$XWwwFormUrlencoded } from '../fn/product-category/product-category-create-x-www-form-urlencoded';
import { ProductCategoryCreate$XWwwFormUrlencoded$Params } from '../fn/product-category/product-category-create-x-www-form-urlencoded';
import { productCategoryDestroy } from '../fn/product-category/product-category-destroy';
import { ProductCategoryDestroy$Params } from '../fn/product-category/product-category-destroy';
import { productCategoryList } from '../fn/product-category/product-category-list';
import { ProductCategoryList$Params } from '../fn/product-category/product-category-list';
import { productCategoryPartialUpdate$FormData } from '../fn/product-category/product-category-partial-update-form-data';
import { ProductCategoryPartialUpdate$FormData$Params } from '../fn/product-category/product-category-partial-update-form-data';
import { productCategoryPartialUpdate$Json } from '../fn/product-category/product-category-partial-update-json';
import { ProductCategoryPartialUpdate$Json$Params } from '../fn/product-category/product-category-partial-update-json';
import { productCategoryPartialUpdate$XWwwFormUrlencoded } from '../fn/product-category/product-category-partial-update-x-www-form-urlencoded';
import { ProductCategoryPartialUpdate$XWwwFormUrlencoded$Params } from '../fn/product-category/product-category-partial-update-x-www-form-urlencoded';
import { productCategoryRetrieve } from '../fn/product-category/product-category-retrieve';
import { ProductCategoryRetrieve$Params } from '../fn/product-category/product-category-retrieve';
import { productCategoryUpdate$FormData } from '../fn/product-category/product-category-update-form-data';
import { ProductCategoryUpdate$FormData$Params } from '../fn/product-category/product-category-update-form-data';
import { productCategoryUpdate$Json } from '../fn/product-category/product-category-update-json';
import { ProductCategoryUpdate$Json$Params } from '../fn/product-category/product-category-update-json';
import { productCategoryUpdate$XWwwFormUrlencoded } from '../fn/product-category/product-category-update-x-www-form-urlencoded';
import { ProductCategoryUpdate$XWwwFormUrlencoded$Params } from '../fn/product-category/product-category-update-x-www-form-urlencoded';

@Injectable({ providedIn: 'root' })
export class ProductCategoryService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `productCategoryList()` */
  static readonly ProductCategoryListPath = '/api/product_category/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `productCategoryList()` instead.
   *
   * This method doesn't expect any request body.
   */
  productCategoryList$Response(params?: ProductCategoryList$Params, context?: HttpContext): Observable<StrictHttpResponse<PaginatedProductCategoryList>> {
    return productCategoryList(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `productCategoryList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  productCategoryList(params?: ProductCategoryList$Params, context?: HttpContext): Observable<PaginatedProductCategoryList> {
    return this.productCategoryList$Response(params, context).pipe(
      map((r: StrictHttpResponse<PaginatedProductCategoryList>): PaginatedProductCategoryList => r.body)
    );
  }

  /** Path part for operation `productCategoryCreate()` */
  static readonly ProductCategoryCreatePath = '/api/product_category/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `productCategoryCreate$Json()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  productCategoryCreate$Json$Response(params: ProductCategoryCreate$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<ProductCategory>> {
    return productCategoryCreate$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `productCategoryCreate$Json$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  productCategoryCreate$Json(params: ProductCategoryCreate$Json$Params, context?: HttpContext): Observable<ProductCategory> {
    return this.productCategoryCreate$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<ProductCategory>): ProductCategory => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `productCategoryCreate$XWwwFormUrlencoded()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  productCategoryCreate$XWwwFormUrlencoded$Response(params: ProductCategoryCreate$XWwwFormUrlencoded$Params, context?: HttpContext): Observable<StrictHttpResponse<ProductCategory>> {
    return productCategoryCreate$XWwwFormUrlencoded(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `productCategoryCreate$XWwwFormUrlencoded$Response()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  productCategoryCreate$XWwwFormUrlencoded(params: ProductCategoryCreate$XWwwFormUrlencoded$Params, context?: HttpContext): Observable<ProductCategory> {
    return this.productCategoryCreate$XWwwFormUrlencoded$Response(params, context).pipe(
      map((r: StrictHttpResponse<ProductCategory>): ProductCategory => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `productCategoryCreate$FormData()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  productCategoryCreate$FormData$Response(params: ProductCategoryCreate$FormData$Params, context?: HttpContext): Observable<StrictHttpResponse<ProductCategory>> {
    return productCategoryCreate$FormData(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `productCategoryCreate$FormData$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  productCategoryCreate$FormData(params: ProductCategoryCreate$FormData$Params, context?: HttpContext): Observable<ProductCategory> {
    return this.productCategoryCreate$FormData$Response(params, context).pipe(
      map((r: StrictHttpResponse<ProductCategory>): ProductCategory => r.body)
    );
  }

  /** Path part for operation `productCategoryRetrieve()` */
  static readonly ProductCategoryRetrievePath = '/api/product_category/{id}/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `productCategoryRetrieve()` instead.
   *
   * This method doesn't expect any request body.
   */
  productCategoryRetrieve$Response(params: ProductCategoryRetrieve$Params, context?: HttpContext): Observable<StrictHttpResponse<ProductCategory>> {
    return productCategoryRetrieve(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `productCategoryRetrieve$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  productCategoryRetrieve(params: ProductCategoryRetrieve$Params, context?: HttpContext): Observable<ProductCategory> {
    return this.productCategoryRetrieve$Response(params, context).pipe(
      map((r: StrictHttpResponse<ProductCategory>): ProductCategory => r.body)
    );
  }

  /** Path part for operation `productCategoryUpdate()` */
  static readonly ProductCategoryUpdatePath = '/api/product_category/{id}/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `productCategoryUpdate$Json()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  productCategoryUpdate$Json$Response(params: ProductCategoryUpdate$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<ProductCategory>> {
    return productCategoryUpdate$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `productCategoryUpdate$Json$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  productCategoryUpdate$Json(params: ProductCategoryUpdate$Json$Params, context?: HttpContext): Observable<ProductCategory> {
    return this.productCategoryUpdate$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<ProductCategory>): ProductCategory => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `productCategoryUpdate$XWwwFormUrlencoded()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  productCategoryUpdate$XWwwFormUrlencoded$Response(params: ProductCategoryUpdate$XWwwFormUrlencoded$Params, context?: HttpContext): Observable<StrictHttpResponse<ProductCategory>> {
    return productCategoryUpdate$XWwwFormUrlencoded(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `productCategoryUpdate$XWwwFormUrlencoded$Response()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  productCategoryUpdate$XWwwFormUrlencoded(params: ProductCategoryUpdate$XWwwFormUrlencoded$Params, context?: HttpContext): Observable<ProductCategory> {
    return this.productCategoryUpdate$XWwwFormUrlencoded$Response(params, context).pipe(
      map((r: StrictHttpResponse<ProductCategory>): ProductCategory => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `productCategoryUpdate$FormData()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  productCategoryUpdate$FormData$Response(params: ProductCategoryUpdate$FormData$Params, context?: HttpContext): Observable<StrictHttpResponse<ProductCategory>> {
    return productCategoryUpdate$FormData(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `productCategoryUpdate$FormData$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  productCategoryUpdate$FormData(params: ProductCategoryUpdate$FormData$Params, context?: HttpContext): Observable<ProductCategory> {
    return this.productCategoryUpdate$FormData$Response(params, context).pipe(
      map((r: StrictHttpResponse<ProductCategory>): ProductCategory => r.body)
    );
  }

  /** Path part for operation `productCategoryDestroy()` */
  static readonly ProductCategoryDestroyPath = '/api/product_category/{id}/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `productCategoryDestroy()` instead.
   *
   * This method doesn't expect any request body.
   */
  productCategoryDestroy$Response(params: ProductCategoryDestroy$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return productCategoryDestroy(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `productCategoryDestroy$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  productCategoryDestroy(params: ProductCategoryDestroy$Params, context?: HttpContext): Observable<void> {
    return this.productCategoryDestroy$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `productCategoryPartialUpdate()` */
  static readonly ProductCategoryPartialUpdatePath = '/api/product_category/{id}/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `productCategoryPartialUpdate$Json()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  productCategoryPartialUpdate$Json$Response(params: ProductCategoryPartialUpdate$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<ProductCategory>> {
    return productCategoryPartialUpdate$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `productCategoryPartialUpdate$Json$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  productCategoryPartialUpdate$Json(params: ProductCategoryPartialUpdate$Json$Params, context?: HttpContext): Observable<ProductCategory> {
    return this.productCategoryPartialUpdate$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<ProductCategory>): ProductCategory => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `productCategoryPartialUpdate$XWwwFormUrlencoded()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  productCategoryPartialUpdate$XWwwFormUrlencoded$Response(params: ProductCategoryPartialUpdate$XWwwFormUrlencoded$Params, context?: HttpContext): Observable<StrictHttpResponse<ProductCategory>> {
    return productCategoryPartialUpdate$XWwwFormUrlencoded(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `productCategoryPartialUpdate$XWwwFormUrlencoded$Response()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  productCategoryPartialUpdate$XWwwFormUrlencoded(params: ProductCategoryPartialUpdate$XWwwFormUrlencoded$Params, context?: HttpContext): Observable<ProductCategory> {
    return this.productCategoryPartialUpdate$XWwwFormUrlencoded$Response(params, context).pipe(
      map((r: StrictHttpResponse<ProductCategory>): ProductCategory => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `productCategoryPartialUpdate$FormData()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  productCategoryPartialUpdate$FormData$Response(params: ProductCategoryPartialUpdate$FormData$Params, context?: HttpContext): Observable<StrictHttpResponse<ProductCategory>> {
    return productCategoryPartialUpdate$FormData(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `productCategoryPartialUpdate$FormData$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  productCategoryPartialUpdate$FormData(params: ProductCategoryPartialUpdate$FormData$Params, context?: HttpContext): Observable<ProductCategory> {
    return this.productCategoryPartialUpdate$FormData$Response(params, context).pipe(
      map((r: StrictHttpResponse<ProductCategory>): ProductCategory => r.body)
    );
  }

}
