export interface IVoiceResponse {
    languageCodes?: string[];

    /** Voice name */
    name?: string;

    /** Voice ssmlGender */
    ssmlGender?: string;

    /** Voice naturalSampleRateHertz */
    naturalSampleRateHertz?: number
}