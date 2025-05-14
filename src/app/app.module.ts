import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component'
import { HttpClientModule } from '@angular/common/http';
import { MatMenuModule } from '@angular/material/menu';
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyCyLfhuq4i0VcncsyBrLGDKDTfDxMeCPj8",
  authDomain: "task-management-system-2.firebaseapp.com",
  projectId: "task-management-system-2",
  storageBucket: "task-management-system-2.firebasestorage.app",
  messagingSenderId: "52080322466",
  appId: "1:52080322466:web:d68d7851b99b7aa865b4fb"
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

const app = initializeApp(firebaseConfig);
