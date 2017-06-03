import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BaseRequestOptions, HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import {MaterialModule} from './material/material.module';
import { HeaderComponent } from './header/header.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { ItemComponent } from './search-result/item/item.component';
import {GithubSearchService} from './common/services/github-search.service';
import {HttpService} from './common/services/http.service';
import { DOMAIN, DOMAIN_TOKEN } from '../config';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    HeaderComponent,
    SearchResultComponent,
    ItemComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    HttpModule,
    NgbModule
  ],
  providers: [
    GithubSearchService,
    BaseRequestOptions,
    HttpService,
    {
      provide: DOMAIN_TOKEN,
      useValue: DOMAIN
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
