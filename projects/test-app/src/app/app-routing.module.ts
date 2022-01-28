import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [ {
  path: 'users',
  loadChildren: () => import('./pages/users/users.module').then(m => m.UsersModule)
}, {
  path: 'customers',
  loadChildren: () => import('./pages/customers/customers.module').then(m => m.CustomersModule)
} ];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
