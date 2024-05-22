import { Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {AdminDashboardComponent} from "./admin-dashboard/admin-dashboard.component";
import {HomeComponent} from "./home/home.component";

export const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: "full"},
  {path: 'ap', component: LoginComponent},
  {path: 'apdash', component: AdminDashboardComponent},
  {path: 'home', component: HomeComponent}
];
