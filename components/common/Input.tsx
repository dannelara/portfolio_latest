import React from 'react';

type Props = {
    type: React.InputHTMLAttributes<HTMLInputElement>['type']
    placeholder: string
    value: string
    setValue: (str: string) => void
};

const Input = ({ type, placeholder, value, setValue }: Props) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={(e) => setValue(e.target.value)}
        />
    );
};

export default Input;