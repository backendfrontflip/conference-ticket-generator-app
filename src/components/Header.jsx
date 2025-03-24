import React from 'react'

const Header = () => {
  return (
    <div>
        <img src={`${import.meta.env.BASE_URL}/assets/images/logo-full.svg`} alt="" className='mx-auto mb-4'/>
      <h1 className='font-bold text-2xl mb-10'>Your Journey to Coding <br/> Conf 2025 Starts Here!</h1>
      <p className='mb-10 text-gray-300'>Secure your spot at next year's biggest coding conference.</p>
    </div>
  )
}

export default Header