'use server'
import PipelineSingleton from "@/lib/pipeline";

export async function getUserInfoFromQuestion(question: string) {
    try {
     
        if (!question) {
            return {
                ok: false,
                message: "Missing question parameter"
            };
        }

        const getAnswerFromContext = await PipelineSingleton.getInstance();

        const context = `
        My name is Daniel and I live in Stockholm, Sweden. 
        I am a dedicated full-stack developer with a keen interest in front-end and back-end development, as well as a deep passion for algorithms and data structures. 
        I hold a bachelor's degree in data science from Linnaeus University and am currently employed at Compileit Sweden AB.        
        My skills: React, Next, Tailwind, Material UI, Contenful, Strapi, Node,  Serverless, AWS, MySQL, MongoDB, OpenAI Models, Pinecone vector database, Vercel AI and Langchain:
        Furthermore, I have a deep interest in algorithms and data structures. I have a bachelor's degree in computer science from Linnaeus University and currently work at Compileit Sweden AB.
        Thesis: Machine learning and algorithms together with Fortnox.
        `;

        const result = await getAnswerFromContext(question, context);
        
        return {
            ok: true,
            answer: result.answer
        };

    } catch (error) {
        return {
            ok: false,
            message: "Error in getUserInfoFromQuestion",
            cause: error,
        };
    }
}