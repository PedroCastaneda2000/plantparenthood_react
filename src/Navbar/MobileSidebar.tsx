import HeartProductCard from './HeartProductCard.tsx';
import darkIcon from "../assets/dark-logo-icon.svg";

const HeartSidebar = () => {

  const navLinks = [
    { id: 1, text: 'Home' },
    { id: 2, text: 'Plants' },
    { id: 3, text: 'Care' },
  ];

  const productLinks = [
    { id: 4, text: 'Your Wishlist' },
    { id: 5, text: 'Your Cart' },
  ];

  const userLinks = [
    { id: 6, text: 'Sign up / Log In' },
  ];
  return (
    <aside className="flex flex-col h-full pb-4 overflow-y-auto overflow-x-hidden hide-scrollbar">
      <header className="flex justify-center flex-col gap-1.5 mb-2">
        <img className='w-[104px] h-[48px]] object-cover md:hidden' src={darkIcon} alt="Logo" />
        <hr className="flex w-full h-[2px] bg-secondary-solid rounded mb-2"/>
        <div className='px-2 h-[40px] text-18sm text-black border-[1.5px]  border-black rounded flex justify-center items-center'>
          <input type="text" className={`w-full text-16sm text-black  placeholder:text-light-gray`} placeholder="Search Plants..." />
        </div>
      </header>
      
      <main className='flex flex-col gap-4 w-full text-black'>
        <ul className="flex flex-col gap-2 w-full">
          {navLinks.map(link => (
            <li key={link.id} className=''>
            <a className=' px-2 flex items-center w-full h-[48px] text-[#151823] text-16sm font-inter font-medium cursor-pointer hover:bg-[#151823] hover:text-white rounded transition duration-500 ease-in-out' href="#">{link.text}</a>
          </li>
          ))}
        </ul>
        <hr className="flex w-full h-[2px] bg-secondary-solid rounded"/>
        <ul className='flex flex-col gap-2 w-full'>
          {productLinks.map(link => (
              <li key={link.id} className=''>
              <a className='px-2  flex items-center w-full h-[48px] text-[#151823] text-16sm font-inter font-medium cursor-pointer hover:bg-[#151823] hover:text-white rounded transition duration-500 ease-in-out' href="#">{link.text}</a>
            </li>
            ))}
        </ul>
        
        <hr className="flex w-full h-[2px] bg-secondary-solid rounded " />
        <ul className='flex flex-col gap-2 w-full'>
          {userLinks.map(link => (
              <li key={link.id} className=''>
              <a className='px-2  flex items-center w-full h-[48px] text-[#151823] text-16sm font-inter font-medium cursor-pointer hover:bg-[#151823] hover:text-white rounded transition duration-500 ease-in-out' href="#">{link.text}</a>
            </li>
            ))}
        </ul>
        
      </main>
      <footer>
      </footer>
    </aside>

  );
}

export default HeartSidebar;