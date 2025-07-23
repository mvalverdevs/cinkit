/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { Order } from '../models/order';
import { orderCreate$FormData } from '../fn/order/order-create-form-data';
import { OrderCreate$FormData$Params } from '../fn/order/order-create-form-data';
import { orderCreate$Json } from '../fn/order/order-create-json';
import { OrderCreate$Json$Params } from '../fn/order/order-create-json';
import { orderCreate$XWwwFormUrlencoded } from '../fn/order/order-create-x-www-form-urlencoded';
import { OrderCreate$XWwwFormUrlencoded$Params } from '../fn/order/order-create-x-www-form-urlencoded';
import { orderList } from '../fn/order/order-list';
import { OrderList$Params } from '../fn/order/order-list';
import { orderPartialUpdate$FormData } from '../fn/order/order-partial-update-form-data';
import { OrderPartialUpdate$FormData$Params } from '../fn/order/order-partial-update-form-data';
import { orderPartialUpdate$Json } from '../fn/order/order-partial-update-json';
import { OrderPartialUpdate$Json$Params } from '../fn/order/order-partial-update-json';
import { orderPartialUpdate$XWwwFormUrlencoded } from '../fn/order/order-partial-update-x-www-form-urlencoded';
import { OrderPartialUpdate$XWwwFormUrlencoded$Params } from '../fn/order/order-partial-update-x-www-form-urlencoded';
import { orderRetrieve } from '../fn/order/order-retrieve';
import { OrderRetrieve$Params } from '../fn/order/order-retrieve';
import { orderUpdate$FormData } from '../fn/order/order-update-form-data';
import { OrderUpdate$FormData$Params } from '../fn/order/order-update-form-data';
import { orderUpdate$Json } from '../fn/order/order-update-json';
import { OrderUpdate$Json$Params } from '../fn/order/order-update-json';
import { orderUpdate$XWwwFormUrlencoded } from '../fn/order/order-update-x-www-form-urlencoded';
import { OrderUpdate$XWwwFormUrlencoded$Params } from '../fn/order/order-update-x-www-form-urlencoded';
import { PaginatedOrderList } from '../models/paginated-order-list';

