"use client"
import React from 'react'
import { Button } from '../ui/button'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

export const ThemeToggle = () => {

    const {theme, setTheme} = useTheme();

  return (
    <Button
    variant="ghost"
    size="icon"
    className='mr-6 relative'
    aria-label='Toggle Theme'
    onClick={() => setTheme(theme === "dark" ? "light": "dark")}
    >
        <Sun className='h-6 w-6 rotate-0 scale-100 transition-all dark:rotate-90 dark:scale-0'/>
        <Moon className='absolute h-4 w-4 rotate-0 scale-0 transition-all dark:rotate-0 dark:scale-100'/>
        <span className='sr-only'>Toggle Theme</span>
    </Button>
  )
}
