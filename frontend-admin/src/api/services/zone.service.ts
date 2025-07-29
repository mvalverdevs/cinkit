/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { PaginatedZoneList } from '../models/paginated-zone-list';
import { Zone } from '../models/zone';
import { zoneCreate$FormData } from '../fn/zone/zone-create-form-data';
import { ZoneCreate$FormData$Params } from '../fn/zone/zone-create-form-data';
import { zoneCreate$Json } from '../fn/zone/zone-create-json';
import { ZoneCreate$Json$Params } from '../fn/zone/zone-create-json';
import { zoneCreate$XWwwFormUrlencoded } from '../fn/zone/zone-create-x-www-form-urlencoded';
import { ZoneCreate$XWwwFormUrlencoded$Params } from '../fn/zone/zone-create-x-www-form-urlencoded';
import { zoneList } from '../fn/zone/zone-list';
import { ZoneList$Params } from '../fn/zone/zone-list';
import { zonePartialUpdate$FormData } from '../fn/zone/zone-partial-update-form-data';
import { ZonePartialUpdate$FormData$Params } from '../fn/zone/zone-partial-update-form-data';
import { zonePartialUpdate$Json } from '../fn/zone/zone-partial-update-json';
import { ZonePartialUpdate$Json$Params } from '../fn/zone/zone-partial-update-json';
import { zonePartialUpdate$XWwwFormUrlencoded } from '../fn/zone/zone-partial-update-x-www-form-urlencoded';
import { ZonePartialUpdate$XWwwFormUrlencoded$Params } from '../fn/zone/zone-partial-update-x-www-form-urlencoded';
import { zoneRetrieve } from '../fn/zone/zone-retrieve';
import { ZoneRetrieve$Params } from '../fn/zone/zone-retrieve';
import { zoneUpdate$FormData } from '../fn/zone/zone-update-form-data';
import { ZoneUpdate$FormData$Params } from '../fn/zone/zone-update-form-data';
import { zoneUpdate$Json } from '../fn/zone/zone-update-json';
import { ZoneUpdate$Json$Params } from '../fn/zone/zone-update-json';
import { zoneUpdate$XWwwFormUrlencoded } from '../fn/zone/zone-update-x-www-form-urlencoded';
import { ZoneUpdate$XWwwFormUrlencoded$Params } from '../fn/zone/zone-update-x-www-form-urlencoded';

