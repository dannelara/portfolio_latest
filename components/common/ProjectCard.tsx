import { cn } from '@/utils';
import { Project } from '@/utils/Types';
import Link from 'next/link';
import React from 'react';

type Props = {
    project: Project
    className?: string
};

const ProjectCard = ({ project, className }: Props) => {
    return (
        <div className={cn("cursor-pointer relative", className)}>
            <Link className='w-full text-skin-base' href={`/project/${project.id}`}>
                <span className='text-xs'>
                    {project.year.getFullYear()}/{project.year.getMonth() + 1}
                </span>
                <span className='block text-lg underline md:text-4xl'>
                    {project.name}
                </span>
            </Link>
        </div>
    );
};

export default ProjectCard;