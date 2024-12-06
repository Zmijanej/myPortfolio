import Link from 'next/link'
import React from 'react'
import { FaArrowUp } from 'react-icons/fa'

const FollowAlong = () => {
  return (
    <section className='flex justify-end flex-wrap border-4 my-4 hover:bg-white hover:text-black z-[100] '>
        <Link href={'#Top'} className='flex items-center justify-start px-2  '>
          <button className='mr-2 p-4 hover:bg-'>back on top</button>
          <FaArrowUp  className='mr-4'/>
        </Link>

    </section>
  )
}

export default FollowAlong