import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


const userApi = createApi({
    reducerPath:'userApi',
    baseQuery:fetchBaseQuery({
        baseUrl:'http://localhost:3000'
    }),
    tagTypes:['Users'],
    endpoints: (builder) => ({
            //get all users from the server
            getUsers: builder.query({
                query: () => '/users',
                providesTags:['Users']
            }),

            // add a new user to api
            addUser: builder.mutation({
                query: (data)=>({
                    url:'/users',
                    method:'POST',
                    body: data
                })
            })
    })
})
export const {useGetUsersQuery, useAddUserMutation} = userApi
export default userApi