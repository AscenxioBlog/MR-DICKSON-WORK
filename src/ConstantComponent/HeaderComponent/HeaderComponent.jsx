// Header.tsx
import { FaShoppingCart, FaUser, FaCaretDown } from 'react-icons/fa';
import UserPopup from '../UserProfile/UserPopup';
import { AuthContxt } from '../../UI/AuthenticationComponent/AuthContext';
import { useContext, useState } from 'react';
import { CartContext } from '../../ReusableComponent/CartContext';
import { Link } from 'react-router-dom';
import { MdMenu } from 'react-icons/md';
import HiddenNav from './HiddenNav';

const HeaderComponent = () => {
  const {forPopup} = useContext(AuthContxt);
  const { cart } = useContext(CartContext); // Access cart from context
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0); 

  let [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }
  
  return (
    <header className="bg-[#B6B09F] h-[80px] md:h-[60px] shadow-md border-b-[1px] border-gray-300 fixed top-0 w-full z-50">
      {/* <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center text-sm">
        <div className="text-gray-700">📞 +234 80 9402 5524</div>
        <div className="text-gray-700 hidden md:block">🕒 Mon - Fri: 09:00AM - 05:00PM</div>
      </div> */}
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <nav className="hidden md:flex space-x-5 text-black text-[0.9rem]">
          <a href="/">Home</a>
          {/* <a href="/about">About</a> */}
          <a href="/Contact">Contact</a>
          <a href="/shop">Shop</a>
        </nav>
        <Link to="/" >
            <h1 className=' font-montserrat md:text-[1.5rem] font-extrabold tracking-tighter text-gray-700'>BABAKAZO STORES </h1>
        </Link>
       
        <div className="flex space-x-4 text-gray-800 ">
            <section onClick={forPopup} className=' flex gap-2 items-center hover:text-sky-500 cursor-pointer hover:font-bold duration-150'>
              <FaUser className="cursor-pointer" />
              <span className="text-[0.8rem]"></span>
              <FaCaretDown className=' -ml-1'/>
            </section>
            <section className=' flex gap-2 items-center text-sky-500 cursor-pointer hover:text-black duration-150'>
                <FaShoppingCart className="cursor-pointer" />
                <Link
                  to={'/cart'} 
                  className='relative flex items-center justify-center  rounded-md'
                  >
                  <span className="text-[0.8rem]">CART: <span>{totalItems}</span></span>
                </Link>
            </section>
            <div className=' md:hidden'>
                  <button className=' bg-black text-white p-2 rounded-[5px] text-[20px]' onClick={toggleMenu}><MdMenu/></button>
              </div>
        </div>
      </div>
        <UserPopup/>
        <HiddenNav isOpen={isOpen} toggleMenu={toggleMenu}/>
    </header>
  );
};

export default HeaderComponent;
