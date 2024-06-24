"use server";

import { Message, MessageAuthor } from "@/utils/Types";
import { v4 as uuidv4 } from "uuid";
import { pipeline, env } from "@xenova/transformers";

env.cacheDir = "../models";

export async function getUserInfoFromQuestion(message: string) {
  try {
    if (!message) throw new Error("No message provided in form data.");

    const generator = await pipeline(
      "text-generation",
      "Xenova/Qwen1.5-0.5B-Chat"
    );

    const messages = [
      {
        role: "system",
        content: "You're an AI assistant tasked with offering help.",
      },
      {
        role: "user",
        content: String(message),
      },
    ];

    const prompt = generator.tokenizer.apply_chat_template(messages, {
      tokenize: false,
      add_generation_prompt: true,
    });

    // @ts-ignore
    const res = await generator(prompt, {
      max_new_tokens: 500,
      temperature: 0.1,
      do_sample: true,
      top_k: 50,
    });

    // @ts-ignore
    const result = res.pop();

    console.log(result);
    return {
      from: MessageAuthor.AI,
      message: result
        ? // @ts-ignore
          getOnlyAnswer(result.generated_text)
        : "No response from AI.",
      id: uuidv4(),
    } as Message;
  } catch (error) {
    // Handle error
    return {
      from: MessageAuthor.AI,
      message: "No response from AI.",
      id: uuidv4(),
    } as Message;
  }
}
const getOnlyAnswer = (res: string) => {
  return res.split("assistant\n").pop() || "No response from AI.";
};

// try {

//     if (!question) {
//         return {
//             ok: false,
//             message: "Missing question parameter"
//         };
//     }

//     const getAnswerFromContext = await PipelineSingleton.getInstance();

//     const context = `
//     My name is Daniel and I live in Stockholm, Sweden.
//     I am a dedicated full-stack developer with a keen interest in front-end and back-end development, as well as a deep passion for algorithms and data structures.
//     I hold a bachelor's degree in data science from Linnaeus University and am currently employed at Compileit Sweden AB.
//     My skills: React, Next, Tailwind, Material UI, Contenful, Strapi, Node,  Serverless, AWS, MySQL, MongoDB, OpenAI Models, Pinecone vector database, Vercel AI and Langchain:
//     Furthermore, I have a deep interest in algorithms and data structures. I have a bachelor's degree in computer science from Linnaeus University and currently work at Compileit Sweden AB.
//     Thesis: Machine learning and algorithms together with Fortnox.
//     `;

//     const result = await getAnswerFromContext(question, context);

//     return {
//         ok: true,
//         answer: result.answer
//     };

// } catch (error) {
//     return {
//         ok: false,
//         message: "Error in getUserInfoFromQuestion",
//         cause: error,
//     };
// }
