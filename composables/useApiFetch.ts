import type { UseFetchOptions } from "nuxt/app";
import { defu } from "defu";
export function useApiFetch<T>(url: string, options: UseFetchOptions<T> = {}) {
    console.log('url',url)
    const defaults: UseFetchOptions<T> = {
      onResponse(_ctx) {
        // _ctx.response._data = new myBusinessResponse(_ctx.response._data)
      },
      onRequestError() {},
      async onResponseError({ response }) {
        // throw new myBusinessError()
        console.log(response);
      
        throw response;
      },
    };
    // for nice deep defaults, please use unjs/defu
    const params = defu(options, defaults);
    return $fetch(url, params);
  }
