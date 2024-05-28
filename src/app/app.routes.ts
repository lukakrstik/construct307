import { Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {AdminDashboardComponent} from "./admin-dashboard/admin-dashboard.component";
import {HomeComponent} from "./home/home.component";
import {ProjectsComponent} from "./projects/projects.component";
import {AboutusComponent} from "./aboutus/aboutus.component";
import {ProjectDetailComponent} from "./project-detail/project-detail.component";

export const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: "full"},
  {path: 'ap', component: LoginComponent},
  {path: 'apdash', component: AdminDashboardComponent},
  {path: 'home', component: HomeComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'about-us', component: AboutusComponent},
  {path: 'project/:id', component: ProjectDetailComponent}
];
