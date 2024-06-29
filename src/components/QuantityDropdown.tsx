import React from 'react';
import dropdownSmIcon from '../assets/dropdown-sm-icon.svg';
import useDropdown from '../hooks/useDropdown'; // Import the custom hook

interface QuantityDropdownProps {
  currentQuantity: number;
  onQuantityChange: (quantity: number) => void;
}

const QuantityDropdown: React.FC<QuantityDropdownProps> = ({ currentQuantity, onQuantityChange }) => {
  const { dropdownOpen, toggleDropdown, dropdownRef } = useDropdown();

  return (
    <div className="flex flex-col gap-2 relative">
      <label className="text-16sm capitalize font-inter">Quantity:</label>
      <div ref={dropdownRef}>
        <button
          className="bg-primary-white rounded shadow-primary-drop border border-primary-stroke w-[84px] h-[44px] px-[12px] flex justify-between items-center"
          onClick={toggleDropdown}
        >
          <span className='text-14sm'>{currentQuantity}</span>
          <img src={dropdownSmIcon} alt="Dropdown Icon" />
        </button>
        {dropdownOpen && (
          <div className="absolute top-full mt-2 bg-white shadow-primary-drop border border-primary-stroke rounded w-full z-10">
            {[1, 2, 3, 4, 5].map((quantity) => (
              <button
                key={quantity}
                className="flex justify-between items-center gap-2 p-2 w-full text-left hover:bg-lightgray"
                onClick={() => {
                  onQuantityChange(quantity);
                  toggleDropdown(); // Close dropdown after selecting a quantity
                }}
              >
                <span className="text-14sm capitalize font-inter">{quantity}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default QuantityDropdown;
