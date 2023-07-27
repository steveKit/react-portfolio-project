import { BrowserRouter, Routes, Route } from "react-router-dom"

import GlobalStyle from "./GlobalStyle"
import Homepage from "./components/Homepage"
import Header from "./components/Header"
import About from "./components/About"

function App() {
  

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}


export default App;
