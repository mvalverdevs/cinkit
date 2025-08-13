/* tslint:disable */
/* eslint-disable */
import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationParams } from './api-configuration';

import { BillService } from './services/bill.service';
import { ImageCategoryService } from './services/image-category.service';
import { ImageLibraryService } from './services/image-library.service';
import { OrderService } from './services/order.service';
import { ProductService } from './services/product.service';
import { ProductCategoryService } from './services/product-category.service';
import { SchemaService } from './services/schema.service';
import { UserService } from './services/user.service';
import { ZoneService } from './services/zone.service';

/**
 * Module that provides all services and configuration.
 */
@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    BillService,
    ImageCategoryService,
    ImageLibraryService,
    OrderService,
    ProductService,
    ProductCategoryService,
    SchemaService,
    UserService,
    ZoneService,
    ApiConfiguration
  ],
})
export class ApiModule {
  static forRoot(params: ApiConfigurationParams): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: params
        }
      ]
    }
  }

  constructor( 
    @Optional() @SkipSelf() parentModule: ApiModule,
    @Optional() http: HttpClient
  ) {
    if (parentModule) {
      throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
      throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
      'See also https://github.com/angular/angular/issues/20575');
    }
  }
}
