import DarkButton from '../components/DarkButton';

const SidebarFooter = () => {
  return (
    <footer className='flex flex-col w-full gap-4'>
      <hr className="hidden md:flex w-full h-[1.5px] bg-secondary-solid rounded" />
      <dl className="flex flex-col w-full gap-4 text-black mb-4">
        <div className='flex justify-between w-full'>
          <dt className='text-16sm font-inter'>Shipping</dt>
          <dd className='text-16sm font-inter'>Free</dd>
        </div>
        <div className='flex justify-between w-full capitalize'>
          <dt className='text-16sm font-inter'>Total Savings</dt>
          <dd className='text-16sm font-inter'>-$25.80</dd>
        </div>
        <div className='flex justify-between w-full capitalize '>
          <dt className='text-20md font-semibold font-serif'>Subtotal</dt>
          <dd className='text-20md font-semibold font-serif'>$232.20</dd>
        </div>
      </dl>
      <DarkButton text="Continue to Checkout" />
    </footer>
  )
}

export default SidebarFooter;
