"use client"
import React from 'react';
import { View } from '@/utils/Types';
import About from '@/components/sections/About';
import Contact from '@/components/sections/Contact';
import Projects from '@/components/sections/Projects';
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