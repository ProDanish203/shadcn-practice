import React from 'react'
import {
    Card,
    CardContent,
    CardFooter,
} from "@/components/ui/card"
import Link from 'next/link'
import Image from 'next/image'

export const ProductCard = ({img, title, price}: any) => {
  return (
    <Link href={`/product/${title}`}
    className='outline-0 focus:ring-2 hover:ring-2 ring-primary transition duration-300 rounded-lg'
    >
        <Card className='rounded-lg border-2'>
            <CardContent className='pt-4'>
                <div className='aspect-square relative bg-foreground/5 dark:bg-background rounded-lg'>
                    <Image src={img} alt={title} fill
                    className='aspect-square object-cover rounded-lg transition-all duration-300 hover:scale-105'
                    />
                </div>
            </CardContent>
            <CardFooter className='flex-col items-start'>
                <div>
                    <p className='font-semibold text-lg'>{title}</p>
                </div>
                <div className='flex text-2xl font-bold items-center justify-between'>
                    {price}$
                </div>
            </CardFooter>
        </Card>
    </Link>
  )
}
