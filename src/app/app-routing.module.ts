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


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {path: 'admin', component: AdminComponent},
  {
    path: 'ads',
    component: AdsComponent
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'notifications', component: NotificationsComponent
  },
  {
    path: 'users', component: UsersComponent
  }
  ,
  {
    path: 'followings', component: FollowingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
