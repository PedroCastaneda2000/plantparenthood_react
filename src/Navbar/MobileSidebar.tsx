import HeartProductCard from './HeartProductCard.tsx';
import darkIcon from "../assets/dark-logo-icon.svg";

const HeartSidebar = () => {

  const navLinks = [
    { id: 1, text: 'Home' },
    { id: 2, text: 'Plants' },
    { id: 3, text: 'Care' },
  ];
  return (
    <aside className="flex flex-col h-full justify-between pb-4 overflow-y-auto overflow-x-hidden hide-scrollbar">
      <header className="flex justify-center flex-col gap-1.5 h-full">
      <img className='w-[104px] h-[48px]] object-cover md:hidden' src={darkIcon} alt="Logo" />
      <div className="flex w-full h-[1.5px] bg-secondary-solid rounded"></div>
      <div className='text-18sm text-black'>
        <h1>Search NOW</h1>
      </div>
            {/* Mobile Navigation Links */}
        <ul className="flex flex-col gap-4">
          {navLinks.map(link => (
            <li key={link.id} className='h-[48px] text-black text-16sm font-inter font-medium cursor-pointer hover:bg-primary-white rounded hover:shadow-primary-drop hover:border hover:border-primary-stroke p-2'>
              <a href="#">{link.text}</a>
            </li>
          ))}
        </ul>
        <div className="flex w-full h-[1.5px] bg-secondary-solid rounded"></div>
      </header>
      
    <main className='flex flex-col gap-4 w-full text-black'>
      <div className="">
        <img src="" alt="" />
        <h1>Profile</h1>
      </div>
      <h1>Your Cart</h1>
      <h1>Your Wishlist</h1>

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
      </section>
      
    </main>
    <footer>
    </footer>
  </aside>

  );
}

export default HeartSidebar;