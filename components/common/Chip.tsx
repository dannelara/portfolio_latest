import React from 'react';

type Props = {
    text: string
};

const Chip = ({ text }: Props) => {
    return (
        <div className='inline-block'>
            <span className='text-xs md:text-base text-skin-base'>
                {text}
            </span>
        </div>
    );
};

export default Chip;