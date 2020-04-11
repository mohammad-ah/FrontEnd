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

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    FooterComponent,
    SideBarComponent,
    HeaderComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({
      posts: postsReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
