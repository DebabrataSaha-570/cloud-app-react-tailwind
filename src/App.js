import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Support from './Components/Support/Support';
import AllInOne from './Components/AllInOne/AllInOne';
import Pricing from './Components/Pricing/Pricing';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <Support></Support>
      <AllInOne></AllInOne>
      <Pricing></Pricing>
      <Footer></Footer>
    </div>
  );
}

export default App;
