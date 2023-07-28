import { BrowserRouter, Routes, Route } from "react-router-dom"

import GlobalStyle from "./GlobalStyle"
import Homepage from "./components/Homepage"
import Header from "./components/Header"
import About from "./components/About"
import Contact from "./components/Contact"
import Projects from "./components/Projects"

function App() {
  

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        {/* <Route path="/project/:projectId" element={<ProjectExample />} /> */}
      </Routes>
    </BrowserRouter>
  )
}


export default App;
