import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Top3Cards = ({ item }) => {
    console.log(item);
    return (
                <div >
                    <Image src={item.image} width={200} height={200} alt={item.name} className='aspect-square'></Image>

                    <h3 className="font-semibold text-lg mt-2">{item.name}</h3>
                    <p> {item.rating}</p>
                    <p className="font-bold">${item.price}</p>

                    <Link href={`/products/${item.id}`}>
                        <button className="mt-3 bg-blue-500 text-white px-4 py-2 rounded">
                            View Details
                        </button>
                    </Link>
                </div>
     
    );
};


export default Top3Cards;