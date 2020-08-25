import React from 'react';

function Footer() {
  return (
    <div>
      <div className='bg-blue-500 text-gray-100 text-base px-4'>
        <div className='flex justify-between'>
          <div className='self-center'>
            Copyright ©2019 All rights reserved | ICICE-2020
          </div>
          <div className='flex sm:flex-row flex-col'>
            <div className='p-4 hover:bg-blue-700'>Our Sponsors</div>
            <div className='p-4 hover:bg-blue-700'>Contact</div>
            <div className='p-4 hover:bg-blue-700'>Organise</div>
            <div className='p-4 hover:bg-blue-700'>About</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
