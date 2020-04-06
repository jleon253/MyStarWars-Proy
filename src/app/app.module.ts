import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { LoginComponent } from './components/organisms/login/login.component';
import { ButtonComponent } from './components/atoms/button/button.component';
import { InputComponent } from './components/atoms/input/input.component';
import { LabelComponent } from './components/atoms/label/label.component';
import { InputFormComponent } from './components/molecules/input-form/input-form.component';
import { CheckboxComponent } from './components/atoms/checkbox/checkbox.component';
import { AlertComponent } from './components/molecules/alert/alert.component';
import { HomeComponent } from './components/organisms/home/home.component';
import { IdResourcePipe } from './pipes/id-resource.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ButtonComponent,
    InputComponent,
    LabelComponent,
    InputFormComponent,
    CheckboxComponent,
    AlertComponent,
    HomeComponent,
    IdResourcePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
