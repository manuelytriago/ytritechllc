import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainHeaderComponent } from './layout/main-header/main-header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { MainCompComponent } from './main-comp/main-comp.component';
import { DefaultLayoutComponent } from './layout/default-layout/default-layout.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    MainHeaderComponent,
    AppComponent,
    FooterComponent,
    MainCompComponent,
    DefaultLayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  exports:[
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
