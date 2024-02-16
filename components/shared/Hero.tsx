import React from 'react'
import { Button } from '../ui/button'
import { ShoppingBag } from 'lucide-react'

export const Hero = () => {
  return (
    <section
    className='mt-5 max-w-7xl w-full mx-auto space-y-10 pb-10 rounded-lg bg-cover bg-no-repeat bg-hero min-h-[600px] flex items-center justify-center'>

        <div className='rounded-lg py-4 px-8 bg-yellow-600'>
            <h2 className='text-3xl font-semibold'>Featured Product</h2>
            <Button 
            size="lg"
            className='w-full py-6 text-lg mt-4'
            >
                <ShoppingBag className='mr-2'/>
                Shop Now
            </Button>
        </div>

    </section>
  )
}
