
import './App.css'
import ProductCard from './components/ProductCard'

function App() {

  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 max-w-[1200px] mx-auto my-3 gap-3'>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
      </div>
    </>
  )
}

export default App
