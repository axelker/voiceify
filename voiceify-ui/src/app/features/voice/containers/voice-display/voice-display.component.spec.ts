import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoiceDisplayComponent } from './voice-display.component';
import { FormBuilder } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { AppState } from '../../../../state/app-state';
import { GenderVoiceChoiceComponent } from '../../components/gender-voice-choice/gender-voice-choice.component';
import { InputGenerateVoiceComponent } from '../../components/input-generate-voice/input-generate-voice.component';
import { PlaySongComponent } from '../../components/play-song/play-song.component';
import { VoiceModule } from '../../voice.module';
describe('VoiceDisplayComponent', () => {
  let component: VoiceDisplayComponent;
  let fixture: ComponentFixture<VoiceDisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VoiceDisplayComponent,GenderVoiceChoiceComponent,InputGenerateVoiceComponent,PlaySongComponent],
      providers: [FormBuilder],
      imports: [
        StoreModule.forRoot(AppState), 
        StoreModule,
        VoiceModule
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(VoiceDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
