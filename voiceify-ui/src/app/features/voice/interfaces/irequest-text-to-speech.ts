import { IVoice } from "./ivoice";

export interface IRequestTextToSpeech {
    inputText: string;
    voice: IVoice;
}