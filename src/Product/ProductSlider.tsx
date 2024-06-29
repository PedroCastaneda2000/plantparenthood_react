import React from 'react';
import Carousel from '../components/Carousel';

interface ProductSliderProps {
  selectedColor: string | null;
}

const ProductSlider: React.FC<ProductSliderProps> = ({ selectedColor }) => {
  return (
    <main className='md:max-w-[768px]'>
      <Carousel selectedColor={selectedColor} />
    </main>
  );
};

export default ProductSlider;
