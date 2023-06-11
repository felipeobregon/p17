import { NextResponse } from 'next/server'
 
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);


export async function GET() {
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: "Translate 저는 to english",
        max_tokens: 7,
        temperature: 0,
      });
      
    const text = response.data.choices[0].text

  return NextResponse.json(text)
}