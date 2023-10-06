import React from 'react';
import Grid from '../common/Grid';
import SubmitButton from '../common/SubmitButton';
import { experimental_useOptimistic as useOptimistic } from 'react'
import { Message, MessageAuthor } from '@/utils/Types';
import { getUserInfoFromQuestion } from '@/actions/getUserInfo';
import Input from '../common/Input';
import { v4 as uuidv4 } from 'uuid';
import RenderMessage from '../common/Message';
import ArrowBack from '@/assets/icons/ArrowBack';
const Chat = () => {
    const [message, setMessage] = React.useState("What skills do you have?")

    const [optimisticMessages, addOptimisticMessage] = useOptimistic<Message[]>(
        [],
    )


    const handleSubmit = async (formData: FormData) => {
        const inputData = formData.get('message')
        if (!inputData) return

        const message: Message = {
            from: MessageAuthor.USER,
            id: uuidv4(),
            message: inputData as string,
        }

        try {
            const response = await getUserInfoFromQuestion(message.message)

            if (response.ok) {
                const responseToMessage: Message = {
                    from: MessageAuthor.AI,
                    id: uuidv4(),
                    message: response.answer
                }

                addOptimisticMessage(
                    (messages) => [responseToMessage, ...messages],
                )
                setMessage("")
            }

        } catch (error) {
            console.log(error)
        }
    }

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
                    action={handleSubmit}
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