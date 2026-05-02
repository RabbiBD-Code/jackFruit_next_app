import Link from 'next/link';
import React from 'react';
import { BiStar } from 'react-icons/bi';
import Top3Cards from './Top3Cards';

const TopCards = async() => {
    const res = await fetch("https://jack-fruit-next-app.vercel.app/data.json")
    const cards = await res.json()
    // console.log(cards);
    const card = cards.slice(0,3)

    return (
        <div className="mt-12">
      <h2 className="text-2xl font-bold mb-6">Popular Products</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {
            card.map(item =><Top3Cards key={item.id} item={item}/> )
        }
      </div>
    </div>
  );
};

export default TopCards;