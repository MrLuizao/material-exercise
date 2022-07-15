import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ConvertionsPageComponent } from './pages/convertions-page/convertions-page.component';
import { CalculatePageComponent } from './pages/calculate-page/calculate-page.component';
import { FormPageComponent } from './pages/form-page/form-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { LoginUserGuard } from './guards/login-user.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'login', component: LoginPageComponent},
  { path: 'home', component: HomePageComponent, canActivate: [LoginUserGuard]},
  { path: 'convertions', component: ConvertionsPageComponent, canActivate: [LoginUserGuard]},
  { path: 'calculate', component: CalculatePageComponent, canActivate: [LoginUserGuard]},
  { path: 'forms', component: FormPageComponent, canActivate: [LoginUserGuard]},
  { path: 'login', component: LoginPageComponent, canActivate: [LoginUserGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
