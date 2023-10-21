import {createContext} from "react";


const Context = createContext({});

export const Provider = Context.Provider;
export const Consumer = Context.Consumer;

export interface value {
  value: string | number;
}