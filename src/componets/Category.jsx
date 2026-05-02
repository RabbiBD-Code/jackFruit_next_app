import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';

const category = async () => {
    const res = await fetch("https://jack-fruit-next-app.vercel.app/category.json")
    const cards = await res.json()
    console.log(cards);

    return (
        <div className='mb-5 space-x-5'>
            {
                cards.map(category => <Link href={`?category=${category.name.toLowerCase()}`} key={category.id}><Button size='sm' variant='outline' >{category.name}</Button> </Link>)
            }
        </div>
    )
    
};

export default category;