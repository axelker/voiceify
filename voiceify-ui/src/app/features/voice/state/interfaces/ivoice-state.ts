import { IVoiceResponse } from "../../interfaces/ivoice-response";

export interface VoiceState {
    voices: IVoiceResponse[],
    link?: string,
    error: string | null,
    message: string | null,
    loading: boolean,
}