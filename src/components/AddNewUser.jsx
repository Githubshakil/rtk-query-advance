import React from 'react'

const AddNewUser = () => {
  return (
    <div className='shadow-sm rounded-lg p-8'>
        <h2 className='text-xl font-semibold mb-5 '>Add New User</h2>


        <form className='space-y-4'>
            <div>
                <label>Name:</label>
                <input type="text" placeholder='Enter Your Name' className=' p-2 border focus:outline-none ml-3 border-gray-200 rounded-lg' />
            </div>
            <div>
                <label>Email:</label>
                <input type="text" placeholder='Enter Your Name' className=' p-2 border focus:outline-none ml-3 border-gray-200 rounded-lg' />
            </div>
            <div>
                <label>Age:</label>
                <input type="text" placeholder='Enter Your Age' className=' p-2 border focus:outline-none ml-3 border-gray-200 rounded-lg' />
            </div>
            <div>
                <label>Country:</label>
                <input type="text" placeholder='Enter Your Country' className=' p-2 border focus:outline-none ml-3 border-gray-200 rounded-lg' />
            </div>
        </form>
    </div>
  )
}

export default AddNewUser