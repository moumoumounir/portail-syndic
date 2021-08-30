import { RegisterUserComponent } from './views/register-user/register-user.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComplainlistAdminComponent } from './views/complainlist-admin/complainlist-admin.component';
import { ComplainreportAdminComponent } from './views/complainreport-admin/complainreport-admin.component';
import { HomeUserComponent } from './views/home-user/home-user.component';
import { LandingAdminComponent } from './views/landing-admin/landing-admin.component';
import { LandingUserComponent } from './views/landing-user/landing-user.component';
import { LoginAdminComponent } from './views/login-admin/login-admin.component';
import { LoginUserComponent } from './views/login-user/login-user.component';
import { ComplainlistUserComponent } from './views/complainlist-user/complainlist-user.component';
import { DataUserComponent } from './views/data-user/data-user.component';
import { NotificationlistUserComponent } from './views/notificationlist-user/notificationlist-user.component';
import { NewslistComponent } from './views/newslist/newslist.component';
import { AuthenticatorGuard } from './guard/authenticator.guard'
import { AdminAuthGuard } from './guard/admin-auth.guard'
import { JwtModule, JwtModuleOptions } from '@auth0/angular-jwt';
import { HttpClientModule } from "@angular/common/http";
import { RaportUserComponent } from './views/raport-user/raport-user.component';

const routes: Routes = [
  { path: '', component: LandingUserComponent },
  { path: 'admin-login', component: LoginAdminComponent },
  { path: 'admin', component: LandingAdminComponent, canActivate: [AdminAuthGuard] },
  { path: 'list', component: ComplainlistAdminComponent, canActivate: [AdminAuthGuard] },
  { path: 'report', component: ComplainreportAdminComponent, canActivate: [AdminAuthGuard] },
  { path: 'user-login', component: LoginUserComponent },
  { path: 'user-register', component: RegisterUserComponent },
  { path: 'user-home', component: HomeUserComponent, canActivate: [AuthenticatorGuard] },
  { path: 'complain-user', component: ComplainlistUserComponent, canActivate: [AuthenticatorGuard] },
  { path: 'Data-user', component: DataUserComponent  , canActivate: [AuthenticatorGuard] },
  { path: 'notification', component: NotificationlistUserComponent, canActivate: [AuthenticatorGuard]},
  { path: 'news', component: NewslistComponent, canActivate: [AuthenticatorGuard]},
  { path: 'raport-user', component: RaportUserComponent, canActivate: [AuthenticatorGuard]}

];

export function tokenGetter() {
  return localStorage.getItem('token');
}

const JWT_Module_Options: JwtModuleOptions = {
  config: {
    tokenGetter: tokenGetter
  }
};
@NgModule({
  imports: [RouterModule.forRoot(routes),
  JwtModule.forRoot(JWT_Module_Options),
    HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }