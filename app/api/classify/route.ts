import { NextResponse } from 'next/server'
import PipelineSingleton from './pipeline';

export async function GET(request: any) {
  try {
    const text = request.nextUrl.searchParams.get('text');

    if (!text) {
        return NextResponse.json({
            error: 'Missing text parameter',
        }, { status: 400 });
    }
    // Get the classification pipeline. When called for the first time,
    // this will load the pipeline and cache it for future use.
    const getAnswerFromContext = await PipelineSingleton.getInstance();

    const context = 'My name is Sarah and I live in London. I am a teacher and I love to travel.';

    // Actually perform the classification
    const result = await getAnswerFromContext(text,context);

    return NextResponse.json(result, {
        headers: {
            'Cache-Control': 's-maxage=1, stale-while-revalidate',
            "content-type": "application/json",
        }
    });
  } catch (error) {
    console.log(error);
  }
}