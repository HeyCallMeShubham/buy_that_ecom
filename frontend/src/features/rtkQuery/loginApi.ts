
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const loginApi = createApi({

    reducerPath: "loginApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `${import.meta.env.VITE_api_base_url}/api/v1/user`,
        credentials: "include"
    }),
    endpoints: (builder) => ({
        loginApi: builder.mutation({
            query: (payload: { userName: string, email: string, userPassword: string }) => ({

                url: `/login`,
                method: "POST",
                body: payload,
         
            })
        })
    })
});


export const { useLoginApiMutation } = loginApi

