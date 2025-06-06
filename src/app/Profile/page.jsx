import React from 'react';
import userAvatar from "../../assets/images/avatar-jessica.jpeg";
import Image from 'next/image';

const Profile = () => {
  return (
    <div className='bg-profile-grey-900 h-screen grid place-items-center p-4'> 
      <div className='border border-profile-grey-800 rounded-xl bg-profile-grey-800 w-full max-w-sm place-items-center '>
        <div>
          <Image
            src={userAvatar}
            alt= "profile image"
            className='size-24 rounded-full my-8'
            >
          </Image>
        </div>

        <div className='place-items-center'>
        <h1 className='text-profile-white font-bold text-2xl font-inter'> Jessica Randall</h1>
        <span className='text-sm mb-6 text-profile-green font-inter font-semibold'> London, United Kingdom</span>
        <h6 className='block mt-6 font-inter text-sm text-white font-semibold'> "Front-end developer and avid reader." </h6>
        </div>

        <div className='grid w-full place-items-center text-white px-12 m-8 gap-y-4'>
        <button className='shadow-2xl text-sm font-semibold w-full p-2 rounded bg-profile-grey-700 cursor-pointer'> GitHub</button>
        <button className='shadow-2xl text-sm font-semibold w-full p-2 rounded bg-profile-grey-700 cursor-pointer'> Frontend Mentor</button>
        <button className='shadow-2xl text-sm font-semibold w-full p-2 rounded bg-profile-grey-700 cursor-pointer'> Linkedin</button>
        <button className='shadow-2xl text-sm font-semibold w-full p-2 rounded bg-profile-grey-700 cursor-pointer'> Twitter</button>
        <button className='shadow-2xl text-sm font-semibold w-full p-2 rounded bg-profile-grey-700 cursor-pointer'> Instagram</button>
        </div>
      </div>

    </div>
  ) 
}

export default Profile
