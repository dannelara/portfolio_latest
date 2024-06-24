import clsx from 'clsx';
import React from 'react';

type Props = {
    className?: string
};
const LightMode = ({ className }: Props) => {
    return (
        <svg className={clsx(className)} xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
            <path d="M18.8858 14.4897C18.8858 16.9099 16.9259 18.8707 14.5097 18.8707C12.0935 18.8707 10.1336 16.9099 10.1336 14.4897C10.1336 12.0695 12.0935 10.1087 14.5097 10.1087C16.9259 10.1087 18.8858 12.0695 18.8858 14.4897Z" stroke="white" strokeWidth="1.4" strokeMiterlimit="10" />
            <path d="M15.5678 7.68672H13.4509L13.0278 4H15.9915L15.5678 7.68672Z" fill="white" />
            <path d="M20.0791 10.4488L18.5872 8.9453L20.9033 6.04692L22.9911 8.15253L20.0791 10.4488Z" fill="white" />
            <path d="M21.2979 15.5992L21.3136 13.4803L25 13.0833L24.9779 16.0499L21.2979 15.5992Z" fill="white" />
            <path d="M18.5056 20.0938L20.019 18.6118L22.8969 20.951L20.7782 23.0257L18.5056 20.0938Z" fill="white" />
            <path d="M13.3514 21.276L15.4682 21.3076L15.8377 25L12.874 24.9564L13.3514 21.276Z" fill="white" />
            <path d="M8.88193 18.4483L10.3512 19.9739L7.99346 22.8376L5.93652 20.7017L8.88193 18.4483Z" fill="white" />
            <path d="M7.73804 13.2809L7.69201 15.3991L4 15.7418L4.06495 12.7759L7.73804 13.2809Z" fill="white" />
            <path d="M10.5965 8.8279L9.06166 10.2872L6.21777 7.90574L8.36677 5.86261L10.5965 8.8279Z" fill="white" />
        </svg>
    );
};

export default LightMode;