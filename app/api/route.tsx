import { NextResponse } from 'next/server'

const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

// create a route that accepts text and returns a definition map

function createPrompt(text: string) {

    const prompt = `Define each word of the following: \
    "${text}". \
     Use the following format: WORD=DEF. One word and def per line`

     return prompt
    
}

function createMap(responseText: string) {
    const lines = responseText.split('\n\n')
    const defMap = new Map<string, string>()

    for (let i = 0; i < lines.length; i++) {
        const [key, value] = lines[i].split('=')
        defMap.set(key, value)
    }
    return Object.fromEntries(defMap)
}

export async function POST(request: Request) {
    let response;
    try {
        response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: createPrompt("The quick fox jumped over the cat"),
            max_tokens: 200,
            temperature: 0,
        });
    } catch (e) {
        console.error(e)
    }

    //process WORD=DEF into an object
    const responseText = response.data.choices[0].text

    console.log(responseText)


    return NextResponse.json(createMap(responseText))
}