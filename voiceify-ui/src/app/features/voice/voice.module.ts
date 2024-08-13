import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VoiceRoutingModule } from './voice-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { PlaySongComponent } from './components/play-song/play-song.component';
import { ButtonModule } from 'primeng/button';
import { VoiceDisplayComponent } from './containers/voice-display/voice-display.component';
import { CardModule } from 'primeng/card';
import { InputGenerateVoiceComponent } from './components/input-generate-voice/input-generate-voice.component';
import { DropdownModule } from 'primeng/dropdown';
import {ReactiveFormsModule} from "@angular/forms"
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { SelectButtonModule } from 'primeng/selectbutton';
import { FormsModule } from '@angular/forms';
import { GenderVoiceChoiceComponent } from './components/gender-voice-choice/gender-voice-choice.component';


@NgModule({
  declarations: [
    PlaySongComponent,
    VoiceDisplayComponent,
    InputGenerateVoiceComponent,
    GenderVoiceChoiceComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    DropdownModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    InputTextareaModule,
    SelectButtonModule,
    VoiceRoutingModule,
    SharedModule
  ]
})
export class VoiceModule { }
