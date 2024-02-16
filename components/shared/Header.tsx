"use client"
import React from 'react'
import Link from 'next/link'
import { Button } from '../ui/button'
import { Menu, ShoppingBag } from 'lucide-react'
import { ProfileBtn } from '../helpers/ProfileBtn'
import { ThemeToggle } from '../helpers/ThemeToggle'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
  

const routes = [
    {
        name: "Products",
        path: "/"
    },
    {
        name: "Category",
        path: "/"
    },
    {
        name: "Trending",
        path: "/"
    },
]

export const Header = () => {
  return (
    <header className='flex justify-between py-3 px-4 border-b'>
        <div className='flex justify-between max-w-7xl w-full mx-auto'> 
            <div className='relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between gap-4'>
            <Sheet>
            <SheetTrigger>
                <Menu className='w-6 h-6 md:hidden'/>
            </SheetTrigger>
            <SheetContent side="left" className='w-[300px] sm:w-[400px]'>
                <nav className='flex flex-col gap-4'>
                {routes.map((link, idx) => (
                    <Link href={link.path}
                    className='px-2 py-1 text-lg font-medium transition-colors'
                    >
                    {link.name}
                    </Link>
                ))}
                </nav>

            </SheetContent>
            </Sheet>
                <Link href="/">
                    <h1 className='text-2xl font-bold'>Pyzon</h1>
                </Link>
            </div>

            <nav className='mx-6 flex items-center space-x-4 lg:space-x-6 max-md:hidden'>
            {routes.map((link, idx) => (
                <Button asChild variant={"ghost"} key={idx}>
                    <Link href={link.path}
                    className='text-sm font-medium transition-colors'
                    >
                    {link.name}
                    </Link>
                </Button>
            ))}
            </nav>
            
            <div className='flex items-center gap-2'>
                <Button
                variant={"ghost"}
                size="icon"
                className='mr-2'
                aria-label='Shopping Cart'
                >
                    <ShoppingBag className='h-6 w-6'/>
                    <span className='sr-only'>Shopping Cart</span>
                </Button>

                <ThemeToggle/>
                <ProfileBtn/>
            </div>
        </div>
    </header>
  )
}
