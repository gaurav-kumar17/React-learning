import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Product from "./Components/Product";
import Aisehi, {
  Myheading2 as Meranaam,
  Myheading3,
  Myheading4,
} from "./Components/MyHeading";
// import {} from './Components/MyHeading';
import "./Styles/App.css";

const App = () => {
  return (
    <>

      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          {/* product/:id means product/ ke baad kuch bhi likhne ko id mana jayega (yeh Dynamic URL hai) */}
          <Route path="/product/:id" element={<Product/>} />


          {/* Below * means / ke baad kuch bhi type karenge to "page not found " show karega */}
          
          {/* <Route path="*" element={<div>Page Not found 404</div>} /> */}
        </Routes>
      </BrowserRouter>

      {/* <Aisehi name="Gaurav Kumar" text="Nice one!"/>
      <Meranaam/>
      <Myheading3>
        name="My name is Gaurav kumar."
        // price="400"
      />
      <Myheading4/> */}
    </>
  );
};
export default App;
