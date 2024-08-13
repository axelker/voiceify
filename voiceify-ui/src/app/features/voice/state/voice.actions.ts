import { createAction, props } from "@ngrx/store";
import { VoiceActionTypes } from "./enums/actions.enum";
import { IRequestTextToSpeech } from "../interfaces/irequest-text-to-speech";
import { IVoiceResponse } from "../interfaces/ivoice-response";

export const initVoiceState = createAction(
    VoiceActionTypes.INIT_VOICE_STATE
);

export const getVoices = createAction(
    VoiceActionTypes.GET_VOICES
);

export const getVoicesSucces = createAction(
    VoiceActionTypes.GET_VOICES_SUCCES,
    props<{voices: IVoiceResponse[]}>()
);
export const getVoicesFailed = createAction(
    VoiceActionTypes.GET_VOICES_FAILED,
    props<{error: string}>()

);

export const generateAudioLink = createAction(
    VoiceActionTypes.GENERATE_AUDIO_LINK,
    props<{request:IRequestTextToSpeech}>()

);

export const generateAudioLinkSucces = createAction(
    VoiceActionTypes.GENERATE_AUDIO_LINK_SUCCES,
    props<{link: string}>()

);
export const generateAudioLinkFailed = createAction(
    VoiceActionTypes.GENERATE_AUDIO_LINK_FAILED,
    props<{error: string}>()
);