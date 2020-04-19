import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SideBarComponent } from './shared/side-bar/side-bar.component';
import { HeaderComponent } from './shared/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { postsReducer } from './store/reducers/post.reducer';
import { StoreModule} from '@ngrx/store';
import {HttpClientModule} from '@angular/common/http';
import { AdminComponent } from './components/admin/admin.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import { AdsComponent } from './components/admin/ads/ads.component';
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatMenuModule} from "@angular/material/menu";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import { HeaderAdminComponent } from './components/admin/header-admin/header-admin.component';
import { UnhealthyComponent } from './components/admin/unhealthy/unhealthy.component';
import { FilteredComponent } from './components/admin/filtered/filtered.component';
import { ActivationsComponent } from './components/admin/activations/activations.component';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {NotificationsComponent} from "./components/notifications/notifications.component";
import { AdComponent } from './components/home/ad/ad.component';
import { UsersComponent } from './components/users/users.component';
import { FollowingComponent } from './components/following/following.component';
import { RegisterComponent } from './components/register/register.component';
import { SearchComponent } from './components/search/search.component';
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    FooterComponent,
    SideBarComponent,
    HeaderComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    AdminComponent,
    AdsComponent,
    HeaderAdminComponent,
    UnhealthyComponent,
    FilteredComponent,
    NotificationsComponent,
    ActivationsComponent,
    AdComponent,
    UsersComponent,
    FollowingComponent,
    RegisterComponent,
    SearchComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({
      posts: postsReducer
    }),
    MatToolbarModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatSidenavModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
