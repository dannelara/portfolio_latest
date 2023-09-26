import { cn } from '@/utils';
import React from 'react';

type Props = {
    children: React.ReactNode | React.ReactNode[];
    className?: string;
};

const NoiseContainer = ({ children, className }: Props) => {
    return (
        <div className={cn("relative", className)}>
            <div className='noise'></div>
            <div className='relative z-10 w-full h-full'>{children}</div>
        </div>
    );
};

export default NoiseContainer;