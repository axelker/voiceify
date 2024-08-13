import { Injectable, inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { VoiceState } from "./interfaces/ivoice-state";
import { Store } from "@ngrx/store";
import { VoiceService } from "../services/voice.service";
import { generateAudioLink, generateAudioLinkFailed, generateAudioLinkSucces, getVoices, getVoicesFailed, getVoicesSucces } from "./voice.actions";
import { tap, map, mergeMap, of, catchError, switchMap } from "rxjs";
import { VoiceUtils } from "../utils/voice.utils";

@Injectable()
export class VoiceEffects {
    private actions: Actions = inject(Actions);
    constructor(
        private store: Store<VoiceState>,
        private service: VoiceService
    ) {}
    
    public getVoices$ = createEffect(() =>
    this.actions.pipe(
      ofType(getVoices),
      switchMap(() =>
        this.service.getAllVoices().pipe(
          map(voices => getVoicesSucces({voices})),
          catchError(error => {
            console.error('Error in finding voices. Message: ' + error);
            return of(getVoicesFailed({ error: error }));
          })
        )
      )
    )
  );

  public generateAudioLink$ = createEffect(() =>
    this.actions.pipe(
      ofType(generateAudioLink),
      switchMap((action) =>
        this.service.getAudioBlobUrlByInputText(action.request).pipe(
          map(link => generateAudioLinkSucces({link: link })),
          catchError(error => {
            console.error('Error in generate audio link by input text. Message: ' + error);
            return of(generateAudioLinkFailed({ error: error }));
          })
        )
      )
    )
  );
}