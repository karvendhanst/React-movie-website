import React from 'react'

const HeaderMenus = (props) => {
  return (
    <div className='flex gap-2.5 items-center hover:text-red-700 cursor-pointer transition duration-300'>
        <props.Icon/>
        <span>{props.name}</span>
    </div>
  )
}

export default HeaderMenus