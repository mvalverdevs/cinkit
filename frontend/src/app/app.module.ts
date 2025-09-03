import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, Router } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LoginPage} from "./main/user/login/login.page";
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ApiModule } from 'src/api/api.module';
import { AuthInterceptor } from './auth/auth.interceptor';
import { LateralMenuLayoutComponent } from './layouts/lateral-menu-layout/lateral-menu-layout.component';



@NgModule({
    declarations: [
        AppComponent,
        LoginPage,
    ],
    bootstrap: [
        AppComponent
    ],
    imports: [LateralMenuLayoutComponent,
        ReactiveFormsModule,
        BrowserModule,
        IonicModule.forRoot(),
        AppRoutingModule,
        ApiModule.forRoot({ rootUrl: 'http://192.168.1.52:8000' })], providers: [
        Router,
        {
            provide: RouteReuseStrategy,
            useClass: IonicRouteStrategy,
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true,
            deps: [Router],
        } as any,
        provideHttpClient(withInterceptorsFromDi()),
    ] 
})
export class AppModule {}