@Injectable({ providedIn: 'root' })
export class OrderService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `orderList()` */
  static readonly OrderListPath = '/api/order/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `orderList()` instead.
   *
   * This method doesn't expect any request body.
   */
  orderList$Response(params?: OrderList$Params, context?: HttpContext): Observable<StrictHttpResponse<PaginatedOrderList>> {
    return orderList(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `orderList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  orderList(params?: OrderList$Params, context?: HttpContext): Observable<PaginatedOrderList> {
    return this.orderList$Response(params, context).pipe(
      map((r: StrictHttpResponse<PaginatedOrderList>): PaginatedOrderList => r.body)
    );
  }

  /** Path part for operation `orderCreate()` */
  static readonly OrderCreatePath = '/api/order/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `orderCreate$Json()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  orderCreate$Json$Response(params: OrderCreate$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Order>> {
    return orderCreate$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `orderCreate$Json$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  orderCreate$Json(params: OrderCreate$Json$Params, context?: HttpContext): Observable<Order> {
    return this.orderCreate$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Order>): Order => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `orderCreate$XWwwFormUrlencoded()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  orderCreate$XWwwFormUrlencoded$Response(params: OrderCreate$XWwwFormUrlencoded$Params, context?: HttpContext): Observable<StrictHttpResponse<Order>> {
    return orderCreate$XWwwFormUrlencoded(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `orderCreate$XWwwFormUrlencoded$Response()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  orderCreate$XWwwFormUrlencoded(params: OrderCreate$XWwwFormUrlencoded$Params, context?: HttpContext): Observable<Order> {
    return this.orderCreate$XWwwFormUrlencoded$Response(params, context).pipe(
      map((r: StrictHttpResponse<Order>): Order => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `orderCreate$FormData()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  orderCreate$FormData$Response(params: OrderCreate$FormData$Params, context?: HttpContext): Observable<StrictHttpResponse<Order>> {
    return orderCreate$FormData(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `orderCreate$FormData$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  orderCreate$FormData(params: OrderCreate$FormData$Params, context?: HttpContext): Observable<Order> {
    return this.orderCreate$FormData$Response(params, context).pipe(
      map((r: StrictHttpResponse<Order>): Order => r.body)
    );
  }

  /** Path part for operation `orderRetrieve()` */
  static readonly OrderRetrievePath = '/api/order/{id}/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `orderRetrieve()` instead.
   *
   * This method doesn't expect any request body.
   */
  orderRetrieve$Response(params: OrderRetrieve$Params, context?: HttpContext): Observable<StrictHttpResponse<Order>> {
    return orderRetrieve(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `orderRetrieve$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  orderRetrieve(params: OrderRetrieve$Params, context?: HttpContext): Observable<Order> {
    return this.orderRetrieve$Response(params, context).pipe(
      map((r: StrictHttpResponse<Order>): Order => r.body)
    );
  }

  /** Path part for operation `orderUpdate()` */
  static readonly OrderUpdatePath = '/api/order/{id}/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `orderUpdate$Json()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  orderUpdate$Json$Response(params: OrderUpdate$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Order>> {
    return orderUpdate$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `orderUpdate$Json$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  orderUpdate$Json(params: OrderUpdate$Json$Params, context?: HttpContext): Observable<Order> {
    return this.orderUpdate$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Order>): Order => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `orderUpdate$XWwwFormUrlencoded()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  orderUpdate$XWwwFormUrlencoded$Response(params: OrderUpdate$XWwwFormUrlencoded$Params, context?: HttpContext): Observable<StrictHttpResponse<Order>> {
    return orderUpdate$XWwwFormUrlencoded(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `orderUpdate$XWwwFormUrlencoded$Response()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  orderUpdate$XWwwFormUrlencoded(params: OrderUpdate$XWwwFormUrlencoded$Params, context?: HttpContext): Observable<Order> {
    return this.orderUpdate$XWwwFormUrlencoded$Response(params, context).pipe(
      map((r: StrictHttpResponse<Order>): Order => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `orderUpdate$FormData()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  orderUpdate$FormData$Response(params: OrderUpdate$FormData$Params, context?: HttpContext): Observable<StrictHttpResponse<Order>> {
    return orderUpdate$FormData(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `orderUpdate$FormData$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  orderUpdate$FormData(params: OrderUpdate$FormData$Params, context?: HttpContext): Observable<Order> {
    return this.orderUpdate$FormData$Response(params, context).pipe(
      map((r: StrictHttpResponse<Order>): Order => r.body)
    );
  }

  /** Path part for operation `orderPartialUpdate()` */
  static readonly OrderPartialUpdatePath = '/api/order/{id}/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `orderPartialUpdate$Json()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  orderPartialUpdate$Json$Response(params: OrderPartialUpdate$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Order>> {
    return orderPartialUpdate$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `orderPartialUpdate$Json$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  orderPartialUpdate$Json(params: OrderPartialUpdate$Json$Params, context?: HttpContext): Observable<Order> {
    return this.orderPartialUpdate$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Order>): Order => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `orderPartialUpdate$XWwwFormUrlencoded()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  orderPartialUpdate$XWwwFormUrlencoded$Response(params: OrderPartialUpdate$XWwwFormUrlencoded$Params, context?: HttpContext): Observable<StrictHttpResponse<Order>> {
    return orderPartialUpdate$XWwwFormUrlencoded(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `orderPartialUpdate$XWwwFormUrlencoded$Response()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  orderPartialUpdate$XWwwFormUrlencoded(params: OrderPartialUpdate$XWwwFormUrlencoded$Params, context?: HttpContext): Observable<Order> {
    return this.orderPartialUpdate$XWwwFormUrlencoded$Response(params, context).pipe(
      map((r: StrictHttpResponse<Order>): Order => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `orderPartialUpdate$FormData()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  orderPartialUpdate$FormData$Response(params: OrderPartialUpdate$FormData$Params, context?: HttpContext): Observable<StrictHttpResponse<Order>> {
    return orderPartialUpdate$FormData(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `orderPartialUpdate$FormData$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  orderPartialUpdate$FormData(params: OrderPartialUpdate$FormData$Params, context?: HttpContext): Observable<Order> {
    return this.orderPartialUpdate$FormData$Response(params, context).pipe(
      map((r: StrictHttpResponse<Order>): Order => r.body)
    );
  }

}
