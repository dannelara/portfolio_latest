import clsx from 'clsx';
import React from 'react';

type Props = {
    children: React.ReactNode | React.ReactNode[];
    className?: string;
};

const NoiseContainer = ({ children, className }: Props) => {
    return (
        <div className={clsx("relative", className)}>
            <div className='noise'></div>
            <div className='relative h-full w-full z-10'>{children}</div>
        </div>
    );
};

export default NoiseContainer;