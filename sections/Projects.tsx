import React from 'react';
import ProjectCard from '../components/common/ProjectCard';
import Grid from '../components/common/Grid';
import { personalProjects, projects } from '@/lib/resources';


const Projects = () => {
    return (
        <Grid className='container'>
            <div className='col-span-2 mb-2'>
                <span className='text-base text-skin-base font-medium'>Projects</span>
            </div>
            <div className='grid grid-cols-2 md:col-start-3 col-span-full min-h-[20rem]'>
                <div className='space-y-4'>
                    <span className='text-skin-base'>Professional work:</span>
                    {projects.map((p) => (<ProjectCard project={p} key={p.name} />))}
                </div>
                <div className='space-y-4'>
                    <span className='text-skin-base'>Personal projects:</span>
                    {personalProjects.map((p) => (<ProjectCard project={p} key={p.name} />))}
                </div>
            </div>
        </Grid>
    );
};

export default Projects;