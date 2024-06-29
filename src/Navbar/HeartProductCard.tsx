import { useState } from 'react';
import 'swiper/swiper-bundle.css';

import agloEmeraldCanvas from '../assets/Canvases/Aglo-Emerald-Canvas.png';
// import agloCamelCanvas from '../assets/Canvases/Aglo-Camel-Canvas.png';
// import agloCharcoalCanvas from '../assets/Canvases/Aglo-Charcoal-Canvas.png';
// import agloCobaltCanvas from '../assets/Canvases/Aglo-Cobalt-Canvas.png';
// import agloTangerineCanvas from '../assets/Canvases/Aglo-Tangerine-Canvas.png';

// interface CartProductCardProps {
//   selectedColor: string | null;
// }

const CartProductCard = () => {
  const [currentImage] = useState<string>(agloEmeraldCanvas);
  const [currentColor] = useState<string>('emerald');
  // const [currentQuantity, setCurrentQuantity] = useState<number>(1);

  // const slides = [
  //   { url: agloEmeraldCanvas, color: 'emerald' },
  //   { url: agloCobaltCanvas, color: 'cobalt' },
  //   { url: agloTangerineCanvas, color: 'tangerine' },
  //   { url: agloCamelCanvas, color: 'camel' },
  //   { url: agloCharcoalCanvas, color: 'charcoal' }
  // ];

  // const handleColorChange = (color: string) => {
  //   const selectedSlide = slides.find(slide => slide.color === color);
  //   if (selectedSlide) {
  //     setCurrentColor(color);
  //     setCurrentImage(selectedSlide.url);
  //   }
  // };

  // const handleQuantityChange = (quantity: number) => {
  //   setCurrentQuantity(quantity);
  // };

  return (
<main className="flex flex-col md:flex-row text-black gap-4 w-full">
  {/* Product Image */}
  <img className="md:w-[112px] max-h-[123pxpx] rounded object-cover" src={currentImage} alt={`${currentColor} Canvas`} />

  {/* Product Details Section */}
  <section className="flex flex-col gap-2 w-full">
    {/* Product Title and Price */}
    <header className="flex gap-y-2 justify-between items-center md:items-center">
      <h1 className="text-18sm md:text-24md font-serif font-semibold">Algaonema</h1>
      <h2 className="text-16sm md:text-20md font-serif font-semibold">$39.99</h2>
    </header>

    {/* Action Buttons */}
    <article className="flex flex-col justify-between gap-2 items-left text-14sm">
      {/* Add to Cart Button */}
      <p className='capitalize'>color: <span className='font-semibold italic'>{currentColor}</span></p>
      <div className="flex gap-2  md:justify-between items-left md:items-center">
        <button className="bg-primary-white rounded shadow-primary-drop border border-primary-stroke hover:bg-[#97373A] hover:text-white w-[128px]  md:w-[144px] h-[44px] px-[12px] flex justify-center items-center text-left transition duration-300">
        <h1 className="text-14sm capitalize font-medium font-inter">Add to Cart</h1>
        </button>

        {/* Remove Button */}
        <button className="bg-primary-white rounded shadow-primary-drop border border-primary-stroke hover:bg-[#520020] hover:text-white w-[84px] h-[44px] px-[12px] flex justify-center items-center transition duration-300">
          <h1 className="text-14sm capitalize font-medium font-inter">Remove</h1>
        </button>
      </div>
      
    </article>
  </section>
</main>

  );
};

export default CartProductCard;
