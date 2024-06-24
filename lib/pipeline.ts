import { Pipeline, pipeline } from "@xenova/transformers";

declare const global: {
    PipelineSingleton?: PipelineSingletonBASE;
};


class PipelineSingletonBASE {
    private task: string = 'question-answering';
    private model: string = 'Xenova/distilbert-base-uncased-distilled-squad';
    private instance: Pipeline | null = null;

    constructor(){}

    async getInstance(progress_callback: any = null) {
        if (this.instance === null) {
            this.instance = await pipeline(this.task, this.model, { progress_callback });
        }
        return this.instance;
    }
}


let PipelineSingleton: PipelineSingletonBASE;


if(process.env.NODE_ENV ! === "production") {
    if(!global.PipelineSingleton) {
        global.PipelineSingleton = new PipelineSingletonBASE()
    }
    PipelineSingleton = global.PipelineSingleton;
} else {
    PipelineSingleton = new PipelineSingletonBASE()
}

export default PipelineSingleton
