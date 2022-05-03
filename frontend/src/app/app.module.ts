import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenubarModule } from 'primeng/menubar';
import { ToolbarModule } from 'primeng/toolbar';

import { InputTextModule } from "primeng/inputtext";
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from "primeng/dialog";
import { ConfirmationService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
// import { FileUploadModule } from "primeng/fileupload";
import { TableModule } from "primeng/table";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { RatingModule } from "primeng/rating";
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { DeviceComponent } from './components/device/device.component';
import { CategoryComponent } from './components/category/category.component';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LogoutComponent } from './components/logout/logout.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    DeviceComponent,
    CategoryComponent,
    LogoutComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    MenubarModule,
    InputTextModule,
    ToastModule,
    ToolbarModule,
    ButtonModule,
    DialogModule,
    ConfirmDialogModule,
    // FileUploadModule,
    TableModule,
    BrowserAnimationsModule, 
    // RatingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    MessageService, 
    ConfirmationService,
    {provide: LOCALE_ID,useValue: 'pt-BR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
