import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppFormComponent } from './app-form/app-form.component';
import { AppDisplayComponent } from './app-display/app-display.component';
import { AppPhonepeComponent } from './app-phonepe/app-phonepe.component';

@NgModule({
  declarations: [
    AppComponent,
    AppFormComponent,
    AppDisplayComponent,
    AppPhonepeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
