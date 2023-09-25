import clsx from 'clsx';
import React from 'react';

type Props = {
    children: React.ReactNode | React.ReactNode[]
    className?: string
};

const Grid = ({ children, className }: Props) => {
    return (
        <div className={clsx("space-y-4 md:space-y-0 md:grid grid-cols-8 py-6 md:py-24", className)}>
            {children}
        </div>
    );
};

export default Grid;