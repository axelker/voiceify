import { Component, OnInit } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { IVoiceResponse } from '../../interfaces/ivoice-response';
import { VoiceState } from '../../state/interfaces/ivoice-state';
import { IAppState } from '../../../../state/interfaces/iapp-state';
import { Store } from '@ngrx/store';
import { selectVoiceState } from '../../state/voice.selectors';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IRequestTextToSpeech } from '../../interfaces/irequest-text-to-speech';
import { generateAudioLink, getVoices } from '../../state/voice.actions';

@Component({
  selector: 'voiceify-voice-display',
  templateUrl: './voice-display.component.html',
  styleUrls: ['./voice-display.component.scss']
})
export class VoiceDisplayComponent implements OnInit {
  public isloading= false;
  voiceForm!: FormGroup;
  voiceState$: Observable<VoiceState> = EMPTY;
  voices$: Observable<IVoiceResponse[]> = EMPTY;
  textToSpeechUrlFile$: Observable<string> = EMPTY;

  public VOICE_CONTROL_CHILD: string = "voiceChoice";
  public INPUT_CONTROL_CHILD: string = "inputTextToVoice";



  constructor(private store: Store<IAppState>,private fb: FormBuilder) {
    this.voiceState$ = this.store.select(selectVoiceState);
  }
  ngOnInit(): void {
    this.voiceForm = this.fb.group({})
    this.store.dispatch(getVoices());
  }
  addChildForm(name: string, group: FormGroup) {
    this.voiceForm.addControl(name, group);
  }

  public generateAudioLink(): void {
    const inputTextForm = this.voiceForm.get(this.INPUT_CONTROL_CHILD)?.value;
    const voiceChoiceForm = this.voiceForm.get(this.VOICE_CONTROL_CHILD)?.value;
    const requestGenerateVoice: IRequestTextToSpeech = {
      inputText: inputTextForm.textToConvert,
      voice: {
        languageCode: voiceChoiceForm.voice?.code,
        ssmlGender:voiceChoiceForm.gender,
        name:voiceChoiceForm.voice?.name,
      }
    };
    this.store.dispatch(generateAudioLink({request: requestGenerateVoice}))
  }
}
