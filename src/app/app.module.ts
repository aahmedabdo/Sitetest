import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Layout/header/header.component';
import { SubnavbarComponent } from './Layout/subnavbar/subnavbar.component';
import { ContentComponent } from './Layout/content/content.component';
import { ServicesService } from './Services/services.service';
import { LoginComponent } from './Layout/login/login.component';
import { NgxUiLoaderModule } from  'ngx-ui-loader';
import { RouteRoutingModule } from './Routing/route-routing.module';
import { LookupService } from './Services/lookup-service.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SubnavbarComponent,
    ContentComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxUiLoaderModule,
    RouteRoutingModule
  ],
  providers: [ServicesService,LookupService],
  bootstrap: [AppComponent]
})
export class AppModule { }