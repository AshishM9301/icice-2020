import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div>
      <div className='bg-blue-500 text-gray-100 text-base px-4'>
        <div className='flex xl:flex-row flex-col-reverse justify-between'>
          <div className='self-center'>
            Copyright ©2019 All rights reserved | ICICE-2020
          </div>
          <div className='flex sm:flex-row flex-col'>
            <Link to='/contact' className='p-4 hover:bg-blue-700'>
              Contact
            </Link>
            <Link to='/organising' className='p-4 hover:bg-blue-700'>
              Organise
            </Link>
            <a
              href='https://kiit.ac.in/about/'
              target='_blank'
              rel='noopener noreferrer'
              className='p-4 hover:bg-blue-700'>
              About
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
