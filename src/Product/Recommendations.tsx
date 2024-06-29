import React from 'react';
import anthCanvas from '../assets/Canvases/anth_canvas.png';

const Recommendations = () => {
  const products = [
    { id: 1, name: 'Anthurium', price: 29, image: anthCanvas },
    { id: 2, name: 'Monstera', price: 35, image: anthCanvas },
    { id: 3, name: 'Philodendron', price: 25, image: anthCanvas },
    { id: 4, name: 'Pothos', price: 20, image: anthCanvas },
  ];

  return (
    <section className="flex flex-col gap-6 justify-center items-center md:items-start w-full p-0">
      <h1 className="text-24md font-serif font-semibold">You might also like</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
        {products.map((product) => (
          <article key={product.id} className="flex flex-col items-center gap-2">
            <img className="object-cover w-full h-64 rounded" src={product.image} alt={`${product.name} Canvas`} />
            <div className="w-full max-w-[50%] flex justify-between items-center">
              <h3 className="text-16sm font-serif font-semibold capitalize">{product.name}</h3>
              <p className="text-16sm font-serif font-semibold">${product.price}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Recommendations;
