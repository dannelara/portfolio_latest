import Github from '@/assets/icons/Github';
import LinkedIn from '@/assets/icons/LinkedIn';
import Grid from '@/components/common/Grid';
import Input from '@/components/common/Input';
import Link from 'next/link';
import React from 'react';

const Contact = () => {


    return (
        <Grid className='container items-center justify-center py-12'>
            <div className='col-span-3'>
                <span className='text-base text-skin-base'>Contact me</span>
            </div>
            <div className='grid grid-cols-2 col-start-4 my-12 font-light col-span-full text-skin-base'>
                <Link href="mailto:11daniel@live.se"
                >
                    11daniel@live.se
                </Link>
                <div className='flex justify-end gap-4'>
                    <Link href="https://www.linkedin.com/in/daniel-lara-92bb19242/"
                        target='_blank'
                    >
                        <LinkedIn className='h-7 fill-skin-base' />
                    </Link>
                    <Link href="https://github.com/dannelara"
                        target='_blank'
                    >
                        <Github className='h-7 fill-skin-base' />
                    </Link>
                </div>
            </div>
        </Grid>
    );
};

export default Contact;