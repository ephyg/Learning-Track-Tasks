"use client";

import { Provider } from "react-redux";
import { store } from "../store";

/**
 * ReduxProvider component.
 * 
 * @param props - The component props.
 * @param props.children - The child components to be wrapped by the ReduxProvider.
 * @returns The ReduxProvider component.
 */
export const ReduxProvider = (props: { children: React.ReactNode }) => {
    return <Provider store={store}>{props.children}</Provider>;
};
