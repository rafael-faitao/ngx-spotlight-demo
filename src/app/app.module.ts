import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgxSpotlightDemoModule } from 'projects/ngx-spotlight-demo/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxSpotlightDemoModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
