import { IOption } from "../../../shared/interfaces/ioption";
import { IVoiceResponse } from "../interfaces/ivoice-response";

export class VoiceUtils {

    public static transIVoiceResponseToIOption(data: IVoiceResponse[]): IOption[] {
        return data.map(voice => ({
          name: voice.name || '',
          code: voice.languageCodes ? voice.languageCodes[0] : '',
        }));
    }
}