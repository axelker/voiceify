import { RouterReducerState } from "@ngrx/router-store";
import { VoiceState } from "../../features/voice/state/interfaces/ivoice-state";

export interface IAppState {
    voice: VoiceState;
    router: RouterReducerState<any>;

}