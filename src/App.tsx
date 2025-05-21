import { useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Products from './components/Products'
import Cart from './components/Cart'
import AboutUs from './components/AboutUs'
import Testimonial from './components/Testimonial'

function App() {

  const [cart, setCart] = useState(false);
  const [navbar, setNavbar] = useState(false);

  return (
    <>
      <Navbar value={{ cart, setCart, navbar, setNavbar }} />
      <Cart value={{ cart }} />
      <div className="mt-18 px-4 lg:px-8">
        <Hero />
        <Products />
        <Testimonial />
        <AboutUs />
        <Footer />
      </div>
    </>
  )
}

export default App
