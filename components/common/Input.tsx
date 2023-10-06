import { cn } from '@/utils';
import React from 'react';


type Props = React.InputHTMLAttributes<HTMLInputElement> & {
    value?: string
    setValue?: (str: string) => void
};

const Input = (props: Props) => {
    return (
        <input
            {...props}
        />
    );
};

export default Input;