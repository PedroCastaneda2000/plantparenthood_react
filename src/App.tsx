// import ProductHero from './sections/ProductHero'
// import ProductCard from './sections/ProductCard'
import Footer from './sections/Footer'
import ProductSection from './sections/ProductSection'
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