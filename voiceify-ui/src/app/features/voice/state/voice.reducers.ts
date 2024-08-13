import { createReducer, on } from "@ngrx/store";
import { VoiceState } from "./interfaces/ivoice-state";
import { generateAudioLink, generateAudioLinkFailed, generateAudioLinkSucces, getVoices, getVoicesFailed, getVoicesSucces, initVoiceState } from "./voice.actions";

export const initialVoiceState: VoiceState =  {
    voices: [],
    error: null,
    message: null,
    loading: false,
}

export const VoiceReducer = createReducer(
    initialVoiceState,
    on(initVoiceState,() => (initialVoiceState)),
    on(getVoices,(state: VoiceState,action) => ({
        ...state,
        loading: true,
    })),
    on(getVoicesSucces,(state: VoiceState,action) => ({
        ...state,
        voices:action.voices,
        error:null,
        loading: false,
    })),
    on(getVoicesFailed,(state: VoiceState,action) => ({
        ...state,
        error:action.error,
        loading: false,
    })),
    on(generateAudioLink,(state: VoiceState,action) => ({
        ...state,
        loading: true,
    })),
    on(generateAudioLinkSucces,(state: VoiceState,action) => ({
        ...state,
        link:action.link,
        error:null,
        loading: false,
    })),
    on(generateAudioLinkFailed,(state: VoiceState,action) => ({
        ...state,
        error:action.error,
        loading: false,
    })),
    
)