"use client";


import React from 'react';
import { cn } from '@/utils';

type Props = {
    className?: string
    text?: string,
    icon?: JSX.Element
    disabled: boolean
};

const SubmitButton = ({ className, text, icon, disabled }: Props) => {
    // const { pending } = experimental_useFormStatus()
    return (
        <button
            disabled={disabled}
            className={cn(className)} type="submit" >
            {!text && text}
            {icon && icon}
        </button>
    );
};

export default SubmitButton;