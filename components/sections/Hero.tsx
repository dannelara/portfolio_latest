import React from 'react';
import Card from '../common/Card';
import Grid from '@/components/common/Grid';
import { preferedSubjects } from '@/lib/resources';

const Hero = () => {
    return (
        <section className='container py-12 md:py-24'>
            <div className='grid grid-cols-8 pb-12 lg:pb-24'>
                <div className="col-span-3">
                    <h1 className='text-4xl lg:text-9xl text-skin-base'>Hi I&apos;m Daniel</h1>
                </div>
            </div>

            <Grid className='py-0 md:py-0'>
                <div className='col-span-4 col-start-3 mb-4'>
                    <h2 className='text-xl text-skin-base'>Full-stack developer who&apos;s all about front-end magic.</h2>
                </div>
                <div className='mb-2 md:row-start-2 md:col-start-1 md:col-span-2'>
                    <span className='text-base text-skin-base'>What I&apos;m most passionated about</span>
                </div>
                <div className='md:row-start-2 md:col-start-3 md:col-span-full'>
                    <div className='grid grid-cols-1 gap-2 md:grid-cols-3'>
                        {
                            preferedSubjects.map((subject) => (
                                <Card heading={subject.name} description={subject.description} key={subject.name} />
                            ))
                        }
                    </div>
                </div>
            </Grid>
        </section >
    );
};

export default Hero;