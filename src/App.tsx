import React from 'react'
import Header from './sections/Header'
// import ProductHero from './sections/ProductHero'
// import ProductCard from './sections/ProductCard'
import Footer from './sections/Footer'
import ProductSection from './sections/ProductSection'
import NavbarComplete from '../src/components/NavbarComplete'
import Navbar from '../src/Navbar/Navbar'
// import ProductPage from './sections/ProductPage'

const App = () => {
  return (
    <main className=''>
      <Navbar/>
      {/* <Header/> */}
      <ProductSection/>
      <Footer/> 
    </main>
  )
}

export default App