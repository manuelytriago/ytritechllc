import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { MainBodyComponent } from './main-body/main-body.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { TestFormComponent } from './test-form/test-form.component';

const routes: Routes = [ 
  { path: '', redirectTo: '/mainHeader', pathMatch: 'full' },
  { path: 'mainHeader', component: MainHeaderComponent },
  { path: 'mainBody', component: MainBodyComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'testForm', component: TestFormComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
