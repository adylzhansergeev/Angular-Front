import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {IsUserAuthGuard} from './guards/is-user.auth.guard';
import {IsAdminGuard} from './guards/is-admin.guard';


const routes: Routes = [
  {path: '', loadChildren: './components/anonymous/anonymous.module#AnonymousModule'},
  {path: 'auth', loadChildren: './components/auth/auth.module#AuthModule', canActivate: [IsUserAuthGuard], data: {role: 'ROLE_USER'}},
  {path: 'admin', loadChildren: './components/admin/admin.module#AdminModule', canActivate: [IsAdminGuard], data: {role: 'ROLE_ADMIN'}}
];
@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
