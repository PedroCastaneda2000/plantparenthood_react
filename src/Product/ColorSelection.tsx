
// import React from 'react';

// interface ColorSelectionProps {
//   selectedColor: string;
//   onColorSelect: (color: string) => void;
// }

// const ColorSelection: React.FC<ColorSelectionProps> = ({ selectedColor, onColorSelect }) => {
//   const handleColorClick = (color: string) => {
//     onColorSelect(color);
//   };

//   return (
//     <section className='flex flex-col gap-4 w-full'>
//       <div className="text-2sm capitalize font-inter">
//         <p>color: <span className='font-semibold italic'>{selectedColor}</span></p>
//       </div>
//       <div className="flex gap-4">
//         <button onClick={() => handleColorClick('emerald')} className='flex justify-center items-center h-12 w-12 rounded-full hover:shadow-hover-stroke focus:shadow-clicked-stroke transition duration-300'>
//           <div className="bg-emerald h-10 w-10 rounded-full"></div>
//         </button>
//         <button onClick={() => handleColorClick('cobalt')} className='flex justify-center items-center h-12 w-12 rounded-full hover:shadow-hover-stroke focus:shadow-clicked-stroke transition duration-300'>
//           <div className="bg-cobalt h-10 w-10 rounded-full"></div>
//         </button>
//         <button onClick={() => handleColorClick('tangerine')} className='flex justify-center items-center h-12 w-12 rounded-full hover:shadow-hover-stroke focus:shadow-clicked-stroke transition duration-300'>
//           <div className="bg-tangerine h-10 w-10 rounded-full"></div>
//         </button>
//         <button onClick={() => handleColorClick('camel')} className='flex justify-center items-center h-12 w-12 rounded-full hover:shadow-hover-stroke focus:shadow-clicked-stroke transition duration-300'>
//           <div className="bg-camel h-10 w-10 rounded-full"></div>
//         </button>
//         <button onClick={() => handleColorClick('charcoal')} className='flex justify-center items-center h-12 w-12 rounded-full hover:shadow-hover-stroke focus:shadow-clicked-stroke transition duration-300'>
//           <div className="bg-charcoal h-10 w-10 rounded-full"></div>
//         </button>
//       </div>
//     </section>
//   );
// };

// export default ColorSelection;


import React from 'react';

interface ColorSelectionProps {
  selectedColor: string;
  onColorSelect: (color: string) => void;
}

const ColorSelection: React.FC<ColorSelectionProps> = ({ selectedColor, onColorSelect }) => {
  const handleColorClick = (color: string) => {
    onColorSelect(color);
  };

  const colors = ['emerald', 'cobalt', 'tangerine', 'camel', 'charcoal'];

  return (
    <main className='flex flex-col gap-4 w-full'>
      <header className="text-2sm capitalize font-inter">
        <p>Color: <span className='font-semibold italic'>{selectedColor}</span></p>
      </header>
      <section className="flex gap-4">
        {colors.map(color => (
          <button
            key={color}
            onClick={() => handleColorClick(color)}
            className='flex justify-center items-center h-12 w-12 rounded-full hover:shadow-hover-stroke focus:shadow-clicked-stroke transition duration-300'
            aria-label={`Select ${color} color`}
          >
            <div className={`bg-${color} h-10 w-10 rounded-full`}></div>
          </button>
        ))}
      </section>
    </main>
  );
};

export default ColorSelection;
