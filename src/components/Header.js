import { LOGO_URL } from '../utils/constant';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useOnlineStatus } from '../Hooks/useOnlineStatus';
import { TiShoppingCart } from "react-icons/ti";
import { useSelector } from 'react-redux';

const Header = () => {

  const cartItems=useSelector((store)=>store.cart.items)
  const [btnName, setbtnName] = useState('login');
  const Status = useOnlineStatus();
  return (
    <div className='flex border border-black justify-between'>
      <div className='ml-16'>
        <img
          className='w-24 rounded-full'
          src={LOGO_URL}
          alt="Logo"
        />
      </div>

      <div className='mr-16 py-8 '>
        <ul className='flex justify-evenly'>
          <li className='mx-2'>onlineStatus:{Status ? '🟢' : '🔴'}</li>
          <li>
            {' '}
            <Link to='/about'>About us</Link>
          </li>
          <li className='mx-2'>
            <Link to='/'>Home</Link>
          </li>
          <li className='mx-2 mr-3 mt-1'><Link to="/cart"><TiShoppingCart size={20} color='green'/>{cartItems.length}</Link></li>
          <button className='mx-2'
            onClick={() => {
              btnName === 'login' ? setbtnName('Logout') : setbtnName('login');
            }}>
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
