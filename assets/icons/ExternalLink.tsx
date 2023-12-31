import clsx from 'clsx';
import React from 'react';

type Props = {
    className?: string
};

const ExternalLink = ({ className }: Props) => {
    return (
        <svg className={clsx(className)} xmlns="http://www.w3.org/2000/svg" width="20" height="20.092"><path className={clsx(className)} d="m12 0 2.561 2.537-6.975 6.976 2.828 2.828 6.988-6.988L20 7.927 19.998 0H12z" /><path d="M9 4.092v-2H0v18h18v-9h-2v7H2v-14h7z" /></svg>
    );
};

export default ExternalLink;