import React from 'react';
import Grid from '../common/Grid';
import { work } from '@/lib/resources';
import { Work } from '@/utils/Types';

const About = () => {
    const dividedWork = work.sort((a, b) => b.year.getTime() - a.year.getTime())
        .reduce((acc, curr, index: number) => {
            const col = index % 2 === 0 ? 1 : 2;
            acc[col].push(curr);

            return acc;
        }, { 1: [], 2: [] } as { 1: Work[], 2: Work[] });

    return (
        <Grid className='container min-h-[20rem]'>
            <div className='col-span-2 mb-2'>
                <span className='text-base text-skin-base'>About me</span>
            </div>
            <div className='grid-cols-2 col-start-3 gap-4 space-y-4 md:space-y-0 md:grid col-span-full'>
                <div className='flex flex-col gap-4'>
                    <span className='font-light text-skin-base'>
                        Committed full-stack developer with a strong inclination towards both front-end and back-end development.
                    </span>
                    <span className='font-light text-skin-base'>
                        Additionally, I possess a profound enthusiasm for algorithms and data structures. I earned my bachelor&apos;s degree in data science from Linnaeus University and presently work at Compileit Sweden AB.
                    </span>

                    <div className='flex justify-between flex-1 min-h-[10rem] md:min-0 py-4'>
                        <div className='flex flex-col justify-between flex-1 gap-4 justify-be'>
                            {
                                dividedWork[1].map((w) => (
                                    <div key={w.name} className="relative flex flex-col items-center after:absolute after:content-[''] after:w-2 after:-right-[0.25rem] after:aspect-square after:bg-skin-base after:top-1/3 after:rounded-full" >
                                        <span className='text-xs font-semibold text-skin-base'>{w.name}</span>
                                        <span className='text-xs font-light text-skin-base'>{w.description}</span>
                                    </div>
                                ))
                            }
                            <div className="" >
                            </div>
                        </div>
                        <div className='w-[.5px] bg-skin-base'></div>
                        <div className='flex flex-col justify-around flex-1'>
                            {
                                dividedWork[2].map((w) => (
                                    <div key={w.name} className="relative flex flex-col items-center before:absolute before:content-[''] before:w-2 before:-left-[0.25rem]  before:aspect-square before:bg-skin-base before:top-1/3 before:rounded-full" >
                                        <span className='text-xs font-semibold text-skin-base'>{w.name}</span>
                                        <span className='text-xs font-light text-skin-base'>{w.description}</span>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <img src="/images/profile.jpeg" alt="profile" className='w-full h-full' />
            </div>
        </Grid >
    );
};

export default About;