@Injectable({ providedIn: 'root' })
export class ZoneService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `zoneList()` */
  static readonly ZoneListPath = '/api/zone/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `zoneList()` instead.
   *
   * This method doesn't expect any request body.
   */
  zoneList$Response(params?: ZoneList$Params, context?: HttpContext): Observable<StrictHttpResponse<PaginatedZoneList>> {
    return zoneList(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `zoneList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  zoneList(params?: ZoneList$Params, context?: HttpContext): Observable<PaginatedZoneList> {
    return this.zoneList$Response(params, context).pipe(
      map((r: StrictHttpResponse<PaginatedZoneList>): PaginatedZoneList => r.body)
    );
  }

  /** Path part for operation `zoneCreate()` */
  static readonly ZoneCreatePath = '/api/zone/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `zoneCreate$Json()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  zoneCreate$Json$Response(params: ZoneCreate$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Zone>> {
    return zoneCreate$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `zoneCreate$Json$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  zoneCreate$Json(params: ZoneCreate$Json$Params, context?: HttpContext): Observable<Zone> {
    return this.zoneCreate$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Zone>): Zone => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `zoneCreate$XWwwFormUrlencoded()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  zoneCreate$XWwwFormUrlencoded$Response(params: ZoneCreate$XWwwFormUrlencoded$Params, context?: HttpContext): Observable<StrictHttpResponse<Zone>> {
    return zoneCreate$XWwwFormUrlencoded(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `zoneCreate$XWwwFormUrlencoded$Response()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  zoneCreate$XWwwFormUrlencoded(params: ZoneCreate$XWwwFormUrlencoded$Params, context?: HttpContext): Observable<Zone> {
    return this.zoneCreate$XWwwFormUrlencoded$Response(params, context).pipe(
      map((r: StrictHttpResponse<Zone>): Zone => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `zoneCreate$FormData()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  zoneCreate$FormData$Response(params: ZoneCreate$FormData$Params, context?: HttpContext): Observable<StrictHttpResponse<Zone>> {
    return zoneCreate$FormData(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `zoneCreate$FormData$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  zoneCreate$FormData(params: ZoneCreate$FormData$Params, context?: HttpContext): Observable<Zone> {
    return this.zoneCreate$FormData$Response(params, context).pipe(
      map((r: StrictHttpResponse<Zone>): Zone => r.body)
    );
  }

  /** Path part for operation `zoneRetrieve()` */
  static readonly ZoneRetrievePath = '/api/zone/{id}/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `zoneRetrieve()` instead.
   *
   * This method doesn't expect any request body.
   */
  zoneRetrieve$Response(params: ZoneRetrieve$Params, context?: HttpContext): Observable<StrictHttpResponse<Zone>> {
    return zoneRetrieve(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `zoneRetrieve$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  zoneRetrieve(params: ZoneRetrieve$Params, context?: HttpContext): Observable<Zone> {
    return this.zoneRetrieve$Response(params, context).pipe(
      map((r: StrictHttpResponse<Zone>): Zone => r.body)
    );
  }

  /** Path part for operation `zoneUpdate()` */
  static readonly ZoneUpdatePath = '/api/zone/{id}/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `zoneUpdate$Json()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  zoneUpdate$Json$Response(params: ZoneUpdate$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Zone>> {
    return zoneUpdate$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `zoneUpdate$Json$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  zoneUpdate$Json(params: ZoneUpdate$Json$Params, context?: HttpContext): Observable<Zone> {
    return this.zoneUpdate$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Zone>): Zone => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `zoneUpdate$XWwwFormUrlencoded()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  zoneUpdate$XWwwFormUrlencoded$Response(params: ZoneUpdate$XWwwFormUrlencoded$Params, context?: HttpContext): Observable<StrictHttpResponse<Zone>> {
    return zoneUpdate$XWwwFormUrlencoded(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `zoneUpdate$XWwwFormUrlencoded$Response()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  zoneUpdate$XWwwFormUrlencoded(params: ZoneUpdate$XWwwFormUrlencoded$Params, context?: HttpContext): Observable<Zone> {
    return this.zoneUpdate$XWwwFormUrlencoded$Response(params, context).pipe(
      map((r: StrictHttpResponse<Zone>): Zone => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `zoneUpdate$FormData()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  zoneUpdate$FormData$Response(params: ZoneUpdate$FormData$Params, context?: HttpContext): Observable<StrictHttpResponse<Zone>> {
    return zoneUpdate$FormData(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `zoneUpdate$FormData$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  zoneUpdate$FormData(params: ZoneUpdate$FormData$Params, context?: HttpContext): Observable<Zone> {
    return this.zoneUpdate$FormData$Response(params, context).pipe(
      map((r: StrictHttpResponse<Zone>): Zone => r.body)
    );
  }

  /** Path part for operation `zonePartialUpdate()` */
  static readonly ZonePartialUpdatePath = '/api/zone/{id}/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `zonePartialUpdate$Json()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  zonePartialUpdate$Json$Response(params: ZonePartialUpdate$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Zone>> {
    return zonePartialUpdate$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `zonePartialUpdate$Json$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  zonePartialUpdate$Json(params: ZonePartialUpdate$Json$Params, context?: HttpContext): Observable<Zone> {
    return this.zonePartialUpdate$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Zone>): Zone => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `zonePartialUpdate$XWwwFormUrlencoded()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  zonePartialUpdate$XWwwFormUrlencoded$Response(params: ZonePartialUpdate$XWwwFormUrlencoded$Params, context?: HttpContext): Observable<StrictHttpResponse<Zone>> {
    return zonePartialUpdate$XWwwFormUrlencoded(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `zonePartialUpdate$XWwwFormUrlencoded$Response()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  zonePartialUpdate$XWwwFormUrlencoded(params: ZonePartialUpdate$XWwwFormUrlencoded$Params, context?: HttpContext): Observable<Zone> {
    return this.zonePartialUpdate$XWwwFormUrlencoded$Response(params, context).pipe(
      map((r: StrictHttpResponse<Zone>): Zone => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `zonePartialUpdate$FormData()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  zonePartialUpdate$FormData$Response(params: ZonePartialUpdate$FormData$Params, context?: HttpContext): Observable<StrictHttpResponse<Zone>> {
    return zonePartialUpdate$FormData(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `zonePartialUpdate$FormData$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  zonePartialUpdate$FormData(params: ZonePartialUpdate$FormData$Params, context?: HttpContext): Observable<Zone> {
    return this.zonePartialUpdate$FormData$Response(params, context).pipe(
      map((r: StrictHttpResponse<Zone>): Zone => r.body)
    );
  }

}
