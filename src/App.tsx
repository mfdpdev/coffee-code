import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <Navbar />
      <div className="h-[1500px] mt-18">
        <Hero />
      </div>
    </>
  )
}

export default App
