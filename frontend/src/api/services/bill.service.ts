/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { Bill } from '../models/bill';
import { billCloseCreate$FormData } from '../fn/bill/bill-close-create-form-data';
import { BillCloseCreate$FormData$Params } from '../fn/bill/bill-close-create-form-data';
import { billCloseCreate$Json } from '../fn/bill/bill-close-create-json';
import { BillCloseCreate$Json$Params } from '../fn/bill/bill-close-create-json';
import { billCloseCreate$XWwwFormUrlencoded } from '../fn/bill/bill-close-create-x-www-form-urlencoded';
import { BillCloseCreate$XWwwFormUrlencoded$Params } from '../fn/bill/bill-close-create-x-www-form-urlencoded';
import { billCreate$FormData } from '../fn/bill/bill-create-form-data';
import { BillCreate$FormData$Params } from '../fn/bill/bill-create-form-data';
import { billCreate$Json } from '../fn/bill/bill-create-json';
import { BillCreate$Json$Params } from '../fn/bill/bill-create-json';
import { billCreate$XWwwFormUrlencoded } from '../fn/bill/bill-create-x-www-form-urlencoded';
import { BillCreate$XWwwFormUrlencoded$Params } from '../fn/bill/bill-create-x-www-form-urlencoded';
import { billLastOrderRetrieve } from '../fn/bill/bill-last-order-retrieve';
import { BillLastOrderRetrieve$Params } from '../fn/bill/bill-last-order-retrieve';
import { billList } from '../fn/bill/bill-list';
import { BillList$Params } from '../fn/bill/bill-list';
import { billNewOrderCreate$FormData } from '../fn/bill/bill-new-order-create-form-data';
import { BillNewOrderCreate$FormData$Params } from '../fn/bill/bill-new-order-create-form-data';
import { billNewOrderCreate$Json } from '../fn/bill/bill-new-order-create-json';
import { BillNewOrderCreate$Json$Params } from '../fn/bill/bill-new-order-create-json';
import { billNewOrderCreate$XWwwFormUrlencoded } from '../fn/bill/bill-new-order-create-x-www-form-urlencoded';
import { BillNewOrderCreate$XWwwFormUrlencoded$Params } from '../fn/bill/bill-new-order-create-x-www-form-urlencoded';
import { billPartialUpdate$FormData } from '../fn/bill/bill-partial-update-form-data';
import { BillPartialUpdate$FormData$Params } from '../fn/bill/bill-partial-update-form-data';
import { billPartialUpdate$Json } from '../fn/bill/bill-partial-update-json';
import { BillPartialUpdate$Json$Params } from '../fn/bill/bill-partial-update-json';
import { billPartialUpdate$XWwwFormUrlencoded } from '../fn/bill/bill-partial-update-x-www-form-urlencoded';
import { BillPartialUpdate$XWwwFormUrlencoded$Params } from '../fn/bill/bill-partial-update-x-www-form-urlencoded';
import { billRetrieve } from '../fn/bill/bill-retrieve';
import { BillRetrieve$Params } from '../fn/bill/bill-retrieve';
import { billUpdate$FormData } from '../fn/bill/bill-update-form-data';
import { BillUpdate$FormData$Params } from '../fn/bill/bill-update-form-data';
import { billUpdate$Json } from '../fn/bill/bill-update-json';
import { BillUpdate$Json$Params } from '../fn/bill/bill-update-json';
import { billUpdate$XWwwFormUrlencoded } from '../fn/bill/bill-update-x-www-form-urlencoded';
import { BillUpdate$XWwwFormUrlencoded$Params } from '../fn/bill/bill-update-x-www-form-urlencoded';
import { Order } from '../models/order';
import { PaginatedBillList } from '../models/paginated-bill-list';

