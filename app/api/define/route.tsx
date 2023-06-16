import { NextResponse } from 'next/server'

const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);


function createPrompt(text: string) {

    const prompt = `Define "${text} in English."`
    return prompt

}


export async function POST(request: Request) {
    let text = await request.text()
    let response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: createPrompt(text),
        max_tokens: 200,
        temperature: 0,
    });

    let definition = response.data.choices[0].text
    
    return NextResponse.json({definition})

}