import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

const routes: Routes = [

  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./features/home/home.module').then(
        (m) => m.HomeModule
    ),
  },
  {
    path: 'voice',
    loadChildren: () =>
      import('./features/voice/voice.module').then(
        (m) => m.VoiceModule
      ),
  },
  { 
    path: '**',
    component: NotFoundComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
