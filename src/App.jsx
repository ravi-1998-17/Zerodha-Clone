import './App.css'
import HomePage from './landing_page/home/HomePage'
import SignUp from './landing_page/signup/SignUp'
import AboutPage from './landing_page/about/AboutPage'
import ProductsPage from './landing_page/products/ProductsPage'
import PricingPage from './landing_page/pricing/PricingPage'
import SupportPage from './landing_page/support/SupportPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './landing_page/Navbar'
import Footer from './landing_page/Footer'
import NoteFound from './landing_page/NoteFound'
function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/home' element={<HomePage />}></Route>
          <Route path='/about' element={<AboutPage />}></Route>
          <Route path='/product' element={<ProductsPage />}></Route>
          <Route path='/pricing' element={<PricingPage />}></Route>
          <Route path='/support' element={<SupportPage />}></Route>
          <Route path='/signup' element={<SignUp />}></Route>
          <Route path='*' element={<NoteFound />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
