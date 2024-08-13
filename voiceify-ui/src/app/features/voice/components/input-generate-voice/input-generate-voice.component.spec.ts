import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputGenerateVoiceComponent } from './input-generate-voice.component';
import { VoiceModule } from '../../voice.module';

describe('InputGenerateVoiceComponent', () => {
  let component: InputGenerateVoiceComponent;
  let fixture: ComponentFixture<InputGenerateVoiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputGenerateVoiceComponent],
      imports:[VoiceModule]
    });
    fixture = TestBed.createComponent(InputGenerateVoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
