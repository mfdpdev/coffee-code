import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Products from './components/Products'

function App() {

  return (
    <>
      <Navbar />
      <div className="h-[1500px] mt-18 px-4 lg:px-8">
        <Hero />
        <Products />
      </div>
    </>
  )
}

export default App
