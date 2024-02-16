import React from 'react'

export const Container = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='max-w-7xl w-full mx-auto'>
        {children}
    </div>
  )
}
