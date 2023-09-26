import ArrowBack from '@/assets/icons/ArrowBack';
import ExternalLink from '@/assets/icons/ExternalLink';
import Chip from '@/components/common/Chip';
import Grid from '@/components/common/Grid';
import Layout from '@/components/global/Layout';
import { personalProjects, projects } from '@/lib/resources';
import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';

type Props = {
    params: { id: string }
};

export async function generateStaticParams() {
    return projects.map((p) => ({ params: { id: p.id.toString() } }))
}

const Project = ({ params }: Props) => {
    const project = projects.find((p) => p.id.toString() === params.id) || personalProjects.find((p) => p.id.toString() === params.id)

    return (
        <Layout disableHeader>
            <div className='container py-7'>
                <Link href="/">
                    <ArrowBack className='h-10 fill-skin-base' />
                </Link>
            </div>
            <div className='container min-h-[calc(100vh-5rem)]'>
                {
                    project ?
                        <div className='py-4'>
                            <h1 className='text-5xl lg:text-9xl text-skin-base mb:mb-12'>
                                {project.name}
                            </h1>
                            <Grid className='py-4 md:py-12'>
                                <div className='col-span-4 space-y-4'>
                                    <div>
                                        <span className='text-skin-base'>Techniques used:</span>
                                        <div className='grid grid-cols-3 font-light md:grid-cols-6'>
                                            {project.tags.map((tag) => (<Chip key={tag} text={tag} />))}
                                        </div>
                                    </div>

                                    {
                                        project.role && <div>
                                            <span className='text-skin-base'>Role:</span>
                                            <span className='block text-xs font-light text-skin-base md:text-base'> {project.role}</span>
                                        </div>
                                    }
                                </div>
                                <Link href={project!.href} target='_blank'
                                    className='flex items-center justify-between col-span-2 border-b-2 border-skin-base text-skin-base md:col-start-7 h-fit'
                                >
                                    Go to website
                                    <div className='inline-block rotate-180'>
                                        <ArrowBack className='h-4 fill-skin-base ' />
                                    </div>
                                </Link>
                            </Grid>

                            <Grid className='py-4 md:space-x-6'>
                                <div className={clsx("", project.images.length > 0 ? "col-span-2" : "col-span-full")}>
                                    <span className='text-xs font-light md:text-base text-skin-base'>{project.description}</span>
                                </div>
                                <div className='grid grid-cols-1 col-start-3 gap-2 col-span-full md:space-y-4'>
                                    {
                                        project.images.length > 0 && project.images.map((img, key: number) => (
                                            <div className='p-2 bg-cover border-2 border-skin-base'
                                                key={key}
                                            >
                                                <img src={img} className='w-full' alt='' />
                                            </div>
                                        ))
                                    }
                                </div>
                            </Grid>
                        </div>
                        : null
                }
            </div >
        </Layout >
    );
};

export default Project;