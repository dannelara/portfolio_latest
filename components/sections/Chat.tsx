"use client";

import React from 'react';
import Grid from '../common/Grid';
import SubmitButton from '../common/SubmitButton';
import { experimental_useOptimistic as useOptimistic } from 'react'
import { Message, MessageAuthor, MessageT } from '@/utils/Types';
import { getUserInfoFromQuestion } from '@/actions/getUserInfo';
import Input from '../common/Input';
import { v4 as uuidv4 } from 'uuid';
import RenderMessage from '../common/Message';
import ArrowBack from '@/assets/icons/ArrowBack';

const Chat = () => {
    const [message, setMessage] = React.useState<Message>({
        from: MessageAuthor.USER,
        message: "",
        id: uuidv4()
    })

    const [disabled, setDisabled] = React.useState(false)
    const [isLoading, setIsLoading] = React.useState(false)

    const [messages, setMessages] = React.useState<Message[]>([{
        from: MessageAuthor.AI,
        message: "Welcome Daniel to Chat-pt. Ask me a question.",
        id: uuidv4()
    }])

    const handleSubmit = async (formData: FormData) => {
        const inputData = formData.get('message')
        if (!inputData) return

        setDisabled(true)
        setIsLoading(true)

        try {
            const response = await getUserInfoFromQuestion(message.message)

            if (response) {
                const responseToMessage: Message = {
                    from: MessageAuthor.AI,
                    id: uuidv4(),
                    message: response.message,
                }

                setMessages((messages) => [responseToMessage, ...messages])
            }

        } catch (error) {
            console.log(error)
            setIsLoading(false)
        }
        setDisabled(false)
    }

    return (
        <Grid className='container max-h-[30rem] overflow-y-auto'>
            <div className='col-span-2 mb-2'>
                <span className='text-base text-skin-base'>Chat with me</span>
            </div>
            <div className='container space-y-4 md:space-y-0  md:col-start-3 col-span-full gap-4'>
                <div className='py-4 min-h-[10rem] '>
                    {messages.map((message) => (
                        <RenderMessage
                            messageDisplayFinished={() => setIsLoading(false)}
                            key={message.id}
                            message={message} />
                    ))}
                </div>
                <form
                    action={handleSubmit}
                >
                    <div className='flex gap-4 items-center'>
                        <Input
                            type="text"
                            name="message"
                            required
                            value={message.message}
                            onChange={(e) => setMessage(
                                {
                                    from: MessageAuthor.USER,
                                    message: e.target.value,
                                    id: uuidv4()
                                }
                            )}
                            className='"hover:outline-none focus:outline-none border-b-2 border-b-skin-base bg-transparent text-skin-base w-full'
                            placeholder='Type a message...'
                        />
                        <SubmitButton
                            disabled={disabled || isLoading}
                            text='Send'
                            className='flex mt-auto'
                            icon={
                                <div className='inline-block rotate-180'>
                                    <ArrowBack className='h-4 fill-skin-base ' />
                                </div>
                            }
                        />
                    </div>
                    <div className='text-xs py-4 text-gray-400'>
                        <span>
                            This AI model is a simple single answer model that produces concrete data based on the input and context.
                            The ai will only return the data requested in the input. For example: <q>What is your name</q> would return <q>Daniel</q> in this case.
                        </span>
                    </div>
                </form>
            </div>
        </Grid>
    );
};

export default Chat;