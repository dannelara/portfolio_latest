import React from 'react';
type Props = {
    className?: string
};
const DarkMode = ({ className }: Props) => {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
            <path d="M20 22.1487C18.7495 22.7654 17.3675 23.055 15.9792 22.9914C14.5909 22.9277 13.2401 22.5128 12.0492 21.7842C10.8582 21.0556 9.86476 20.0362 9.1587 18.8185C8.45264 17.6008 8.0563 16.2231 8.00557 14.8103C7.95484 13.3975 8.25132 11.9941 8.86816 10.7272C9.485 9.46029 10.4027 8.36994 11.5382 7.55486C12.6737 6.73977 13.9911 6.22569 15.3712 6.05917C16.7512 5.89265 18.1503 6.07894 19.4417 6.60119C16.7138 7.96355 14.8911 11.1057 15.0683 14.6596C15.2407 18.1276 17.2617 21.005 20 22.1487Z" stroke="black" strokeWidth="1.4" strokeMiterlimit="10" />
        </svg>
    );
};

export default DarkMode;