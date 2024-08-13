require('dotenv').config();
const {Configuration,OpenAIApi} = require('openai');


const configuation = new Configuration({
    apiKey: process.env.OPEN_AI_KEY,
});
const openai = new OpenAIApi(configuation);