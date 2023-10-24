import { experimental_useFormStatus as useFormStatus } from 'react-dom'

import React from 'react';
import { cn } from '@/utils';

type Props = {
    className?: string
    text?: string,
    icon?: JSX.Element
    disabled: boolean
};

const SubmitButton = ({ className, text, icon, disabled }: Props) => {
    const { pending } = useFormStatus()
    return (
        <button
            disabled={disabled}
            className={cn(className)} type="submit" aria-disabled={pending}>
            {!text && text}
            {icon && icon}
        </button>
    );
};

export default SubmitButton;