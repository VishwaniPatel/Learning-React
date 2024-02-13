import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import './App.css'
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import ContactDetails from "./components/ContactDetails";
import PageNotFound from "./components/PageNotFound";

function App() {

  return (
    <>
      <Router>
      <Routes>
        {/* Basic Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        
        {/* Nested Routes */}
        <Route path="/contact" element={<Contact />}>
          {/* Dynamic Routes */}
          <Route path=":id" element={<ContactDetails />} />
        </Route>
        
        {/* Index Route */}
        {/* <Route index element={<Home />} /> */}
        
        {/* Page Not Found */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
