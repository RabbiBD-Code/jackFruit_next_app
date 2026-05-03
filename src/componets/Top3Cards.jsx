import { Chip } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BsStarFill } from 'react-icons/bs';

const Top3Cards = ({ item }) => {
    return (
        <div className='border-2 rounded-xl'>
            <div className="relative w-full aspect-square">
                <Image
                    src={item.image}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt={item.name}
                    className="object-cover rounded-t-xl"
                />

                <Chip size="sm" className="absolute right-2 top-2">{item.category}</Chip>
            </div>

            <div className='p-4'>
                <h3 className="font-semibold text-lg mt-2">{item.name}</h3>
                <div className='flex justify-between items-center'>
                    <p className='text-xl font-bold flex items-center gap-3'><BsStarFill className='text-orange-200' /> {item.rating}</p>
                    <p className="font-bold text-xl">${item.price}</p>
                </div>
            </div>

            <Link href={`/signin?callbackURL=/products/${item.id}`}>
                <button className="mt-3 bg-blue-500 w-full text-white px-4 py-2 rounded-lg">
                    View Details
                </button>
            </Link>
        </div>

    );
};


export default Top3Cards;