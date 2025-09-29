import React from 'react'

const Footer = () => {
  return (
    <footer className='w-screen bg-violet-300 py-4 text-black'>
      <div className='container mx-auto flex-flex-col items-center justify-between gap-4 px-4 md:flex-row'>
        <p className='flex justify-center text-center text-sm md:text-left'>
            &copy; Elementia. Transmuting ideas into reality
        </p>
      </div>
    </footer>
  )
}

export default Footer
