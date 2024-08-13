import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import {TabMenuModule} from 'primeng/tabmenu';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ButtonModule } from 'primeng/button';
import { SpinnerComponent } from './components/spinner/spinner.component';


@NgModule({
  declarations: [
    NavBarComponent,
    NotFoundComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    TabMenuModule,
    ProgressSpinnerModule,
    ButtonModule
  ],
  exports: [NavBarComponent,SpinnerComponent,NotFoundComponent]
})
export class SharedModule { }
