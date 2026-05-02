import { Chip } from '@heroui/react';
import Image from 'next/image';
import React from 'react';
import { BsStarFill } from 'react-icons/bs';

const detaisPage = async ({ params }) => {
    const { id } = await params;
    const res = await fetch("https://jack-fruit-next-app.vercel.app/data.json")
    const cards = await res.json()
     const card = cards.find(c => c.id == id)

    console.log(card);
    return (
         <div className='border-2 rounded-xl mx-auto w-[40%] maw-h-[80vh]'>
                    <div className="relative w-full aspect-square">
                        <Image
                            src={card.image}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            alt={card.name}
                            className="object-cover rounded-t-xl"
                        />
        
                    </div>
        
                    <div className='p-4 space-y-3'>
                        <h3 className="font-semibold text-lg mt-2">{card.name}</h3>
                        <p className="">{card.description}</p>
                        <div className='flex justify-between items-center'>
                            <p className='text-xl font-bold flex items-center gap-3'><BsStarFill className='text-orange-200' /> {card.rating}</p>
                            <p className="font-bold text-xl">${card.price}</p>
                        </div>
                        <button className="mt-3 bg-blue-500 w-full text-white px-4 py-2 rounded-lg">
                    Add to card
                </button>
                    </div>

                    </div>
    );
};

export default detaisPage;