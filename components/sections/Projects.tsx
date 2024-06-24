import React from 'react';
import ProjectCard from '../common/ProjectCard';
import Grid from '../common/Grid';
import { personalProjects, projects } from '@/lib/resources';


const Projects = () => {
    return (
        <Grid className='container'>
            <div className='col-span-2 mb-2'>
                <span className='text-base text-skin-base'>Projects</span>
            </div>
            <div className='space-y-4 md:space-y-0 md:grid grid-cols-2 md:col-start-3 col-span-full gap-4'>
                <div className='space-y-4'>
                    <span className='text-base md:text-xl text-skin-base'>Personal projects:</span>
                    {personalProjects.map((p) => (<ProjectCard project={p} key={p.name} />))}
                </div>
                <div className='space-y-4'>
                    <span className='text-base md:text-xl text-skin-base'>Professional work:</span>
                    {projects.map((p) => (<ProjectCard project={p} key={p.name} />))}
                </div>
            </div>
        </Grid>
    );
};


export default Projects;