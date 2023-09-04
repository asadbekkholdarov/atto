
import Navbar from './component/Navbar'
import Main from './component/Main'
import Footer from './component/Footer'
import Home from './component/Home'
import {Routes, Route } from 'react-router-dom'
import Tashuvchilar from './component/Views/Tashuvchilar'
import Yangiliklar from './component/Views/Yangiliklar'
import BizHaqimizda from './component/Views/BizHaqimizda'
import Kontakt from './component/Views/Kontakt'
function App() {
  return (
    <div>
      
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/tashuvchilar' element={<Tashuvchilar/>} ></Route>
        <Route path='/yangiliklar' element={<Yangiliklar/>} ></Route>
        <Route path='/about-us' element={<BizHaqimizda/>}></Route>
        <Route path='/kontakt' element={<Kontakt/>}></Route>
      </Routes>
    </div>
  )
}

export default App