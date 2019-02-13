import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Layout/header/header.component';
import { FooterComponent } from './Layout/footer/footer.component';
import { SliderComponent } from './Layout/slider/slider.component';
import { SidebarComponent } from './Layout/sidebar/sidebar.component';
import { SubnavbarComponent } from './Layout/subnavbar/subnavbar.component';
import { ContentComponent } from './Layout/content/content.component';
import { ServicesService } from './Services/services.service';
import { LoginComponent } from './Layout/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SliderComponent,
    SidebarComponent,
    SubnavbarComponent,
    ContentComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,

  ],
  providers: [ServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
