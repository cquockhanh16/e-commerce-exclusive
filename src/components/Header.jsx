import icon_search from "../assets/icon-search.png";
import icon_cart from "../assets/icon-cart.png";
import icon_heart from "../assets/icon-heart.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className=''>
        <div className='bg-[#000]'>
          <div className='container mx-auto py-3 relative text-right'>
            <select className='bg-transparent outline-none text-sm text-white'>
              <option>English</option>
            </select>
            <p className='absolute font-light text-[#FAFAFA] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
              <span className='font-semibold'> ShopNow</span>
            </p>
            <p className='absolute top-1/2 left-1/2'></p>
          </div>
        </div>
        <div className='container py-10 mx-auto flex justify-between items-center'>
          <div className='text-black text-2xl font-bold'>
            <Link to='/'>Exclusive</Link>
          </div>{" "}
          <div className='hidden md:flex text-lg font-medium space-x-8 text-[#000]'>
            <Link
              to='/'
              className='text-black hover:underline transition-all duration-300'>
              Home
            </Link>
            <Link
              to='/contact'
              className='text-black hover:underline transition-all duration-300 '>
              Contact
            </Link>
            <Link
              to='/about'
              className='text-black hover:underline transition-all duration-300 '>
              About
            </Link>
            <Link
              to='/sign-up'
              className='text-black hover:underline transition-all duration-300 '>
              Sign Up
            </Link>
          </div>
          <div className='hidden md:flex gap-6 items-center'>
            <div className='bg-[#F5F5F5] gap-4 px-5 py-1 flex items-center rounded'>
              <input
                className='w-full py-2 rounded-md bg-transparent outline-none'
                type='text'
                placeholder='What are you looking for? '
              />
              <button>
                <img className='w-9' src={icon_search} />
              </button>
            </div>
            <button className='text-black text-2xl rounded-md'>
              <img className='w-9' src={icon_heart} />
            </button>
            <button className='text-black text-2xl rounded-md'>
              <img className='w-9' src={icon_cart} />
            </button>
          </div>
        </div>
        <hr />
      </nav>
    </header>
  );
};

export default Header;
