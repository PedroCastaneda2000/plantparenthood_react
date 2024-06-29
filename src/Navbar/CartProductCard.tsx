// import React, { useState } from 'react';
// import 'swiper/swiper-bundle.css';

// import agloEmeraldCanvas from '../assets/Canvases/Aglo-Emerald-Canvas.png';
// import agloCamelCanvas from '../assets/Canvases/Aglo-Camel-Canvas.png';
// import agloCharcoalCanvas from '../assets/Canvases/Aglo-Charcoal-Canvas.png';
// import agloCobaltCanvas from '../assets/Canvases/Aglo-Cobalt-Canvas.png';
// import agloTangerineCanvas from '../assets/Canvases/Aglo-Tangerine-Canvas.png';
// import QuantityDropdown from '../components/QuantityDropdown';
// import ColorDropdown from '../components/ColorDropdown';

// interface CartProductCardProps {
//   selectedColor: string | null;
// }

// const CartProductCard = () => {
//   const [currentImage, setCurrentImage] = useState<string>(agloEmeraldCanvas);
//   const [currentColor, setCurrentColor] = useState<string>('emerald');
//   const [currentQuantity, setCurrentQuantity] = useState<number>(1);

//   const slides = [
//     { url: agloEmeraldCanvas, color: 'emerald' },
//     { url: agloCobaltCanvas, color: 'cobalt' },
//     { url: agloTangerineCanvas, color: 'tangerine' },
//     { url: agloCamelCanvas, color: 'camel' },
//     { url: agloCharcoalCanvas, color: 'charcoal' }
//   ];

//   const handleColorChange = (color: string) => {
//     const selectedSlide = slides.find(slide => slide.color === color);
//     if (selectedSlide) {
//       setCurrentColor(color);
//       setCurrentImage(selectedSlide.url);
//     }
//   };

//   const handleQuantityChange = (quantity: number) => {
//     setCurrentQuantity(quantity);
//   };

//   return (
//     <main className="flex flex-row text-black gap-4 w-full">
//       <img className="w-[112px] max-h-[120px] rounded object-cover" src={currentImage} alt={`${currentColor} Canvas`} />

//       <section className="w-full flex flex-col gap-4">
//         <header className="flex flex-row justify-between items-center w-full">
//           <h1 className="text-24md font-serif font-semibold">Algaonema</h1>
//           <h2 className="text-20md font-serif font-semibold">$39.99</h2>
//         </header>

//         <article className="flex flex-row items-center justify-between w-full">
//           <QuantityDropdown
//             currentQuantity={currentQuantity}
//             onQuantityChange={handleQuantityChange}
//           />

//           <ColorDropdown
//             currentColor={currentColor}
//             slides={slides}
//             onColorChange={handleColorChange}
//           />
//         </article>
//       </section>
//     </main>
//   );
// };

// export default CartProductCard;


import React, { useState } from 'react';
import Carousel from '../components/Carousel';
import QuantityDropdown from '../components/QuantityDropdown';
import ColorDropdown from '../components/ColorDropdown';
import 'swiper/swiper-bundle.css';

const CartProductCard: React.FC = () => {
  const [currentColor, setCurrentColor] = useState<string>('emerald');
  const [currentQuantity, setCurrentQuantity] = useState<number>(1);

  const handleColorChange = (color: string) => {
    setCurrentColor(color);
  };

  const handleQuantityChange = (quantity: number) => {
    setCurrentQuantity(quantity);
  };

  return (
    <main className="flex flex-row text-black gap-4 w-full">
      <div className='object-cover w-[112px] max-h-[123px] rounded'>
        <Carousel selectedColor={currentColor} />
      </div>

      <section className="w-full flex flex-col gap-4">
        <header className="flex flex-row justify-between items-center w-full">
          <h1 className="text-24md font-serif font-semibold">Aglaonema</h1>
          <h2 className="text-20md font-serif font-semibold">$39.99</h2>
        </header>

        <article className="flex flex-row items-center justify-between w-full">
          <QuantityDropdown
            currentQuantity={currentQuantity}
            onQuantityChange={handleQuantityChange}
          />

          <ColorDropdown
            currentColor={currentColor}
            onColorChange={handleColorChange}
          />
        </article>
      </section>
    </main>
  );
};

export default CartProductCard;
