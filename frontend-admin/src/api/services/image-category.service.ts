/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { ImageCategory } from '../models/image-category';
import { imageCategoryCreate$FormData } from '../fn/image-category/image-category-create-form-data';
import { ImageCategoryCreate$FormData$Params } from '../fn/image-category/image-category-create-form-data';
import { imageCategoryCreate$Json } from '../fn/image-category/image-category-create-json';
import { ImageCategoryCreate$Json$Params } from '../fn/image-category/image-category-create-json';
import { imageCategoryCreate$XWwwFormUrlencoded } from '../fn/image-category/image-category-create-x-www-form-urlencoded';
import { ImageCategoryCreate$XWwwFormUrlencoded$Params } from '../fn/image-category/image-category-create-x-www-form-urlencoded';
import { imageCategoryDestroy } from '../fn/image-category/image-category-destroy';
import { ImageCategoryDestroy$Params } from '../fn/image-category/image-category-destroy';
import { imageCategoryList } from '../fn/image-category/image-category-list';
import { ImageCategoryList$Params } from '../fn/image-category/image-category-list';
import { imageCategoryPartialUpdate$FormData } from '../fn/image-category/image-category-partial-update-form-data';
import { ImageCategoryPartialUpdate$FormData$Params } from '../fn/image-category/image-category-partial-update-form-data';
import { imageCategoryPartialUpdate$Json } from '../fn/image-category/image-category-partial-update-json';
import { ImageCategoryPartialUpdate$Json$Params } from '../fn/image-category/image-category-partial-update-json';
import { imageCategoryPartialUpdate$XWwwFormUrlencoded } from '../fn/image-category/image-category-partial-update-x-www-form-urlencoded';
import { ImageCategoryPartialUpdate$XWwwFormUrlencoded$Params } from '../fn/image-category/image-category-partial-update-x-www-form-urlencoded';
import { imageCategoryRetrieve } from '../fn/image-category/image-category-retrieve';
import { ImageCategoryRetrieve$Params } from '../fn/image-category/image-category-retrieve';
import { imageCategoryUpdate$FormData } from '../fn/image-category/image-category-update-form-data';
import { ImageCategoryUpdate$FormData$Params } from '../fn/image-category/image-category-update-form-data';
import { imageCategoryUpdate$Json } from '../fn/image-category/image-category-update-json';
import { ImageCategoryUpdate$Json$Params } from '../fn/image-category/image-category-update-json';
import { imageCategoryUpdate$XWwwFormUrlencoded } from '../fn/image-category/image-category-update-x-www-form-urlencoded';
import { ImageCategoryUpdate$XWwwFormUrlencoded$Params } from '../fn/image-category/image-category-update-x-www-form-urlencoded';
import { PaginatedImageCategoryList } from '../models/paginated-image-category-list';

