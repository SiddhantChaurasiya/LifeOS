import React from 'react'
import { IoHome } from "react-icons/io5";
import { RiBarChartFill } from "react-icons/ri";

const HomePage = () => {

  // ✅ Fixed user object
  const user = {
    name: "Sid",
    email: "siddhantchaurasiya28@gmail.com"
  };

  return (
    <div className='flex min-h-screen'>
      
      {/* Sidebar */}
      <div className='w-60 flex flex-col'>
        
        {/* Top Section */}
        <div>
          <img className='w-32' src="./logo.png" alt="logo" />

          {/* Menu */}
          <div className='flex flex-col gap-3'>
            
            <div className='flex items-center gap-2 cursor-pointer ml-2 mr-2 hover:bg-blue-200 p-2 rounded'>
              <IoHome />
              <span>Today</span>
            </div>

            <div className='flex items-center gap-2 cursor-pointer ml-2 mr-2 hover:bg-blue-200 p-2 rounded'>
              <RiBarChartFill />
              <span>Progress</span>
            </div>

          </div>
        </div>

        {/* Spacer pushes profile to bottom */}
        <div className="mt-auto">


          {/* Profile Section */}
          <div className='flex items-center gap-3 p-3'>
            <img 
              className='w-10 h-10 rounded-full object-cover' 
              src="./logo.png" 
              alt="profile" 
            />
            <div>
              <h3 className='font-semibold'>{user.name}</h3>
              <p className='text-sm text-gray-500 truncate max-w-[140px]'>{user.email}</p>
            </div>
          </div>

        </div>

      </div>

      {/* Main Content */}
      <div className='flex-1 bg-[#b2c7cf] flex'>
        <h1 className='text-xl font-bold'>
              Today
        </h1>
      </div>

      {/* Right Panel */}
      <div className='w-80 bg-gray-100 flex items-center justify-center'>
        <h1 className='text-xl font-bold'>03 (Right Panel)</h1>
      </div>

    </div>
  )
}

export default HomePage