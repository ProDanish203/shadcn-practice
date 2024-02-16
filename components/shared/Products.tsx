import React from 'react'
import { ProductCard } from '../cards/ProductCard'

const prods = [
    {
        img: "/prod1.jpg",
        title: "Product Title",
        price: 39.00
    },
    {
        img: "/prod2.jpg",
        title: "Product Title",
        price: 39.00
    },
    {
        img: "/prod3.jpg",
        title: "Product Title",
        price: 39.00
    },
    {
        img: "/prod4.jpg",
        title: "Product Title",
        price: 39.00
    },
]

export const Products = () => {
  return (
    <section className='max-w-7xl w-full mx-auto my-20 px-4'>
        <h2 className='text-5xl font-semibold text-center'>All Products</h2>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-10'>
        {prods.map((prod, idx) => (
            <ProductCard img={prod.img} title={prod.title} price={prod.price} key={idx}/>
        ))}
        </div>

    </section>
  )
}
