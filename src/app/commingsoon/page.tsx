import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col gap-4 justify-center items-center w-full h-screen text-4xl font-bold'>
      Comming Soon.........................
      <Link href="/" className='text-blue-600'>Back To Home</Link>
    </div>
  )
}

export default page
