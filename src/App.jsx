import { BrowserRouter, Routes, Route } from "react-router-dom"

import Globalstyles from "./Globalstyles"
import Homepage from "./components/Homepage"
import Header from "./components/Header"

function App() {
  

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  )
}


export default App;
