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
                query: ({page,limit}) => `/users?_page=${page}&_per_page=${limit}`,
                // providesTags:['Users']
                providesTags: ['Users']
            }),

            //get single user Details
            getUserById : builder.query({
                query: (id) => `/users/${id}`
            }),
            // add a new user to api
            addUser: builder.mutation({
                query: (data)=>({
                    url:'/users',
                    method:'POST',
                    body: data
                }),
                invalidatesTags:['Users']
            }),
            //delete a user from api
            deleteUser: builder.mutation({
                query: (id)=>({
                    url:`/users/${id}`,
                    method:'DELETE',
                    
                }),
                // invalidatesTags:['Users']
                invalidatesTags:(result,error, userId)=>[{type: 'Users', id: userId}]
            }),

            //Update a user

            updateUserById: builder.mutation({
                 query: ({id, ...rest})=>({
                    url:`/users/${id}`,
                    method:'PATCH',
                    body: rest
                }),
                // invalidatesTags:['Users']
                invalidatesTags:(result,error, {userId})=>[{type: 'Users', id: userId}]
            })
    })
})
export const {useGetUsersQuery, useAddUserMutation,useDeleteUserMutation,useGetUserByIdQuery,useUpdateUserByIdMutation} = userApi
export default userApi