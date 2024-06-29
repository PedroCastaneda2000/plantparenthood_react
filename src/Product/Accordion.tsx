import { useState } from "react";
import dropdownIcon from '../assets/dropdown-icon.svg';
import waterIcon from "../assets/water-icon.svg";

const Accordion: React.FC = () => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleAccordion = (index: number) => {
    setOpenIndexes((prevIndexes) => {
      if (prevIndexes.includes(index)) {
        return prevIndexes.filter((i) => i !== index);
      } else {
        return [...prevIndexes, index];
      }
    });
  };

  const isOpen = (index: number) => openIndexes.includes(index);

  const getAccordionClass = (index: number) => {
    return `accordion-aria-style ${isOpen(index) ? 'expanded' : ''}`;
  };

  return (
    <main className='flex flex-col gap-4 md:max-h-[1226px]
    lg:max-h-[1018px] md:overflow-y-auto md:overflow-x-hidden hide-scrollbar md:w-full'>
      <article id="1" className='accordion-section bg-primary-white rounded shadow-primary-drop border border-primary-stroke w-full py-6 px-3 flex flex-col gap-4'>
        <button id='dropdownButton' aria-expanded={isOpen(1)} onClick={() => toggleAccordion(1)} className="flex flex-row justify-between">
          <h3 className='text-20md font-serif font-semibold capitalize'>Aglaonema Bio</h3>
          <img className={`w-6 h-8 ${isOpen(1) ? 'rotate-180' : 'rotate--180'}`} src={dropdownIcon} alt="Dropdown Icon" />
        </button>
        <div aria-hidden={!isOpen(1)} className={`${getAccordionClass(1)} transition-max-height duration-300 ease-in-out`}>
          <div className="flex flex-col gap-4 max-h-[1000px] overflow-y-auto">
            <p className='text-14sm font-inter font-normal'>Aglaonema 'Tropical Charm' isn't just a feast for the eyes—it's a beginner's best friend and an air-purifying powerhouse. With its mesmerizing foliage boasting shades of pink, green, and red, this plant brings a burst of positivity to any room. Perfect for those new to gardening, 'Tropical Charm' thrives with minimal care and forgives occasional lapses in watering or light exposure. Plus, it's pet-friendly, ensuring the safety of your furry friends. As a bonus, it excels at purifying indoor air, making your environment not just beautiful, but healthier too. Embrace the beauty and benefits of Aglaonema 'Tropical Charm' in your home or office and experience the joy of caring for a truly beginner-friendly, pet-friendly, and air-purifying plant.</p>
            <section className="flex flex-col gap-2">
              <h4 className='text-24md font-serif font-semibold capitalize'>Botanical Name</h4>
              <p className='text-14sm font-inter font-normal italic'>Aglaonema 'Siam'</p>
            </section>
            <section className="flex flex-col gap-2">
              <h4 className='text-24md font-serif font-semibold'>Common Name(s)</h4>
              <p className='text-14sm font-inter font-normal italic'>Red Chinese Evergreen, Siam Aglaonema, Siam Aurora, Aglaonema Firecracker, Siam Aurora Red Aglaonema, Siam</p>
            </section>
          </div>
        </div>
      </article>

      <article id="2" className='accordion-section bg-primary-white rounded shadow-primary-drop border border-primary-stroke w-full py-6 px-3 flex flex-col gap-4'>
        <button aria-expanded={isOpen(2)} onClick={() => toggleAccordion(2)} className="flex flex-row justify-between">
          <h3 className='text-20md font-serif font-semibold capitalize'>What's Included</h3>
          <img className={`w-6 h-8 ${isOpen(2) ? 'rotate-180' : 'rotate--180'}`} src={dropdownIcon} alt="Dropdown Icon" />
        </button>
        <div aria-hidden={!isOpen(2)} className={`${getAccordionClass(2)} transition-max-height duration-300 ease-in-out`}>
          <div className="flex flex-col gap-4 max-h-[1000px] overflow-y-auto">
            <p className='text-14sm font-inter font-normal'>
              <span className='font-semibold capitalize'>Sizing Overview: </span> 
              Your new botanical companion stands approximately 40cm tall, including the height of its stylish 13cm x 13.5cm green ridged ceramic pot and its 14.5cm dia. saucer.
            </p>
            <p className='text-14sm font-inter font-normal'>
              <span className='font-semibold capitalize'>Handy Care Tips: </span> 
              We've got you covered with super low maintenance care tips to ensure your plant thrives in its new home.
            </p>
            <p className='text-14sm font-inter font-normal'>
              <span className='font-semibold capitalize'>Eco-Friendly Packaging: </span> 
              Your plant will be delivered right to your doorstep in 100% recyclable and compostable packaging, with the pot included for your convenience.
            </p>
            <p className='text-14sm font-inter font-normal'>
              <span className='font-semibold capitalize'>Flexible Delivery Options: </span> 
              Choose between our free Royal Mail service or opt for our premium courier for delivery on your nominated day, ensuring your plant arrives when it suits you best.
            </p>
          </div>
        </div>
      </article>

      <article id="3" className='accordion-section bg-primary-white rounded shadow-primary-drop border border-primary-stroke w-full py-6 px-3 flex flex-col gap-4 mb-4'>
        <button aria-expanded={isOpen(3)} onClick={() => toggleAccordion(3)} className="flex flex-row justify-between">
          <h3 className='text-20md font-serif font-semibold  capitalize'>Details & Care</h3>
          <img className={`w-6 h-8 ${isOpen(3) ? 'rotate-180' : 'rotate--180'}`} src={dropdownIcon} alt="Dropdown Icon" />
        </button>
        <div aria-hidden={!isOpen(3)} className={`${getAccordionClass(3)} transition-max-height duration-300 ease-in-out`}>
          <div className="flex flex-col gap-4 max-h-[1000px] overflow-y-auto">
            <section className="flex flex-row gap-6">
              <img className='w-5 h-5' src={waterIcon} alt="Water Icon"/>
              <div className='flex flex-col justify-center'>
                <span className='font-semibold capitalize'>Sizing Overview: </span> 
                <p className='text-14sm font-inter font-normal'>
                  Lorem ipsum dolor sit amet consectetur. Id blandit sem consectetur sit faucibus vitae.
                </p>
              </div>
            </section>
            <section className="flex flex-row gap-6">
              <img className='w-5 h-5' src={waterIcon} alt="Water Icon"/>
              <div className='flex flex-col justify-center'>
                <span className='font-semibold capitalize'>Sizing Overview: </span> 
                <p className='text-14sm font-inter font-normal'>
                  Lorem ipsum dolor sit amet consectetur. Id blandit sem consectetur sit faucibus vitae.
                </p>
              </div>
            </section>
            <section className="flex flex-row gap-6">
              <img className='w-5 h-5' src={waterIcon} alt="Water Icon"/>
              <div className='flex flex-col justify-center'>
                <span className='font-semibold capitalize'>Sizing Overview: </span> 
                <p className='text-14sm font-inter font-normal'>
                  Lorem ipsum dolor sit amet consectetur. Id blandit sem consectetur sit faucibus vitae.
                </p>
              </div>
            </section>
            <section className="flex flex-row gap-6">
              <img className='w-5 h-5' src={waterIcon} alt="Water Icon"/>
              <div className='flex flex-col justify-center'>
                <span className='font-semibold capitalize'>Sizing Overview: </span> 
                <p className='text-14sm font-inter font-normal'>
                  Lorem ipsum dolor sit amet consectetur. Id blandit sem consectetur sit faucibus vitae.
                </p>
              </div>
            </section>
            <section className="flex flex-row gap-6">
              <img className='w-5 h-5' src={waterIcon} alt="Water Icon"/>
              <div className='flex flex-col justify-center'>
                <span className='font-semibold capitalize'>Sizing Overview: </span> 
                <p className='text-14sm font-inter font-normal'>
                  Lorem ipsum dolor sit amet consectetur. Id blandit sem consectetur sit faucibus vitae.
                </p>
              </div>
            </section>
          </div>
        </div>
      </article>
    </main>
  );
}

export default Accordion;
