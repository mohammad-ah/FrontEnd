import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {HomeComponent} from './home.component';
import { AdComponent } from './ad/ad.component';

@NgModule({
  declarations: [AdComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: HomeComponent}
    ])
  ]
})
export class HomeModule { }
