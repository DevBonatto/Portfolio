import React from 'react'

const Footer = () => {
  return (
    <section className='c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center gap-5'>
      <div className='text-white-500 flex gap-2'>
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className='flex gap-3'>
        <a href="https://github.com/DevBonatto" target='_blank' className='social-icon'>
          <img className='w-1/2 h-1/2' src="/assets/github.svg" alt="github" />
        </a>
        <a href="https://www.linkedin.com/in/luccabonatto/" className='social-icon' target='_blank'>
          <img className='w-1/2 h-1/2' src="/assets/linkedin.png" alt="linkedin"/>
        </a>
      </div>

      <p className='text-white-500'>© 2025 Lucca. All rights reserved</p>
    </section>
  )
}

export default Footer