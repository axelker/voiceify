import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { IOption } from "../../../../shared/interfaces/ioption";
import { IOptionLabel } from "../../../../shared/interfaces/ioption-label";
import { Gender } from "../../enums/gender.enums";
import { IVoiceResponse } from "../../interfaces/ivoice-response";
import { SelectButtonChangeEvent } from "primeng/selectbutton";
import { VoiceUtils } from "../../utils/voice.utils";

@Component({
  selector: "voiceify-gender-voice-choice",
  templateUrl: "./gender-voice-choice.component.html",
  styleUrls: ["./gender-voice-choice.component.scss"],
})
export class GenderVoiceChoiceComponent implements OnInit {
  @Output()
  public formReady: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();
  @Input()
  public voices: IVoiceResponse[] = [];

  public voicesFiltered: IOption[] = [];
  public form!: FormGroup;

  public genders: IOptionLabel[] = [
    { label: "MEN", value: Gender.MASCULIN },
    { label: "WOMEN", value: Gender.FEMININ },
  ];

  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.filterVoiceByGender(Gender.MASCULIN);
    this.form = this.fb.group({
      voice: [null, [Validators.required]],
      gender: [Gender.MASCULIN, [Validators.required]],
    });
    this.formReady.emit(this.form);
  }
  public onChangeGender(gender: string) {
    this.filterVoiceByGender(gender);
  }
  public filterVoiceByGender(gender: string): void {
    if (!gender) {
      return;
    }
    if (this.voices && this.voices.length === 0) {
      this.voicesFiltered = [{ name: "fr-FR-Wavenet-B", code: "fr-FR" }]; // hard coded Only for local test to not call voice api
      return;
    }
    const filteredVoices: IVoiceResponse[] = this.voices.filter((voice: IVoiceResponse) => {
      return voice.ssmlGender === gender;
    })
    this.voicesFiltered = VoiceUtils.transIVoiceResponseToIOption(filteredVoices);
  }
}
