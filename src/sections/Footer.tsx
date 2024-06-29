import logoSecondIcon from '../assets/logo-second-icon.svg'
import FooterEmail from '../components/FooterEmail'
import LightButton from '../components/LightButton'
import FooterLinks from '../components/FooterLinks'
import FooterIcons from '../components/FooterIcons'

const Footer = () => {
  return (
    <footer className='bg-primary-gradient pt-24 pb-8 px-4 flex flex-col items-center gap-16 min-w-96 w-full md:px-16'>
      <div className="max-w-[1152px] w-full flex flex-col items-center gap-y-16 md:flex-row-reverse md:gap-y-0 md:justify-between md:items-start">
        <section className='flex flex-col items-center gap-4 max-w-96 md:min-w-[360px]'>
          <div className="flex flex-col gap-2">
            <h1 className='text-light text-24md font-serif font-semibold capitalize'>
              the green loop
            </h1>
            <p className='text-light text-16sm font-inter '>
              Join us for plant tips, exclusive offers, and a 10% welcome discount.
            </p>
          </div>
          <div className="flex flex-col gap-6 w-full">
            <div className="flex flex-col gap-2">
              <FooterEmail/>
              <LightButton text="Add to Bag"/>
            </div>
            <FooterIcons/>
          </div>
        </section>
        <FooterLinks/>
      </div>
      <section className='flex flex-col items-center gap-4 w-full'>
        <div className="w-full flex flex-col items-center gap-2">
          <img className='md:hidden' src={logoSecondIcon} alt="Logo Second Icon" />
          <div className="flex justify-between w-full text-white text-28md font-serif uppercase font-semibold">
            <h2>plant</h2>
            <h2>parenthood</h2>
          </div>
          <div className="bg-primary-white rounded-sm h-0.5 w-full"></div>
        </div>
        <p className='text-light font-inter'>
          ©2022 global.plantparenthood.com
        </p>
      </section>
    </footer>
  )
}

export default Footer
