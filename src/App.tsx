import './App.css'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Products from './components/Products'
import Testimonial from './components/Testimonial'

function App() {

  return (
    <>
      <Navbar />
      <div className="h-[1500px] mt-18 px-4 lg:px-8">
        <Hero />
        <Products />
        <Testimonial />
        <Footer />
      </div>
    </>
  )
}

export default App
