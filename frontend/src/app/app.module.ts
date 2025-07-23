import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, Router } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LoginPage} from "./main/user/login/login.page";
import {RegisterPage} from "./main/user/register/register.page";
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ApiModule } from 'src/api/api.module';
import { StepCheckEmailComponent } from './main/user/register/components/step-check-email/step-check-email.component';
import { StepCheckUsernameComponent } from './main/user/register/components/step-check-username/step-check-username.component';
import { AuthInterceptor } from './auth/auth.interceptor';
import { ProfilePage } from './main/user/profile/profile.page';



@NgModule({
    declarations: [
        AppComponent,
        LoginPage,
        RegisterPage,
        StepCheckEmailComponent,
        StepCheckUsernameComponent,
        ProfilePage,
    ],
    bootstrap: [
        AppComponent
    ],
    imports: [
        ReactiveFormsModule,
        BrowserModule,
        IonicModule.forRoot(),
        AppRoutingModule,
        ApiModule.forRoot({ rootUrl: 'http://localhost:8000' })], providers: [
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
    ] })
export class AppModule {}
