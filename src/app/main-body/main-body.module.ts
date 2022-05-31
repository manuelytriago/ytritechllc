import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainBodyComponent } from './main-body.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    MainBodyComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: MainBodyComponent
      }
    ]),
  ],
 
})
export class MainBodyModule { }
