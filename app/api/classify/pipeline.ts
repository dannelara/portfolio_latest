import { pipeline } from "@xenova/transformers";
declare const global: {
    PipelineSingleton?: typeof PipelineSingleton;
};

// Use the Singleton pattern to enable lazy construction of the pipeline.
// NOTE: We wrap the class in a function to prevent code duplication (see below).
const P = () => class PipelineSingleton {
    static task: string = 'question-answering';
    static model: string = 'Xenova/distilbert-base-uncased-distilled-squad';
    static instance: any = null;

    static async getInstance(progress_callback: any = null) {
        if (this.instance === null) {
            this.instance = await pipeline(this.task, this.model, { progress_callback });
        }
        return this.instance;
    }
}

let PipelineSingleton: typeof P;

if (process.env.NODE_ENV !== 'production') {
    // When running in development mode, attach the pipeline to the
    // global object so that it's preserved between hot reloads.
    // For more information, see https://vercel.com/guides/nextjs-prisma-postgres
    if (!global.PipelineSingleton) {
        global.PipelineSingleton = P() as any;
    }

    PipelineSingleton = global.PipelineSingleton as any;
} else {
    PipelineSingleton = P() as any;
}

export default PipelineSingleton as any;
