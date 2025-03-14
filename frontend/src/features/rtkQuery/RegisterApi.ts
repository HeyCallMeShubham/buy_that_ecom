
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
 


export const registerApi = createApi({

    reducerPath: "registerApi",

    baseQuery: fetchBaseQuery({

        baseUrl: `${import.meta.env.VITE_api_base_url}/api/v1/user`,
        credentials: "include",

    }),

    endpoints: (builder) => ({

        registerApi: builder.mutation({

            query: (payload) => ({

                url: `/register`,
                method: "POST",
                body:payload,

            })

        })

    })

});

export const { useRegisterApiMutation } = registerApi


