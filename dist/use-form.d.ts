import { Dispatch } from "react";
import { AxiosResponse } from "axios";
import { Client, ClientConfig } from "./client";
declare type ValueState<Input> = {
    [key in keyof Input]: {
        value: Input[key];
        errors: string[];
        focus: boolean;
        touched: boolean;
    };
};
export declare type UseForm<Input, Output> = {
    loading: boolean;
    data: Input;
    form: ValueState<Input>;
    submitForm: (input?: Partial<Input>, config?: ClientConfig) => Promise<AxiosResponse<Output>>;
    setForm: Dispatch<Partial<Input>>;
    setFormFocus: (key: keyof Input) => void;
    setFormBlur: (key: keyof Input) => void;
};
export declare function useForm<Input, Output>(client: Client<Input, Output>, initialState: Input): UseForm<Input, Output>;
export {};
