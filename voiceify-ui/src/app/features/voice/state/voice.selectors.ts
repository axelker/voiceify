import { createFeatureSelector, createSelector } from "@ngrx/store";
import { VoiceState } from "./interfaces/ivoice-state";

// Sélecteur pour obtenir la state feature voice
export const selectVoiceState = createFeatureSelector<VoiceState>('voice');

// Sélecteur pour obtenir la propriété 'link' 
export const selectLink = createSelector(
    selectVoiceState,
    (state: VoiceState) => state.link
);
// Sélecteur pour obtenir la propriété 'voices' 
export const selectVoices = createSelector(
    selectVoiceState,
    (state: VoiceState) => state.voices
);