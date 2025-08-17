import React, { use } from 'react'
import { useDeleteUserMutation, useGetUsersQuery } from '../redux/features/users/userApi'
import Loader from './Loader'


const Users = () => {

  const {data:users=[], error, isLoading} = useGetUsersQuery()
  const [deleteUser] = useDeleteUserMutation()

  if(isLoading) return <Loader/>
  if(error) return <div>Error Page</div>



const handleDeleteUser =async(id) => {
  try {
    await deleteUser(id)
    alert ('user deleting successfuly')
  } catch (error) {
    console.log("Error Deleteing User", error)
  }
 
}

  return (
    <div>
       
    <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>

      {
        users.map((user,idx)=>(
          <div key={idx} className=' shadow-md rounded-lg p-5 space-y-2'>
            <img src="https://img.freepik.com/premium-vector/male-face-avatar-icon-set-flat-design-social-media-profiles_1281173-3806.jpg" alt="" className='size-10' />
            <h2><span className='font-bold'>Name:</span> {user?.name}</h2>
            <h4><span className='font-semibold'>Email:</span>  {user?.email}</h4>
            <h4><span className='font-bold'>Age:</span>  {user?.age}</h4>
            <h5><span className='font-bold'>Country:</span>  {user?.country}</h5>

            <div className='space-x-2'>
              <button onClick={()=> handleDeleteUser(user?.id)} className='px-5 py-1.5 bg-red-500 text-white rounded'>Delete</button>
              <button className='px-5 py-1.5 bg-blue-500 text-white rounded'>Update</button>
            </div>

          </div>
        ))
      }
    </div>
    </div>
  )
}

export default Users