import * as TextToSpeechService from '../services/TextToSpeechService'


class TextToSpeechController {
  constructor() {
   
  }
  async getVoices(req,res) {
    return res.status(200).send(await TextToSpeechService.getVoicesModel());
  }
  async postTextToSpeech(req,res) {
    let response = await TextToSpeechService.convertTextToSpeechBytes(req.body);
    if (response.error) return res.status(response.statusCode).send(response);
    res.setHeader('Content-Type', 'application/octet-stream');
    return res.status(201).send(response);
  }
}

export default new TextToSpeechController();