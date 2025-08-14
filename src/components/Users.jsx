import React, { use } from 'react'
import { useGetUsersQuery } from '../redux/features/users/userApi'
import Loader from './Loader'


const Users = () => {

  const {data:users=[], error, isLoading} = useGetUsersQuery()

  if(isLoading) return <Loader/>
  if(error) return <div>Error Page</div>
console.log(users)
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

          </div>
        ))
      }
    </div>
    </div>
  )
}

export default Users