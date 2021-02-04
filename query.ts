import { AxiosResponse } from "axios";
import { ValidationError } from "class-validator";
import { client, validatedClient, ClientConfig, MaybeOutput } from "./client";

const baseURL = "https://orientou-com.firebaseio.com/";

export default function query<T extends Object>(
  object: T,
  key: keyof T,
  arg: string = key as string,
  keys: (keyof T)[] = [key]
) {
  const obj = object[key];
  return {
    url() {
      return `/${keys.join("/")}.json`;
    },
    prop(key: keyof typeof obj, arg_: string = key as string) {
      return query(obj, key, arg_, [...(keys as any), arg_]);
    },
    async get(
      config: ClientConfig = {}
    ): Promise<AxiosResponse<typeof obj | undefined>> {
      const response: AxiosResponse<any> = await client(
        {},
        { ...config, method: "GET", url: this.url(), baseURL }
      );
      response.data =
        response.data !== null && response.data.error === undefined
          ? response.data
          : undefined;
      return response;
    },
    async post(
      input: typeof obj,
      config: ClientConfig = {}
    ): Promise<AxiosResponse<MaybeOutput<string>>> {
      const response = await validatedClient<typeof input, any>(
        input,
        object as any,
        {
          ...config,
          method: "POST",
          url: this.url(),
          baseURL,
        }
      );

      response.data = {
        output: response.data?.name,
        errors: response.data?.errors ?? [],
      };
      return response;
    },
    async put(
      input: typeof obj,
      config: ClientConfig = {}
    ): Promise<AxiosResponse<MaybeOutput<typeof input>>> {
      const response = await validatedClient<typeof input, any>(
        input,
        object as any,
        {
          ...config,
          method: "PUT",
          url: this.url(),
          baseURL,
        }
      );

      response.data = {
        output:
          response.data && !response.data.error && !response.data.errors?.length
            ? response.data
            : undefined,
        errors: response.data?.errors ?? [],
      };

      return response;
    },
    async patch(
      input: Partial<typeof obj>,
      config: ClientConfig = {}
    ): Promise<AxiosResponse<MaybeOutput<typeof input>>> {
      const response = await validatedClient<typeof input, any>(
        input,
        object as any,
        {
          ...config,
          method: "PATCH",
          url: this.url(),
          baseURL,
        }
      );

      response.data = {
        output:
          response.data && !response.data.error && !response.data.errors?.length
            ? response.data
            : undefined,
        errors: response.data?.errors ?? [],
      };

      return response;
    },
    async delete(config: ClientConfig = {}): Promise<AxiosResponse<boolean>> {
      const response = await client<unknown, any>(
        {},
        { ...config, method: "DELETE", url: this.url(), baseURL }
      );

      response.data = response.data === null;
      return response;
    },
  };
}
