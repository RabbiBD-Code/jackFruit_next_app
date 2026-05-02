import Top3Cards from '@/componets/Top3Cards';
import React from 'react';

const ProductsPage = async () => {
    const res = await fetch("https://jack-fruit-next-app.vercel.app/data.json")
    const card = await res.json()
    return (
        <div className="mt-12 mx-auto">
            <h2 className="text-2xl font-bold mb-6">Products</h2>

            <div className="grid md:grid-cols-3 gap-6 ">
                {
                    card.map(item => <Top3Cards key={item.id} item={item} />)
                }
            </div>
        </div>
    );
};

export default ProductsPage;