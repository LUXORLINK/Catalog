import { BrowserRouter, Route, Routes } from "react-router-dom"
import './index.js'
import Header from "./components/Header/Header.jsx"
import { Long } from "./pages/Logo/index.js"
import { Catalogs } from "./pages/Catalogs/index.js"
export const App = () => {

  return (
    <>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Long/>} />
        <Route path='/our' element={<Catalogs/>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
