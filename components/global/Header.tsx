import DarkMode from '@/assets/icons/DarkMode';
import LightMode from '@/assets/icons/LightMode';
import { useGlobalState } from '@/globalState/GlobalStateProvider';
import { cn } from '@/utils';
import { Theme } from '@/utils/Types';
import React from 'react';

const Header = () => {
    const { theme, setTheme } = useGlobalState();

    return (
        <header className={cn("container sticky h-10 md:h-20 w-full top-4 z-50 backdrop-blur-sm")}>
            <nav className='container h-full flex justify-between border-[.1px] border-skin-gray-shaded'>
                <div className='flex items-center gap-4 px-4'>
                    <div className='h-2 my-auto rounded-full aspect-square bg-skin-base'></div>
                    <span className='text-xs text-skin-base'>Daniel</span>
                </div>

                <div className='flex items-center justify-end'>
                    {
                        theme === Theme.DARK ?
                            <button
                                onClick={() => { setTheme(Theme.LIGHT) }}
                            >
                                <LightMode />
                            </button>
                            :
                            <button
                                onClick={() => { setTheme(Theme.DARK) }}
                            >
                                <DarkMode />
                            </button>
                    }
                </div>
            </nav>
        </header >
    );
};

export default Header;

Header.displayName = 'Header'
