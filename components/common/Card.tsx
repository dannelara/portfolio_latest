import clsx from 'clsx';
import React from 'react';

type Props = {
    className?: string
    heading: string,
    description?: string,
};

const Card = ({ className, heading, description }: Props) => {
    const [active, setActive] = React.useState<boolean>(false)

    return (
        <div className={clsx(className)}>
            <button className='w-full flex flex-col h-full border-[.1px] border-skin-gray-shaded' onClick={() => { setActive(!active) }}>
                <div className='flex-1 p-4 space-y-4'>
                    <span className="block text-2xl md:text-lg text-skin-base text-start">
                        {heading}
                    </span>
                    <span className='block text-sm text-skin-base text-start'>
                        {description}
                    </span>
                </div>
            </button>
        </div>
    );
};

export default Card;