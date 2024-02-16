import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

const Loading = () => {
  return (
    <div className='max-w-7xl w-full mx-auto'>
        <div className='w-full h-full p-8'>
            <Skeleton className='w-full aspect-square rounded-xl md:aspect-[2.4/1]'/>
            <div className='mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                <Skeleton className='aspect-square rounded-xl'/>
                <Skeleton className='aspect-square rounded-xl'/>
                <Skeleton className='aspect-square rounded-xl'/>
                <Skeleton className='aspect-square rounded-xl'/>
            </div>
        </div>
    </div>
  )
}

export default Loading