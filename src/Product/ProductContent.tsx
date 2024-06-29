import React from 'react';
import ColorSelection from './ColorSelection';
import Accordion from './Accordion';
import DarkButton from '../components/DarkButton';
import Recommendations from './Recommendations';

interface ProductContentProps {
  onColorSelect: (color: string) => void;
  selectedColor: string;
}

const ProductContent: React.FC<ProductContentProps> = ({ onColorSelect, selectedColor }) => {
  return (
    <main className='w-full rounded-t-[3.5rem] flex flex-col justify-top items-center px-4 py-6 md:px-0 md:min-w-[360px] md:px-0 md:rounded-none'>
      {/* Product Breadcrumb */}
      <nav aria-label="breadcrumb" className='w-full'>
        <ul className='flex flex-row justify-between gap-4 mb-4 md:hidden'>
          <li><a href="/">Home</a></li>
          <li><a href="/product">Product</a></li>
          <li><a href="/product/aglo">Aglaonema</a></li>
        </ul>
      </nav>
      {/* Product Header */}
    
      <header className='flex flex-col items-center w-full selection:max-w-96 gap-4 mb-4'>
        <div className=" flex flex-col w-full items-start gap-4">
          <div className="flex justify-between items-center w-full">
            <h1 className='text-32md font-semibold font-serif capitalize'>Aglaonema</h1>
            <span className='text-24md font-semibold font-serif capitalize'>$39</span>
          </div>
          <p className='text-16sm font-normal'>Indigenous to the tropical regions of Asia</p>
        </div>
        <hr className="bg-primary-shade rounded-sm h-0.5 w-full" />
        <section className="flex flex-col gap-8 w-full">
          <ColorSelection onColorSelect={onColorSelect} selectedColor={selectedColor} />
          <DarkButton text="Add to Bag" />
        </section>
      </header>
      <section className='w-full'>
        <Accordion />
      </section>
      <section className="flex md:hidden w-full">
        <Recommendations />
      </section>
    </main>
  );
};

export default ProductContent;
