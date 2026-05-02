import Top3Cards from '@/componets/Top3Cards';
import React from 'react';
import Category from '@/componets/Category';

const ProductsPage = async ({searchParams}) => {
    const {category} = await searchParams;
    const res = await fetch("https://jack-fruit-next-app.vercel.app/data.json")
    const card = await res.json()

    const filteredCard = category ? card.filter(c => c.category.toLowerCase() == category.toLowerCase()) : card


    return (
        <div className="mt-12 mx-auto">
            <h2 className="text-2xl font-bold mb-6">Products</h2>
            <Category/>
            <div className="grid md:grid-cols-3 gap-6 ">
                {
                    filteredCard.map(item => <Top3Cards key={item.id} item={item} />)
                }
            </div>
        </div>
    );
};

export default ProductsPage;