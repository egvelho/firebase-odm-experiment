import { AxiosRequestConfig, AxiosResponse } from "axios";
import { ClassConstructor } from "class-transformer";
import { ValidationError } from "class-validator";
export declare type MaybeOutput<Output> = {
    output: Output | undefined;
    errors: ValidationError[];
};
export declare type ClientConfig = {
    token?: string;
    validateOnly?: boolean;
    baseURL?: string;
} & AxiosRequestConfig;
export declare type Client<Input, Output> = (input: Input, config?: ClientConfig) => Promise<AxiosResponse<Output>>;
export declare function client<Input, Output>(input: Input, config?: ClientConfig): Promise<AxiosResponse<Output>>;
export declare function validatedClient<Input, Output>(input: Input, classInput: ClassConstructor<Input>, config?: ClientConfig): Promise<AxiosResponse<Output | MaybeOutput<undefined>>>;
