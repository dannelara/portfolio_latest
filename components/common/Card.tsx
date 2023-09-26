import { cn } from '@/utils';
import React from 'react';

type Props = {
    className?: string
    heading: string,
    description?: string,
};

const Card = ({ className, heading, description }: Props) => {

    return (
        <div className={cn("w-full flex flex-col h-full border-[.1px] border-skin-gray-shaded", className)}>
            <div className='flex-1 p-4 space-y-4'>
                <span className="block text-2xl md:text-lg text-skin-base text-start">
                    {heading}
                </span>
                <span className='block text-sm font-light text-skin-base text-start'>
                    {description}
                </span>
            </div>
        </div>
    );
};

export default Card;