@Injectable({ providedIn: 'root' })
export class BillService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `billList()` */
  static readonly BillListPath = '/api/bill/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `billList()` instead.
   *
   * This method doesn't expect any request body.
   */
  billList$Response(params?: BillList$Params, context?: HttpContext): Observable<StrictHttpResponse<PaginatedBillList>> {
    return billList(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `billList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  billList(params?: BillList$Params, context?: HttpContext): Observable<PaginatedBillList> {
    return this.billList$Response(params, context).pipe(
      map((r: StrictHttpResponse<PaginatedBillList>): PaginatedBillList => r.body)
    );
  }

  /** Path part for operation `billCreate()` */
  static readonly BillCreatePath = '/api/bill/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `billCreate$Json()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  billCreate$Json$Response(params?: BillCreate$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Bill>> {
    return billCreate$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `billCreate$Json$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  billCreate$Json(params?: BillCreate$Json$Params, context?: HttpContext): Observable<Bill> {
    return this.billCreate$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Bill>): Bill => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `billCreate$XWwwFormUrlencoded()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  billCreate$XWwwFormUrlencoded$Response(params?: BillCreate$XWwwFormUrlencoded$Params, context?: HttpContext): Observable<StrictHttpResponse<Bill>> {
    return billCreate$XWwwFormUrlencoded(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `billCreate$XWwwFormUrlencoded$Response()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  billCreate$XWwwFormUrlencoded(params?: BillCreate$XWwwFormUrlencoded$Params, context?: HttpContext): Observable<Bill> {
    return this.billCreate$XWwwFormUrlencoded$Response(params, context).pipe(
      map((r: StrictHttpResponse<Bill>): Bill => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `billCreate$FormData()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  billCreate$FormData$Response(params?: BillCreate$FormData$Params, context?: HttpContext): Observable<StrictHttpResponse<Bill>> {
    return billCreate$FormData(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `billCreate$FormData$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  billCreate$FormData(params?: BillCreate$FormData$Params, context?: HttpContext): Observable<Bill> {
    return this.billCreate$FormData$Response(params, context).pipe(
      map((r: StrictHttpResponse<Bill>): Bill => r.body)
    );
  }

  /** Path part for operation `billRetrieve()` */
  static readonly BillRetrievePath = '/api/bill/{id}/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `billRetrieve()` instead.
   *
   * This method doesn't expect any request body.
   */
  billRetrieve$Response(params: BillRetrieve$Params, context?: HttpContext): Observable<StrictHttpResponse<Bill>> {
    return billRetrieve(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `billRetrieve$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  billRetrieve(params: BillRetrieve$Params, context?: HttpContext): Observable<Bill> {
    return this.billRetrieve$Response(params, context).pipe(
      map((r: StrictHttpResponse<Bill>): Bill => r.body)
    );
  }

  /** Path part for operation `billUpdate()` */
  static readonly BillUpdatePath = '/api/bill/{id}/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `billUpdate$Json()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  billUpdate$Json$Response(params: BillUpdate$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Bill>> {
    return billUpdate$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `billUpdate$Json$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  billUpdate$Json(params: BillUpdate$Json$Params, context?: HttpContext): Observable<Bill> {
    return this.billUpdate$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Bill>): Bill => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `billUpdate$XWwwFormUrlencoded()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  billUpdate$XWwwFormUrlencoded$Response(params: BillUpdate$XWwwFormUrlencoded$Params, context?: HttpContext): Observable<StrictHttpResponse<Bill>> {
    return billUpdate$XWwwFormUrlencoded(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `billUpdate$XWwwFormUrlencoded$Response()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  billUpdate$XWwwFormUrlencoded(params: BillUpdate$XWwwFormUrlencoded$Params, context?: HttpContext): Observable<Bill> {
    return this.billUpdate$XWwwFormUrlencoded$Response(params, context).pipe(
      map((r: StrictHttpResponse<Bill>): Bill => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `billUpdate$FormData()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  billUpdate$FormData$Response(params: BillUpdate$FormData$Params, context?: HttpContext): Observable<StrictHttpResponse<Bill>> {
    return billUpdate$FormData(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `billUpdate$FormData$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  billUpdate$FormData(params: BillUpdate$FormData$Params, context?: HttpContext): Observable<Bill> {
    return this.billUpdate$FormData$Response(params, context).pipe(
      map((r: StrictHttpResponse<Bill>): Bill => r.body)
    );
  }

  /** Path part for operation `billPartialUpdate()` */
  static readonly BillPartialUpdatePath = '/api/bill/{id}/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `billPartialUpdate$Json()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  billPartialUpdate$Json$Response(params: BillPartialUpdate$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Bill>> {
    return billPartialUpdate$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `billPartialUpdate$Json$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  billPartialUpdate$Json(params: BillPartialUpdate$Json$Params, context?: HttpContext): Observable<Bill> {
    return this.billPartialUpdate$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Bill>): Bill => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `billPartialUpdate$XWwwFormUrlencoded()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  billPartialUpdate$XWwwFormUrlencoded$Response(params: BillPartialUpdate$XWwwFormUrlencoded$Params, context?: HttpContext): Observable<StrictHttpResponse<Bill>> {
    return billPartialUpdate$XWwwFormUrlencoded(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `billPartialUpdate$XWwwFormUrlencoded$Response()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  billPartialUpdate$XWwwFormUrlencoded(params: BillPartialUpdate$XWwwFormUrlencoded$Params, context?: HttpContext): Observable<Bill> {
    return this.billPartialUpdate$XWwwFormUrlencoded$Response(params, context).pipe(
      map((r: StrictHttpResponse<Bill>): Bill => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `billPartialUpdate$FormData()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  billPartialUpdate$FormData$Response(params: BillPartialUpdate$FormData$Params, context?: HttpContext): Observable<StrictHttpResponse<Bill>> {
    return billPartialUpdate$FormData(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `billPartialUpdate$FormData$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  billPartialUpdate$FormData(params: BillPartialUpdate$FormData$Params, context?: HttpContext): Observable<Bill> {
    return this.billPartialUpdate$FormData$Response(params, context).pipe(
      map((r: StrictHttpResponse<Bill>): Bill => r.body)
    );
  }

  /** Path part for operation `billCloseCreate()` */
  static readonly BillCloseCreatePath = '/api/bill/{id}/close/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `billCloseCreate$Json()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  billCloseCreate$Json$Response(params: BillCloseCreate$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Bill>> {
    return billCloseCreate$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `billCloseCreate$Json$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  billCloseCreate$Json(params: BillCloseCreate$Json$Params, context?: HttpContext): Observable<Bill> {
    return this.billCloseCreate$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Bill>): Bill => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `billCloseCreate$XWwwFormUrlencoded()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  billCloseCreate$XWwwFormUrlencoded$Response(params: BillCloseCreate$XWwwFormUrlencoded$Params, context?: HttpContext): Observable<StrictHttpResponse<Bill>> {
    return billCloseCreate$XWwwFormUrlencoded(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `billCloseCreate$XWwwFormUrlencoded$Response()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  billCloseCreate$XWwwFormUrlencoded(params: BillCloseCreate$XWwwFormUrlencoded$Params, context?: HttpContext): Observable<Bill> {
    return this.billCloseCreate$XWwwFormUrlencoded$Response(params, context).pipe(
      map((r: StrictHttpResponse<Bill>): Bill => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `billCloseCreate$FormData()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  billCloseCreate$FormData$Response(params: BillCloseCreate$FormData$Params, context?: HttpContext): Observable<StrictHttpResponse<Bill>> {
    return billCloseCreate$FormData(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `billCloseCreate$FormData$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  billCloseCreate$FormData(params: BillCloseCreate$FormData$Params, context?: HttpContext): Observable<Bill> {
    return this.billCloseCreate$FormData$Response(params, context).pipe(
      map((r: StrictHttpResponse<Bill>): Bill => r.body)
    );
  }

  /** Path part for operation `billLastOrderRetrieve()` */
  static readonly BillLastOrderRetrievePath = '/api/bill/{id}/last_order/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `billLastOrderRetrieve()` instead.
   *
   * This method doesn't expect any request body.
   */
  billLastOrderRetrieve$Response(params: BillLastOrderRetrieve$Params, context?: HttpContext): Observable<StrictHttpResponse<Order>> {
    return billLastOrderRetrieve(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `billLastOrderRetrieve$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  billLastOrderRetrieve(params: BillLastOrderRetrieve$Params, context?: HttpContext): Observable<Order> {
    return this.billLastOrderRetrieve$Response(params, context).pipe(
      map((r: StrictHttpResponse<Order>): Order => r.body)
    );
  }

  /** Path part for operation `billNewOrderCreate()` */
  static readonly BillNewOrderCreatePath = '/api/bill/{id}/new_order/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `billNewOrderCreate$Json()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  billNewOrderCreate$Json$Response(params: BillNewOrderCreate$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Order>> {
    return billNewOrderCreate$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `billNewOrderCreate$Json$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  billNewOrderCreate$Json(params: BillNewOrderCreate$Json$Params, context?: HttpContext): Observable<Order> {
    return this.billNewOrderCreate$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Order>): Order => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `billNewOrderCreate$XWwwFormUrlencoded()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  billNewOrderCreate$XWwwFormUrlencoded$Response(params: BillNewOrderCreate$XWwwFormUrlencoded$Params, context?: HttpContext): Observable<StrictHttpResponse<Order>> {
    return billNewOrderCreate$XWwwFormUrlencoded(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `billNewOrderCreate$XWwwFormUrlencoded$Response()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  billNewOrderCreate$XWwwFormUrlencoded(params: BillNewOrderCreate$XWwwFormUrlencoded$Params, context?: HttpContext): Observable<Order> {
    return this.billNewOrderCreate$XWwwFormUrlencoded$Response(params, context).pipe(
      map((r: StrictHttpResponse<Order>): Order => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `billNewOrderCreate$FormData()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  billNewOrderCreate$FormData$Response(params: BillNewOrderCreate$FormData$Params, context?: HttpContext): Observable<StrictHttpResponse<Order>> {
    return billNewOrderCreate$FormData(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `billNewOrderCreate$FormData$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  billNewOrderCreate$FormData(params: BillNewOrderCreate$FormData$Params, context?: HttpContext): Observable<Order> {
    return this.billNewOrderCreate$FormData$Response(params, context).pipe(
      map((r: StrictHttpResponse<Order>): Order => r.body)
    );
  }

}
