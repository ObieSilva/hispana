import React from 'react';
import Button from './Button';
import logo from '../assets/logo.png'

const Header = () => {
  return (
    <div className='fixed w-full'>
    <nav className='max-w-[80em] flex justify-between items-center mx-auto p-3 bg-main rounded-2xl mt-4'>
        <img className='w-32 h-full object-contain' src={logo}></img>
        <Button className='bg-black' title='En Vivo'/>
    </nav>
    </div>
  )
}

export default Header