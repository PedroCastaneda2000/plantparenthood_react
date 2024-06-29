import React, { useState } from 'react';
import ProductContent from '../Product/ProductContent';
import ProductSlider from '../Product/ProductSlider';
import ProductRecommendations from '../Product/Recommendations';
import ImageSelection from '../Product/ImageSelection';
// import OriginalColorChoice from '../components/OriginalColorChoice';
import agloCamelCanvas from '../assets/Canvases/Aglo-Camel-Canvas.png';
import agloCharcoalCanvas from '../assets/Canvases/Aglo-Charcoal-Canvas.png';
import agloCobaltCanvas from '../assets/Canvases/Aglo-Cobalt-Canvas.png';
import agloEmeraldCanvas from '../assets/Canvases/Aglo-Emerald-Canvas.png';
import agloTangerineCanvas from '../assets/Canvases/Aglo-Tangerine-Canvas.png';

const colorToImageMap: { [key: string]: string } = {
  emerald: agloEmeraldCanvas,
  cobalt: agloCobaltCanvas,
  tangerine: agloTangerineCanvas,
  camel: agloCamelCanvas,
  charcoal: agloCharcoalCanvas,
};

const ProductSection: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState<string>('emerald');
  const [selectedImage, setSelectedImage] = useState<string>(colorToImageMap['emerald']);

  const handleColorSelect = (color: string) => {
    setSelectedColor(color);
    setSelectedImage(colorToImageMap[color]);
  };

  return (
    <section className='bg-solid-gradient flex justify-center items-center mb-8'>
      <div className="md:grid md:px-16 md:grid-cols-[minmax(0,1fr)_360px] md:gap-x-6 md:gap-y-6 md:py-4 w-full max-w-screen-xl">
        <div className="md:grid-row-1">
          <ProductSlider selectedColor={selectedImage} />
          <div className="hidden flex-col gap-4 md:flex md:mt-4 md:gap-6">
            <ImageSelection onImageSelect={handleColorSelect} />
            <ProductRecommendations />
          </div>
        </div>
        
        <div className="md:grid-row-2 md:max-w-360 md:col-span-1">
          <ProductContent onColorSelect={handleColorSelect} selectedColor={selectedColor} />
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
