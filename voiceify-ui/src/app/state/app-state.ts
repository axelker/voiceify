import { routerReducer } from "@ngrx/router-store";
import { VoiceReducer } from "../features/voice/state/voice.reducers";
export const AppState = {
    voice: VoiceReducer,
    router: routerReducer
}