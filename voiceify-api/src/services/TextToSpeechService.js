require('dotenv').config();
const textToSpeech = require('@google-cloud/text-to-speech');
const fs = require('fs')
const util = require('util')
const client = new textToSpeech.TextToSpeechClient();

//const voiceest = ["fr-FR-Wavenet-B","fr-FR-Wavenet-D","fr-FR-Polyglot-1"]
exports.convertTextToSpeechBytes = async function convertTextToSpeechBytes(req) {
    try {
        const request = {
            input: { text: req.inputText },
            voice: req.voice,
            audioConfig: { audioEncoding: 'MP3' },
        };
        const [response] = await client.synthesizeSpeech(request);
        return Promise.resolve(response.audioContent);
        // If we want to write in taget output files
        /**console.log(response.audioContent)
        const writeFile = util.promisify(fs.writeFile);
        await writeFile("output/test", response.audioContent, 'binary');
        Promise.resolve("output/test.mp3"); **/
    } catch (error) {
        return Promise.reject(error);
    }
}
exports.getVoicesModel = async function getVoicesModel() {
    try {
        const [voices] = await client.listVoices({});
        return Promise.resolve(voices.voices);
    } catch (error) {
        return Promise.reject(error);
    }

}

//getVoicesModel();
/**convertTextToSpeechBytes(
    "Bonjour je suis axel enchanté",
    {languageCode: 'fr-FR', ssmlGender: 'MASCULIN',name:'fr-FR-Wavenet-B'}
).then((value) => console.log(value)); **/


