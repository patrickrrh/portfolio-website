import React from 'react'

const Badge = ({ containerStyles, icon, badgeText }) => {
  return (
    <div className={`badge ${containerStyles}`}>
        <div className='text-2xl text-primary text-contrast'>{icon}</div>
        <div className='max-w-[70px] leading-none text-[14px] font-medium text-black'>{badgeText}</div>
    </div>
  )
}

export default Badge