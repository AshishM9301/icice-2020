import React from 'react';
import logo from '../images/logo.png';
import kiitlogo from '../images/kiit-logo-.png';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Header(props) {
  return (
    <div>
      <ToastContainer />
      <div className='flex xl:flex-row flex-col justify-between py-8 px-4'>
        <div className='flex mx-auto justify-between'>
          <div className='xl:w-40 mx-auto w-20 self-center'>
            <img src={logo} className='max-w-full mx-auto' alt='icice logo' />
          </div>
          <div className='px-4 xl:block hidden'>
            <div className='xl:text-2xl text-xl text-gray-800 font-spartan font-bold text-center'>
              <div className='text-3xl p-2'>ICICE-2020</div>
              <div className='text-3xl p-2 pb-4'>
                International Conference on Industry 4.0 & Circular Economy
              </div>
              <hr />
              <div className='pb-2 pt-4'>
                Organised by School of Mechanical Engineering, Kalinga Institute
                of Industrial Technology, Bhubaneswar, Odisha
              </div>
              <div>18th-20th December 2020</div>
            </div>
          </div>
          <div className='xl:w-40 mx-auto w-20 self-center'>
            <img
              src={kiitlogo}
              className='max-w-full mx-auto'
              alt='kiit logo'
            />
          </div>
        </div>
      </div>
      <div>
        <div className='md:w-11/12 mx-auto xl:block hidden py-6'>
          <div className='py-20 text-5xl text-ubuntu font-bold rounded text-center text-gray-300 image-cover'>
            International Conference on Industry 4.0 & Circular Economy
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
