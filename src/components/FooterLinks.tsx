
const FooterLinks = () => {
  return (
    <footer className='flex flex-col items-center gap-y-[32px] md:flex-row md:flex-wrap md:items-start md:gap-[30px] w-full'>
      <section className="text-light flex flex-col gap-[8px] items-center md:items-start md:w-[168px]">
        <h2 className='text-light text-24md font-serif font-semibold capitalize'>My Platform</h2>
        <ul className='flex flex-col gap-[8px] items-center md:items-start'>
          <li><a className='text-16lk font-inter font-normal text-lightgray capitalize hover:underline underline-offset-8' href="#">My Account</a></li>
          <li><a className='text-16lk font-inter font-normal text-lightgray capitalize hover:underline underline-offset-8' href="#">Workshops</a></li>
          <li><a className='text-16lk font-inter font-normal text-lightgray capitalize hover:underline underline-offset-8' href="#">Track My Order</a></li>
          <li><a className='text-16lk font-inter font-normal text-lightgray capitalize hover:underline underline-offset-8' href="#">Returns Portal</a></li>
        </ul>
      </section>
      <section className="text-light flex flex-col gap-[8px] items-center md:items-start md:w-[168px]">
        <h2 className='text-24md font-serif font-semibold capitalize'>Resources</h2>
        <ul className='flex flex-col gap-[8px] items-center md:items-start'>
          <li><a className='text-16lk font-inter font-normal text-lightgray capitalize hover:underline underline-offset-8' href="#">Find Your Plant</a></li>
          <li><a className='text-16lk font-inter font-normal text-lightgray capitalize hover:underline underline-offset-8' href="#">Browse Plants</a></li>
          <li><a className='text-16lk font-inter font-normal text-lightgray capitalize hover:underline underline-offset-8' href="#">Plant Care Library</a></li>
        </ul>
      </section>
      <section className="text-light flex flex-col gap-[8px] items-center md:items-start md:w-[168px]">
        <h2 className='text-24md font-serif font-semibold capitalize'>Services</h2>
        <ul className='flex flex-col gap-[8px] items-center md:items-start'>
          <li><a className='text-16lk font-inter font-normal text-lightgray capitalize hover:underline underline-offset-8' href="#">FAQ</a></li>
          <li><a className='text-16lk font-inter font-normal text-lightgray capitalize hover:underline underline-offset-8' href="#">Shipping & Handling</a></li>
          <li><a className='text-16lk font-inter font-normal text-lightgray capitalize hover:underline underline-offset-8' href="#">30-Day Guarantee</a></li>
          <li><a className='text-16lk font-inter font-normal text-lightgray capitalize hover:underline underline-offset-8' href="#">Contact Us</a></li>
        </ul>
      </section>
      <section className="text-light flex flex-col gap-[8px] items-center md:items-start md:w-[168px]">
        <h2 className='text-24md font-serif font-semibold capitalize'>Explore</h2>
        <ul className='flex flex-col gap-[8px] items-center md:items-start'>
          <li><a className='text-16lk font-inter font-normal text-lightgray capitalize hover:underline underline-offset-8' href="#">Our Story</a></li>
          <li><a className='text-16lk font-inter font-normal text-lightgray capitalize hover:underline underline-offset-8' href="#">Location</a></li>
          <li><a className='text-16lk font-inter font-normal text-lightgray capitalize hover:underline underline-offset-8' href="#">Careers</a></li>
        </ul>
      </section>
      <section className="text-light flex flex-col gap-[8px] items-center md:items-start md:w-[168px] md:hidden">
        <h2 className='text-24md font-serif font-semibold capitalize'>Policies</h2>
        <ul className='flex flex-col gap-[8px] items-center md:items-start'>
          <li><a className='text-16lk font-inter font-normal text-lightgray capitalize' href="#">Affiliate Program</a></li>
          <li><a className='text-16lk font-inter font-normal text-lightgray capitalize' href="#">Term of Use</a></li>
          <li><a className='text-16lk font-inter font-normal text-lightgray capitalize' href="#">Privacy Policy</a></li>
          <li><a className='text-16lk font-inter font-normal text-lightgray capitalize' href="#">Accessibility</a></li>
        </ul>
      </section>
    </footer>
  );
}

export default FooterLinks;
