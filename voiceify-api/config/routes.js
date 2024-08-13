import TextToSpeechController from '../src/controllers/TextToSpeechController';

export default (server) => {

  // text to speech routes
  server.get(`/voices`, TextToSpeechController.getVoices);
  server.post(`/text-to-speech`, TextToSpeechController.postTextToSpeech);
}