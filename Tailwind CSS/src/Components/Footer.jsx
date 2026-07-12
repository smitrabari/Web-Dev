import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col gap-2'>
      <ul className='flex  font-lato justify-center gap-4'>
          <li>
            <a href="#">Facebook</a>
          </li>
          <li>
            <a href="#">Instagram</a>
          </li>
          <li>
            <a href="#">Twitter</a>
          </li>
        </ul>

        <div className='flex'>
          <img src="Assets\Help-Avatar.svg" alt="Profile Picture" className='h-20' />
          <div className='gap-2'>
            <p className='font-lato font-bold text-lg px-1.5'>  
              Have any questions?
            </p>
            <a href="#" className='text-blue-500 hover:underline
            px-1.5
            text-bold'>
              Contact Us
            </a>
          </div>
        </div>
    </div>
  )
}

export default Footer;