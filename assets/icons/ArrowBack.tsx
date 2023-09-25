import clsx from 'clsx';
import React from 'react';

type Props = {
    className?: string
};

const ArrowBack = ({ className }: Props) => {
    return (
        <svg className={clsx(className)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path className={clsx(className)} d="M32 15H3.41l8.29-8.29-1.41-1.42-10 10a1 1 0 0 0 0 1.41l10 10 1.41-1.41L3.41 17H32z" data-name="4-Arrow Left" /></svg>
    );
};

export default ArrowBack;