import CartProductCard from './CartProductCard';
import SidebarFooter from './SidebarFooter';

const CartSidebar = () => {
  return (
    <aside className="flex flex-col h-full justify-between">
      <main className='flex flex-col gap-4 w-full'>
        <header className="flex justify-between items-center ">
          <h1 className='text-black text-20md font-semibold font-serif capitalize'>
            Your Cart <span className='text-16sm font-serif'>(3)</span>
          </h1>
        </header>
        <hr className="hidden md:flex w-full h-[1.5px] bg-secondary-solid rounded " />
        <section className='flex flex-col gap-8'>
          <CartProductCard />
          <CartProductCard />
          <CartProductCard />
        <SidebarFooter/>

        </section>
        
      </main>
      <footer>
      </footer>
    </aside>
  )
}

export default CartSidebar;
