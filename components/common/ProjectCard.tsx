import ArrowBack from '@/assets/icons/ArrowBack';
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
        <div className={cn("relative border-[.1px] border-skin-gray-shaded h-40 p-4 flex flex-col ", className)}>
            {project.locked && <div className='absolute top-0 left-0 w-full h-full z-50 backdrop-blur-sm flex flex-col items-center justify-center'>
                <span className='text-skin-base text-xs'>This project is locked</span>
                <span className='text-skin-base text-xs'>Contact me to unlock</span>
            </div>}
            <span className='block text-2xl md:text-lg'>
                {project.name}
            </span>
            <span className='text-xs'>{project.descriptionShort}</span>
            <Link
                hidden={project.locked}
                href={
                    project.locked ?
                        '#'
                        :
                        `/project/${project.id}`
                }
                className='text-skin-base text-xs font-light md:col-start-7 h-fit ml-auto space-x-4 mt-auto flex items-center'
            >
                <span>Go to project</span>
                <div className='inline-block rotate-180'>
                    <ArrowBack className='h-4 fill-skin-base ' />
                </div>
            </Link>
        </div>
    );
};

export default ProjectCard;