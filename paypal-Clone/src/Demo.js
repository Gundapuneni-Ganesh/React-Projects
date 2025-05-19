import NavScrollExample from './Components/Navbar.js';
import DarkVariantExample from './Components/Cursoral.js';
import Business from './Components/business.js';
import Icons from './Components/Icons.js';
import GridExample from './Components/Cards.js';
import PhoneBlock from './Components/PhoneBlock.js';
import Brands from './Components/Brands.js';
import NavSignup from './Components/NavSignup.js';
import TermsCond from './Components/TermsCond.js';
import Footer from './Components/Footer.js';
// import Navbar from './Components/Navbar.js';
// import Login from './DataCredential/Login.jsx';
// import { Link } from 'react-router-dom';

function Demo1() {
  return (
    <div>
      {/* <Navbar></Navbar> */}
      <NavScrollExample/>
      <DarkVariantExample/>
      <Business/> 
      <GridExample/>
      <PhoneBlock/>
      <Icons/>
      <Brands/>
      <NavSignup/>
      <TermsCond/>
      <Footer/>
      {/* <Link to="./DataCredential/Login"><Login/></Link> */}
    </div>
  )
}
export default Demo1;