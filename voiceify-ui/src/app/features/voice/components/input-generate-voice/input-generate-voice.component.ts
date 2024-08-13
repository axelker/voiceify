import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'voiceify-input-generate-voice',
  templateUrl: './input-generate-voice.component.html',
  styleUrls: ['./input-generate-voice.component.scss']
})
export class InputGenerateVoiceComponent implements OnInit {
  @Output()
  public formReady: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

  public form!: FormGroup;
  constructor(private readonly fb: FormBuilder) {

  }
  ngOnInit(): void {
    this.form = this.fb.group({
      textToConvert : ["",[Validators.required]],
    })
    this.formReady.emit(this.form);
    console.log(this.form)

  }
}
