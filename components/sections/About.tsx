import React from 'react';
import Grid from '../common/Grid';
import { work } from '@/lib/resources';

const About = () => {

    return (
        <Grid className='container min-h-[20rem]'>
            <div className='col-span-2 mb-2'>
                <span className='text-base text-skin-base'>About me</span>
            </div>
            <div className='grid-cols-2 col-start-3 gap-4 space-y-4 md:space-y-0 md:grid col-span-full'>
                <div className='flex flex-col gap-4'>
                    <span className='font-light text-skin-base'>
                        Dedicated full-stack developer with a strong passion for both front-end and back-end development.
                    </span>
                    <span className='font-light text-skin-base'>
                        Furthermore, I have a deep interest in algorithms and data structures. I have a bachelor&apos;s degree in computer science from Linnaeus University and currently work at Compileit Sweden AB.
                    </span>

                    <div className='min-h-[10rem] md:min-0 py-4 space-y-4'>
                        {
                            work.map((w) => (
                                <div key={w.name} className={"relative flex flex-col "}>
                                    <div className='flex flex-col md:items-center md:flex-row justify-between'>
                                        <span className='text-xs font-semibold text-skin-base'>{w.name}</span>
                                        <p className=''>
                                            <span className='text-xs font-light text-skin-base'>{new Date(w.from).getFullYear()}</span>
                                            <span className='text-xs font-light text-skin-base'> - {w.to ? new Date(w.to).getFullYear() : "present"}</span>
                                        </p>
                                    </div>
                                    <span className='text-xs font-light text-skin-base'>{w.description}</span>
                                </div>))
                        }
                    </div>
                </div>
                <img src="/images/profile.jpeg" alt="profile" className='w-full h-full' />
            </div>
        </Grid >
    );
};

export default About;