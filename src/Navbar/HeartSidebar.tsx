import DarkButton from '../components/DarkButton.tsx';
import HeartProductCard from './HeartProductCard.tsx';

const HeartSidebar = () => {
  return (
    <aside className="flex flex-col h-full justify-between">
    <main className='flex flex-col gap-4 w-full'>
      <header className="flex justify-between items-center ">
        <h1 className='text-black text-20md font-semibold font-serif capitalize'>
          Your Wishlist <span className='text-16sm font-serif'>(3)</span>
        </h1>
      </header>
      <hr className="hidden md:flex w-full h-[1.5px] bg-secondary-solid rounded " />
      <section className='flex flex-col gap-8'>
        <HeartProductCard />
        <HeartProductCard />
        <HeartProductCard />
        <DarkButton text="Continue to Cart"/>
      </section>
      
    </main>
    <footer>
    </footer>
  </aside>

  );
}

export default HeartSidebar;
