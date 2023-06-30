// This route needs to give you all the information on a text at once
// It should provide the list of definitions, not just in English but also in the native language.
// It should also provide the contextual definition.
// Its basically gonna be a huge data dump.


import { NextResponse } from 'next/server'

const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const exampleResponse = `{
    "El": {
        "Part of Speech": "Article",
        "Definition": "The; used to specify or mark a particular one as the subject."
    },
    "hombre": {
        "Part of Speech": "Noun",
        "Definition": "Man; an adult human male."
    },
    "comió": {
        "Part of Speech": "Verb",
        "Definition": "He/she/it ate; past tense of 'comer' meaning to consume food."
    },
    "la": {
        "Part of Speech": "Article",
        "Definition": "The; used to specify or mark a particular one as the subject."
    },
    "manzana": {
        "Part of Speech": "Noun",
        "Definition": "Apple; the round fruit of a tree of the rose family, which typically has thin green or red skin and crisp flesh."
    }
}`


export async function POST(request: Request) {
    try {
        let text = await request.text();

        let response = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [
                { "role": "system", "content": "Provide definition of each word. Format as JSON."},
                { "role": "user", "content": "El hombre comio la manzana." },
                { "role": "assistant", "content": exampleResponse },
                { "role": "user", "content": text }
            ],
            max_tokens: 200,
            temperature: 0,
        });

        
        let res = response.data.choices[0].message.content;
        console.log(res)

        try {
            let parsedRes = JSON.parse(res);
            console.log("\x1b[33m JSON Parse successful")
            return NextResponse.json(parsedRes);
        } catch (parseError) {
            console.error("\x1b[31m JSON Parsing Error:", parseError);

            return NextResponse.json({ def: 'none'})
        }

    } catch (error) {
        // Handle the error


        
        console.log("START ERROR " + new Date())
        console.error("An error occurred:", error);
        console.log("END ERROR " + new Date())
        return NextResponse.error()
    }
}
