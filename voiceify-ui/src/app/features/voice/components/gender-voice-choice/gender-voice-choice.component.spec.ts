import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenderVoiceChoiceComponent } from './gender-voice-choice.component';
import { VoiceModule } from '../../voice.module';

describe('GenderVoiceChoiceComponent', () => {
  let component: GenderVoiceChoiceComponent;
  let fixture: ComponentFixture<GenderVoiceChoiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GenderVoiceChoiceComponent],
      imports:[VoiceModule]

    });
    fixture = TestBed.createComponent(GenderVoiceChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
