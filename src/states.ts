
export interface CarouselState {
  currentIndex: number;
  slides: { url: string; color: string }[];
}

export const initialState: CarouselState = {
  currentIndex: 0,
  slides: [
    { url: '../assets/Canvases/Aglo-Emerald-Canvas.png', color: 'emerald' },
    { url: '../assets/Canvases/Aglo-Cobalt-Canvas.png', color: 'cobalt' },
    { url: '../assets/Canvases/Aglo-Tangerine-Canvas.png', color: 'tangerine' },
    { url: '../assets/Canvases/Aglo-Camel-Canvas.png', color: 'camel' },
    { url: '../assets/Canvases/Aglo-Charcoal-Canvas.png', color: 'charcoal' }
  ]
};
