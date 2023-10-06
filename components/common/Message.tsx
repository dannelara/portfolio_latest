"use client"
import { Message, MessageAuthor } from '@/utils/Types';
import React from 'react';

type Props = {
    message: Message
};

const RenderMessage = ({ message: { message, from, id } }: Props) => {

    let currentI = 0;
    let [currentMessageString, setCurrentMessageString] = React.useState('');

    React.useEffect(() => {
        const interval = setInterval(() => {

            if (currentI === message.length) {
                clearInterval(interval);
                return;
            }

            if (typeof message.charAt(currentI) === 'undefined') return;

            setCurrentMessageString(`${currentMessageString += message.charAt(currentI)}`)


            currentI++;
        }, 50);

        return () => clearInterval(interval);
    }, [message]);

    return (
        <div className='py-2'>
            {from === MessageAuthor.USER ? (
                <div className='flex justify-end'>
                    <div className='rounded-xl p-2'>{message}</div>
                </div>
            ) : (
                <div className='flex justify-start'>
                    <div className='rounded-xl py-2 flex gap-4 justify-start'>
                        <span className='text-skin-base text-xs capitalize text-start'>AI:</span>
                        <span className='text-skin-base text-xs capitalize'>{currentMessageString}.</span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default RenderMessage;