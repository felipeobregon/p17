import { NextResponse } from 'next/server'

const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

// create a route that accepts text and returns a definition map

function createPrompt(text: string) {

    const prompt = `Define each Korean word. Words are separated by spaces.: \
    "${text}". \
     Use the following format: WORD=ROM. One word and definition per line.`

     return prompt
    
}

function createMap(responseText: string) {
    const lines = responseText.split('\n')
    const defMap = new Map<string, string>()

    for (let i = 0; i < lines.length; i++) {
        const [key, value] = lines[i].split('=')
        defMap.set(key, value)
    }
    return Object.fromEntries(defMap)
}

export async function POST(request: Request) {
    let text = await request.text()
    let response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: createPrompt(text),
        max_tokens: 200,
        temperature: 0,
    });

    let responseText = response.data.choices[0].text

    console.log(responseText)

    return NextResponse.json(createMap(responseText))

}