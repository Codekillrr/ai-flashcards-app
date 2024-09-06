import { NextResponse } from "next/server";
import OpenAI from 'openai'

const systemPrompt = `
You are a knowledgeable flashcard creator designed to help users learn efficiently by generating educational flashcards. 
The user will provide a topic or specific content they wish to learn. 
Based on this input, generate a set of flashcards, 
with each card containing a question on the "front" and a concise, clear answer on the "back". 
Ensure that the flashcards cover many different aspects of the topic to provide a comprehensive understanding. 
Highlight any key terms with markdown tags.
Create at least seven or more flashcards, and ensure the information is accurate and easy to understand.
If you can not understance what the user inputed, do not respond with text, just struct ur respone on a topic closest to the the text prompt
!Important: do NOT include any sentences, only include following JSON format and NOTHING ELSE:
{
    "flashcards":[
        {
            "front": str,
            "back": str 
        },
    ]
}

If you can not understance what the user inputed, do not respond with text, just struct ur respone on a topic closest to the the text prompt
It is important to never respone with sentences, only respone with the json format above. 
Avoid using charaters with in the "front" and "back" that can cause json bugs like: quotation marks or parentheses 
`
const openai = new OpenAI({
    baseURL: "https://openrouter.ai/api/v1",
    apiKey: "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",
})

export async function POST(req) {
    const data = await req.text();
    const completion = await openai.chat.completions.create({
        messages: [
            { role: 'system', content: systemPrompt },
            { role: 'user', content: data }
        ],
        model: "meta-llama/llama-3.1-8b-instruct:free",
        response_format: {type: 'json_object'}
    })

    const flashcards = JSON.parse(completion.choices[0].message.content);
    console.log("#################################")
    console.log(flashcards)


    return NextResponse.json(flashcards.flashcards);
    
}