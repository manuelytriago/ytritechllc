import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './layout/footer/footer.component';
import { MainBodyComponent } from './main-body/main-body.component';
import { MainHeaderComponent } from './layout/main-header/main-header.component';
import { ContactComponent } from './contact/contact.component';
import { DefaultLayoutComponent } from './layout/default-layout/default-layout.component';

const routes: Routes = [ 
  {
    path: '',
    component: DefaultLayoutComponent,
    children:[
      {
        path:'',loadChildren: () => import('./main-body/main-body.module').then(m => m.MainBodyModule)
      },
      {
        path:'contact',loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule) 
      }
    ]
  },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  /*{ path: 'mainHeader', component: MainHeaderComponent },
  { path: 'mainBody', component: MainBodyComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'footer', component: FooterComponent },*/

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
