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

Only return the flashcards in the following JSON format and nothing else:
{
    "flashcards":[
        {
            "front": str,
            "back": str 
        },
    ]
}
`
const openai = new OpenAI({
    baseURL: "https://openrouter.ai/api/v1",
    apiKey: "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",
})

export async function POST(req) {
    console.log("hello this the backend!")
    const openai = OpenAI();
    const data = await req.text();
    const completion = await openai.chat.completion.create({
        messages: [
            { role: 'system', content: systemPrompt },
            { role: 'user', content: data }
        ],
        model: "meta-llama/llama-3.1-8b-instruct:free",
        response_format: {type: 'json_object'}
    })

    console.log(completion.choices[0].message.content);

    const flashcards = JSON.parse(completion.choices[0].message.content);

    return NextResponse.json(flashcards.flashcards);
}