// import { FC } from 'react';
// import agloCamelCanvas from '../assets/Canvases/Aglo-Camel-Canvas.png';
// import agloCharcoalCanvas from '../assets/Canvases/Aglo-Charcoal-Canvas.png';
// import agloCobaltCanvas from '../assets/Canvases/Aglo-Cobalt-Canvas.png';
// import agloEmeraldCanvas from '../assets/Canvases/Aglo-Emerald-Canvas.png';
// import agloTangerineCanvas from '../assets/Canvases/Aglo-Tangerine-Canvas.png';

// interface ImageSelectionProps {
//   onImageSelect: (color: string) => void;
// }

// const ImageSelector: FC<ImageSelectionProps> = ({ onImageSelect }) => {
//   const handleImageClick = (color: string) => {
//     onImageSelect(color);
//   };

//   return (
//     <section className='hidden md:flex gap-4'>
//       <button onClick={() => handleImageClick('emerald')} className='opacity-75 hover:opacity-100 focus:opacity-100 transition duration-300'>
//         <img className='w-[180px] max-h-[192px] rounded object-cover' src={agloEmeraldCanvas} alt="Emerald Canvas" />
//       </button>
//       <button onClick={() => handleImageClick('cobalt')} className='opacity-75 hover:opacity-100 focus:opacity-100 transition duration-300'>
//         <img className='w-[180px] max-h-[192px] rounded object-cover' src={agloCobaltCanvas} alt="Cobalt Canvas" />
//       </button>
//       <button onClick={() => handleImageClick('tangerine')} className='opacity-75 hover:opacity-100 focus:opacity-100 transition duration-300'>
//         <img className='w-[180px] max-h-[192px] rounded object-cover' src={agloTangerineCanvas} alt="Tangerine Canvas" />
//       </button>
//       <button onClick={() => handleImageClick('camel')} className='opacity-75 hover:opacity-100 focus:opacity-100 transition duration-300'>
//         <img className='w-[180px] max-h-[192px] rounded object-cover' src={agloCamelCanvas} alt="Camel Canvas" />
//       </button>
//       <button onClick={() => handleImageClick('charcoal')} className='opacity-75 hover:opacity-100 focus:opacity-100 transition duration-300'>
//         <img className='w-[180px] max-h-[192px] rounded object-cover' src={agloCharcoalCanvas} alt="Charcoal Canvas" />
//       </button>
//     </section>
//   );
// };

// export default ImageSelector;

import { FC } from 'react';
import agloCamelCanvas from '../assets/Canvases/Aglo-Camel-Canvas.png';
import agloCharcoalCanvas from '../assets/Canvases/Aglo-Charcoal-Canvas.png';
import agloCobaltCanvas from '../assets/Canvases/Aglo-Cobalt-Canvas.png';
import agloEmeraldCanvas from '../assets/Canvases/Aglo-Emerald-Canvas.png';
import agloTangerineCanvas from '../assets/Canvases/Aglo-Tangerine-Canvas.png';

interface ImageSelectionProps {
  onImageSelect: (color: string) => void;
}

const ImageSelection: FC<ImageSelectionProps> = ({ onImageSelect }) => {
  const images = [
    { color: 'emerald', src: agloEmeraldCanvas, alt: 'Emerald Canvas' },
    { color: 'cobalt', src: agloCobaltCanvas, alt: 'Cobalt Canvas' },
    { color: 'tangerine', src: agloTangerineCanvas, alt: 'Tangerine Canvas' },
    { color: 'camel', src: agloCamelCanvas, alt: 'Camel Canvas' },
    { color: 'charcoal', src: agloCharcoalCanvas, alt: 'Charcoal Canvas' },
  ];

  return (
    <section className='hidden md:flex gap-4'>
      {images.map((image) => (
        <button
          key={image.color}
          onClick={() => onImageSelect(image.color)}
          className='opacity-75 hover:opacity-100 focus:opacity-100 transition duration-300'
          aria-label={`Select ${image.color} color`}
        >
          <img className='w-[180px] max-h-[192px] rounded object-cover' src={image.src} alt={image.alt} />
        </button>
      ))}
    </section>
  );
};

export default ImageSelection;
