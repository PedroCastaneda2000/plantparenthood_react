// import React from 'react';
// import dropdownSmIcon from '../assets/dropdown-sm-icon.svg';
// import useDropdown from '../hooks/useDropdown';

// interface ColorDropdownProps {
//   currentColor: string;
//   slides: { url: string; color: string }[];
//   onColorChange: (color: string) => void;
// }

// const ColorDropdown: React.FC<ColorDropdownProps> = ({ currentColor, slides, onColorChange }) => {
//   const { dropdownOpen, toggleDropdown, dropdownRef } = useDropdown();

//   const handleColorChange = (color: string) => {
//     onColorChange(color);
//     toggleDropdown();
//   };

//   return (
//     <div className="flex flex-col gap-2 relative">
//       <label className="text-14sm capitalize font-inter">Color:</label>
//       <div ref={dropdownRef}>
//         <button
//           className="bg-primary-white rounded shadow-primary-drop border border-primary-stroke w-[144px] h-[44px] px-[12px] flex justify-between items-center"
//           onClick={toggleDropdown}
//         >
//           <div className="flex justify-between items-center gap-2">
//             <div className="flex justify-center items-center h-7 w-7 rounded-full shadow-clicked-stroke">
//               <div className={`bg-${currentColor} h-5 w-5 rounded-full`}></div>
//             </div>
//             <span className="text-14sm capitalize font-inter">{currentColor.charAt(0).toUpperCase() + currentColor.slice(1)}</span>
//           </div>
//           <img src={dropdownSmIcon} alt="Dropdown Icon" />
//         </button>
//         {dropdownOpen && (
//           <div className="absolute top-full mt-2 bg-white shadow-primary-drop border border-primary-stroke rounded w-full z-10">
//             {slides.map((slide, index) => (
//               <button
//                 key={index}
//                 className="flex items-center gap-2 p-2 w-full text-left hover:bg-lightgray"
//                 onClick={() => handleColorChange(slide.color)}
//               >
//                 <div className="flex justify-center items-center h-7 w-7 rounded-full shadow-clicked-stroke">
//                   <div className={`bg-${slide.color} h-5 w-5 rounded-full`}></div>
//                 </div>
//                 <span className="text-14sm capitalize font-inter ">{slide.color.charAt(0).toUpperCase() + slide.color.slice(1)}</span>
//               </button>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ColorDropdown;


import React from 'react';
import dropdownSmIcon from '../assets/dropdown-sm-icon.svg';
import useDropdown from '../hooks/useDropdown';

interface ColorDropdownProps {
  currentColor: string;
  onColorChange: (color: string) => void;
}

const ColorDropdown: React.FC<ColorDropdownProps> = ({ currentColor, onColorChange }) => {
  const { dropdownOpen, toggleDropdown, dropdownRef } = useDropdown();

  const colors = [
    'emerald', 'cobalt', 'tangerine', 'camel', 'charcoal'
  ];

  const handleColorChange = (color: string) => {
    onColorChange(color);
    toggleDropdown();
  };

  return (
    <div className="flex flex-col gap-2 relative">
      <label className="text-16sm capitalize font-inter">Color:</label>
      <div ref={dropdownRef}>
        <button
          className="bg-primary-white rounded shadow-primary-drop border border-primary-stroke w-[144px] h-[44px] px-[12px] flex justify-between items-center"
          onClick={toggleDropdown}
        >
          <div className="flex justify-between items-center gap-2">
            <div className="flex justify-center items-center h-7 w-7 rounded-full shadow-clicked-stroke">
              <div className={`bg-${currentColor} h-5 w-5 rounded-full`}></div>
            </div>
            <span className="text-14sm capitalize font-inter">{currentColor.charAt(0).toUpperCase() + currentColor.slice(1)}</span>
          </div>
          <img src={dropdownSmIcon} alt="Dropdown Icon" />
        </button>
        {dropdownOpen && (
          <div className="absolute top-full mt-2 bg-white shadow-primary-drop border border-primary-stroke rounded w-full z-10">
            {colors.map((color, index) => (
              <button
                key={index}
                className="flex items-center gap-2 p-2 w-full text-left hover:bg-lightgray"
                onClick={() => handleColorChange(color)}
              >
                <div className="flex justify-center items-center h-7 w-7 rounded-full shadow-clicked-stroke">
                  <div className={`bg-${color} h-5 w-5 rounded-full`}></div>
                </div>
                <span className="text-14sm capitalize font-inter">{color.charAt(0).toUpperCase() + color.slice(1)}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ColorDropdown;
