import React from 'react';
import Grid from '../common/Grid';
import SubmitButton from '../common/SubmitButton';
import { experimental_useOptimistic as useOptimistic } from 'react'
import { Message } from '@/utils/Types';
import { getUserInfo } from '@/actions/getUserInfo';
import Input from '../common/Input';
import { v4 as uuidv4 } from 'uuid';
import RenderMessage from '../common/Message';
import ArrowBack from '@/assets/icons/ArrowBack';
const Chat = () => {
    const [message, setMessage] = React.useState("What skills do you have?")

    const [optimisticMessages, addOptimisticMessage] = useOptimistic<Message[]>(
        [],
    )


    return (
        <Grid className='container max-h-[30rem] overflow-y-auto'>
            <div className='col-span-2 mb-2'>
                <span className='text-base text-skin-base'>Chat with me</span>
            </div>
            <div className='container space-y-4 md:space-y-0  md:col-start-3 col-span-full gap-4'>
                <div className='py-4 min-h-[10rem] '>
                    {optimisticMessages.map((message) => (
                        <RenderMessage key={message.id} message={message} />

                    ))}
                </div>
                <form
                    action={async (formData: FormData) => {
                        const inputData = formData.get('message')
                        if (!inputData) return
                        const message: Message = {
                            from: 'USER',
                            id: uuidv4(),
                            message: inputData as string,
                        }

                        const response = await getUserInfo(message.message)
                        const responseToMessage: Message = {
                            from: 'BOT',
                            id: uuidv4(),
                            message: response.answer
                        }
                        addOptimisticMessage(
                            (messages) => [responseToMessage, ...messages],
                        )
                        setMessage("")
                    }}
                >
                    <div className='flex gap-4 items-center'>
                        <Input
                            type="text"
                            name="message"
                            required
                            value={message}
                            onChange={(e) => setMessage(e.currentTarget.value)}
                            className='"hover:outline-none focus:outline-none border-b-2 border-b-skin-base bg-transparent text-skin-base w-full'
                            placeholder='Type a message...'
                        />
                        <SubmitButton text='Send'
                            className='flex mt-auto'
                            icon={
                                <div className='inline-block rotate-180'>
                                    <ArrowBack className='h-4 fill-skin-base ' />
                                </div>
                            }
                        />
                    </div>
                </form>
            </div>
        </Grid>
    );
};

export default Chat;