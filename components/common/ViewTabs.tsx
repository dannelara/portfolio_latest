"use client";
import { useGlobalState } from '@/globalState/GlobalStateProvider';
import { View } from '@/utils/Types';
import clsx from 'clsx';
import React from 'react';



const ViewTabs = () => {
    const { setActiveView } = useGlobalState()
    return (
        <div className='container backdrop-blur-xl lg:grid grid-cols-8'>
            <div className='col-start-6 col-span-full flex justify-between'>
                {Object.values(View).map((view, index) => {
                    return (
                        <button key={index} className='cursor-pointer' onClick={() => setActiveView(view)}>
                            <span className={clsx("text-sm md:text-3xl text-skin-base underline",)}>{view}</span>
                        </button>
                    )
                })}
            </div>
        </div>
    );
};

export default ViewTabs;