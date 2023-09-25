import React from 'react';

type Props = {
    text: string
};

const Chip = ({ text }: Props) => {
    return (
        <div className='inline-block'>
            <span className='text-skin-base text-xs'>
                {text}
            </span>
        </div>
    );
};

export default Chip;