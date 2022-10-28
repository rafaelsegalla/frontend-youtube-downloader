import { createContext } from "react";

type CallbackFunction = (bool: boolean) => void;

type LoaderProps = {
    loading: boolean,
    setLoading: CallbackFunction
}

export const LoaderContext = createContext({} as LoaderProps);