import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {LoginComponent} from './components/login/login.component';
import { AdsComponent } from './components/admin/ads/ads.component';
import {NotificationsComponent} from "./components/notifications/notifications.component";
import {UsersComponent} from "./components/users/users.component";
import {FollowingComponent} from "./components/following/following.component";
import {AuthGuardService} from "./services/authGuard.service";
import {RegisterComponent} from "./components/register/register.component";
import {SearchComponent} from "./components/search/search.component";
import {ProfileComponent} from "./components/profile/profile.component";


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {path: 'admin', component: AdminComponent, canActivate: [AuthGuardService]},
  {
    path: 'ads',
    component: AdsComponent, canActivate: [AuthGuardService]
  },
  {
    path: 'home', component: HomeComponent, canActivate: [AuthGuardService]
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'notifications', component: NotificationsComponent, canActivate: [AuthGuardService]
  },
  {
    path: 'users', component: UsersComponent, canActivate: [AuthGuardService]
  }
  ,
  {
    path: 'followings', component: FollowingComponent, canActivate: [AuthGuardService]
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'search', component: SearchComponent
  },
  {
    path: 'profile/:id', component: ProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
