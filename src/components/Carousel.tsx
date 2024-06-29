import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

import agloEmeraldCanvas from '../assets/Canvases/Aglo-Emerald-Canvas.png';
import agloCamelCanvas from '../assets/Canvases/Aglo-Camel-Canvas.png';
import agloCharcoalCanvas from '../assets/Canvases/Aglo-Charcoal-Canvas.png';
import agloCobaltCanvas from '../assets/Canvases/Aglo-Cobalt-Canvas.png';
import agloTangerineCanvas from '../assets/Canvases/Aglo-Tangerine-Canvas.png';

interface CarouselProps {
  selectedColor: string | null;
}

const Carousel: React.FC<CarouselProps> = ({ selectedColor }) => {
  const swiperRef = useRef<any>(null);

  const slides = [
    { url: agloEmeraldCanvas, color: 'emerald' },
    { url: agloCobaltCanvas, color: 'cobalt' },
    { url: agloTangerineCanvas, color: 'tangerine' },
    { url: agloCamelCanvas, color: 'camel' },
    { url: agloCharcoalCanvas, color: 'charcoal' }
  ];

  const findSlideIndex = (color: string) => slides.findIndex(slide => slide.color === color);

  useEffect(() => {
    if (selectedColor !== null && swiperRef.current) {
      const index = findSlideIndex(selectedColor);
      if (index !== -1) {
        swiperRef.current.swiper.slideTo(index);
      }
    }
  }, [selectedColor, slides]);

  return (
    <section className="w-full h-full flex justify-center items-center">
      <Swiper
        className="w-full h-full md:rounded"
        ref={swiperRef}
        slidesPerView={1}
        spaceBetween={0}
        speed={1200}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center">
            <img src={slide.url} alt={`${slide.color} Canvas`} className="object-cover w-full h-full" />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Carousel;
