import { ChatCompletionRequestMessageRoleEnum,Configuration, OpenAIApi } from "openai-edge";
import { OpenAIStream, StreamingTextResponse } from "ai";
import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge'; // Provide optimal infrastructure for our API route (https://edge-runtime.vercel.app/)

const config = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
})
const openai = new OpenAIApi(config);


// POST localhost:3000/api/chat
export async function POST(request) {
    const { messages, roleprompt } = await request.json(); // { messages: [] }

    // messages [{ user and he says "hello there" }]
    console.log(messages);
    console.log(roleprompt);


    // GPT-4 system message
    // system message tells GPT-4 how to act
    // it should always be at the front of your array

    // createChatCompletion (get response from GPT-4)
    const response = await openai.createChatCompletion({
        model: 'gpt-4-1106-preview',
        stream: true,
        messages: [
            // { role: "system", content: "你现在是一个特别牛的关于比特币的分析师，请对任何这个行业的问题提出你的观点，但其他类型的事情，你就不要回答了。" },
            { role: "system", content: roleprompt },
            ...messages
        ]
    })
    console.log(response);

    // create a stream of data from OpenAI (stream data to the frontend)
    const stream = await OpenAIStream(response);

    // send the stream as a response to our client / frontend
    return new StreamingTextResponse(stream);
}