"use client"
import React from 'react';
import { View } from '@/utils/Types';
import About from '@/sections/About';
import Contact from '@/sections/Contact';
import Projects from '@/sections/Projects';
import { useGlobalState } from '@/globalState/GlobalStateProvider';


const ViewComponent = {
    [View.ABOUT]: About,
    [View.CONTACT]: Contact,
    [View.PROJECTS]: Projects
}

const RenderView = () => {
    const { activeView } = useGlobalState()
    const View = ViewComponent[activeView]

    return (
        <div className='container'>
            <View />
        </div>
    );
};

export default RenderView;