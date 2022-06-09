import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainHeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { AboutComponent } from './about/about.component';
import { DefaultLayoutComponent } from './layout/default-layout/default-layout.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    FooterComponent,
    AboutComponent,
    DefaultLayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
