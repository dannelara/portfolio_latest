"use client";
import React, { useContext } from "react";
import { Theme } from "../utils/Types";


export interface GlobalState {
    searchQueries: string[];
    setSearchQueries: React.Dispatch<React.SetStateAction<string[]>>;
    theme: Theme;
    setTheme: React.Dispatch<React.SetStateAction<Theme>>;
}

const GlobalStateContext = React.createContext<
    GlobalState | null
>(null);

export const GlobalStatePovider = ({
    children,
}: {
    children: JSX.Element | JSX.Element[];
}) => {
    const [theme, setTheme] = React.useState<Theme>(Theme.LIGHT);
    const [searchQueries, setSearchQueries] = React.useState<string[]>([]);

    React.useEffect(() => {
        if (theme === Theme.LIGHT) {
            document.documentElement.classList.remove(Theme.DARK);
            document.documentElement.classList.add(Theme.LIGHT);
        } else {
            document.documentElement.classList.remove(Theme.LIGHT);
            document.documentElement.classList.add(Theme.DARK);
        }
    }, [theme]);

    const state = { searchQueries, setSearchQueries, theme, setTheme };

    return (
        <GlobalStateContext.Provider value={state}>
            {children}
        </GlobalStateContext.Provider>
    );
};



export const useGlobalState = () => useContext(GlobalStateContext) as GlobalState;
