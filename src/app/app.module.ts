import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { AuthenticationComponent } from './public/authentication/authentication.component';
import { CoinsComponent } from './private/coins/coins.component';
import { ProfileComponent } from './private/profile/profile.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthenticationComponent,
    CoinsComponent,
    ProfileComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    NgbModule,
    NgbToastModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