@Injectable({ providedIn: 'root' })
export class ImageCategoryService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `imageCategoryList()` */
  static readonly ImageCategoryListPath = '/api/image_category/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `imageCategoryList()` instead.
   *
   * This method doesn't expect any request body.
   */
  imageCategoryList$Response(params?: ImageCategoryList$Params, context?: HttpContext): Observable<StrictHttpResponse<PaginatedImageCategoryList>> {
    return imageCategoryList(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `imageCategoryList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  imageCategoryList(params?: ImageCategoryList$Params, context?: HttpContext): Observable<PaginatedImageCategoryList> {
    return this.imageCategoryList$Response(params, context).pipe(
      map((r: StrictHttpResponse<PaginatedImageCategoryList>): PaginatedImageCategoryList => r.body)
    );
  }

  /** Path part for operation `imageCategoryCreate()` */
  static readonly ImageCategoryCreatePath = '/api/image_category/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `imageCategoryCreate$Json()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  imageCategoryCreate$Json$Response(params: ImageCategoryCreate$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<ImageCategory>> {
    return imageCategoryCreate$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `imageCategoryCreate$Json$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  imageCategoryCreate$Json(params: ImageCategoryCreate$Json$Params, context?: HttpContext): Observable<ImageCategory> {
    return this.imageCategoryCreate$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<ImageCategory>): ImageCategory => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `imageCategoryCreate$XWwwFormUrlencoded()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  imageCategoryCreate$XWwwFormUrlencoded$Response(params: ImageCategoryCreate$XWwwFormUrlencoded$Params, context?: HttpContext): Observable<StrictHttpResponse<ImageCategory>> {
    return imageCategoryCreate$XWwwFormUrlencoded(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `imageCategoryCreate$XWwwFormUrlencoded$Response()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  imageCategoryCreate$XWwwFormUrlencoded(params: ImageCategoryCreate$XWwwFormUrlencoded$Params, context?: HttpContext): Observable<ImageCategory> {
    return this.imageCategoryCreate$XWwwFormUrlencoded$Response(params, context).pipe(
      map((r: StrictHttpResponse<ImageCategory>): ImageCategory => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `imageCategoryCreate$FormData()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  imageCategoryCreate$FormData$Response(params: ImageCategoryCreate$FormData$Params, context?: HttpContext): Observable<StrictHttpResponse<ImageCategory>> {
    return imageCategoryCreate$FormData(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `imageCategoryCreate$FormData$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  imageCategoryCreate$FormData(params: ImageCategoryCreate$FormData$Params, context?: HttpContext): Observable<ImageCategory> {
    return this.imageCategoryCreate$FormData$Response(params, context).pipe(
      map((r: StrictHttpResponse<ImageCategory>): ImageCategory => r.body)
    );
  }

  /** Path part for operation `imageCategoryRetrieve()` */
  static readonly ImageCategoryRetrievePath = '/api/image_category/{id}/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `imageCategoryRetrieve()` instead.
   *
   * This method doesn't expect any request body.
   */
  imageCategoryRetrieve$Response(params: ImageCategoryRetrieve$Params, context?: HttpContext): Observable<StrictHttpResponse<ImageCategory>> {
    return imageCategoryRetrieve(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `imageCategoryRetrieve$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  imageCategoryRetrieve(params: ImageCategoryRetrieve$Params, context?: HttpContext): Observable<ImageCategory> {
    return this.imageCategoryRetrieve$Response(params, context).pipe(
      map((r: StrictHttpResponse<ImageCategory>): ImageCategory => r.body)
    );
  }

  /** Path part for operation `imageCategoryUpdate()` */
  static readonly ImageCategoryUpdatePath = '/api/image_category/{id}/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `imageCategoryUpdate$Json()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  imageCategoryUpdate$Json$Response(params: ImageCategoryUpdate$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<ImageCategory>> {
    return imageCategoryUpdate$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `imageCategoryUpdate$Json$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  imageCategoryUpdate$Json(params: ImageCategoryUpdate$Json$Params, context?: HttpContext): Observable<ImageCategory> {
    return this.imageCategoryUpdate$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<ImageCategory>): ImageCategory => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `imageCategoryUpdate$XWwwFormUrlencoded()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  imageCategoryUpdate$XWwwFormUrlencoded$Response(params: ImageCategoryUpdate$XWwwFormUrlencoded$Params, context?: HttpContext): Observable<StrictHttpResponse<ImageCategory>> {
    return imageCategoryUpdate$XWwwFormUrlencoded(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `imageCategoryUpdate$XWwwFormUrlencoded$Response()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  imageCategoryUpdate$XWwwFormUrlencoded(params: ImageCategoryUpdate$XWwwFormUrlencoded$Params, context?: HttpContext): Observable<ImageCategory> {
    return this.imageCategoryUpdate$XWwwFormUrlencoded$Response(params, context).pipe(
      map((r: StrictHttpResponse<ImageCategory>): ImageCategory => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `imageCategoryUpdate$FormData()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  imageCategoryUpdate$FormData$Response(params: ImageCategoryUpdate$FormData$Params, context?: HttpContext): Observable<StrictHttpResponse<ImageCategory>> {
    return imageCategoryUpdate$FormData(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `imageCategoryUpdate$FormData$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  imageCategoryUpdate$FormData(params: ImageCategoryUpdate$FormData$Params, context?: HttpContext): Observable<ImageCategory> {
    return this.imageCategoryUpdate$FormData$Response(params, context).pipe(
      map((r: StrictHttpResponse<ImageCategory>): ImageCategory => r.body)
    );
  }

  /** Path part for operation `imageCategoryDestroy()` */
  static readonly ImageCategoryDestroyPath = '/api/image_category/{id}/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `imageCategoryDestroy()` instead.
   *
   * This method doesn't expect any request body.
   */
  imageCategoryDestroy$Response(params: ImageCategoryDestroy$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return imageCategoryDestroy(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `imageCategoryDestroy$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  imageCategoryDestroy(params: ImageCategoryDestroy$Params, context?: HttpContext): Observable<void> {
    return this.imageCategoryDestroy$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `imageCategoryPartialUpdate()` */
  static readonly ImageCategoryPartialUpdatePath = '/api/image_category/{id}/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `imageCategoryPartialUpdate$Json()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  imageCategoryPartialUpdate$Json$Response(params: ImageCategoryPartialUpdate$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<ImageCategory>> {
    return imageCategoryPartialUpdate$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `imageCategoryPartialUpdate$Json$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  imageCategoryPartialUpdate$Json(params: ImageCategoryPartialUpdate$Json$Params, context?: HttpContext): Observable<ImageCategory> {
    return this.imageCategoryPartialUpdate$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<ImageCategory>): ImageCategory => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `imageCategoryPartialUpdate$XWwwFormUrlencoded()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  imageCategoryPartialUpdate$XWwwFormUrlencoded$Response(params: ImageCategoryPartialUpdate$XWwwFormUrlencoded$Params, context?: HttpContext): Observable<StrictHttpResponse<ImageCategory>> {
    return imageCategoryPartialUpdate$XWwwFormUrlencoded(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `imageCategoryPartialUpdate$XWwwFormUrlencoded$Response()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  imageCategoryPartialUpdate$XWwwFormUrlencoded(params: ImageCategoryPartialUpdate$XWwwFormUrlencoded$Params, context?: HttpContext): Observable<ImageCategory> {
    return this.imageCategoryPartialUpdate$XWwwFormUrlencoded$Response(params, context).pipe(
      map((r: StrictHttpResponse<ImageCategory>): ImageCategory => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `imageCategoryPartialUpdate$FormData()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  imageCategoryPartialUpdate$FormData$Response(params: ImageCategoryPartialUpdate$FormData$Params, context?: HttpContext): Observable<StrictHttpResponse<ImageCategory>> {
    return imageCategoryPartialUpdate$FormData(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `imageCategoryPartialUpdate$FormData$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  imageCategoryPartialUpdate$FormData(params: ImageCategoryPartialUpdate$FormData$Params, context?: HttpContext): Observable<ImageCategory> {
    return this.imageCategoryPartialUpdate$FormData$Response(params, context).pipe(
      map((r: StrictHttpResponse<ImageCategory>): ImageCategory => r.body)
    );
  }

}
