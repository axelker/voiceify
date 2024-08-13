import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VoiceDisplayComponent } from './containers/voice-display/voice-display.component';

const routes: Routes = [
  {
    path: '',
    component: VoiceDisplayComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VoiceRoutingModule { }
