import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './layout/footer/footer.component';
import { ServicesComponent } from './services/services.component';
import { MainHeaderComponent } from './layout/header/header.component';
import { ContactComponent } from './contact/contact.component';
import { DefaultLayoutComponent } from './layout/default-layout/default-layout.component';

const routes: Routes = [ 
  {
    path: '',
    component: DefaultLayoutComponent,
    children:[
      {
        path:'',loadChildren: () => import('./services/services.module').then(m => m.ServicesModule)
      },
      {
        path:'contact',loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule) 
      },
      {
        path:'about',loadChildren: () => import('./about/about.component').then(m => m.AboutComponent) 
      },
      {
        path:'services',loadChildren: () => import('./services/services.component').then(m => m.ServicesComponent) 
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
