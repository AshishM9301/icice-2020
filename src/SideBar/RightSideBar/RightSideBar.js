import React from 'react';
import { Link } from 'react-router-dom';
import easy from '../../images/easy.jpg';
import springer from '../../images/springer.jpg';
import spocus from '../../images/spocus.jpg';

function RightSideBar() {
  return (
    <div>
      <div className='border-4 border-green-600 p-4 rounded'>
        <div className='font-spartan bg-blue-800 text-gray-300 text-3xl p-4 text-center rounded'>
          Paper Submission
        </div>
        <a
          href='https://easychair.org/conferences/?conf=icice2020'
          className='w-full p-6'>
          <img src={easy} alt='easy' className='max-w-full mx-auto' />
        </a>
      </div>
      <div className='border-4 border-green-600 p-4 my-10 rounded'>
        <div className='font-spartan bg-blue-800 text-gray-300 text-3xl p-4 text-center rounded'>
          Information for Author
        </div>
        <div className=' text-xl flex flex-col leading-loose p-6 text-blue-700'>
          <Link to='/register'>Registration Form</Link>
          <Link to='/callforpaper'>Call for Paper</Link>
          <Link to='importantdates'>Important Dates</Link>
        </div>
      </div>
      <div className='border-4 border-green-600 p-4 rounded'>
        <div className='font-spartan bg-blue-800 text-gray-300 text-3xl p-4 text-center rounded'>
          Proceedings indexed by
        </div>

        <div className='w-full mx-auto p-6'>
          <img
            src={springer}
            alt='venue'
            className='max-w-full rounded border p-4 mx-auto'
          />
        </div>
        <div className='w-full mx-auto p-6'>
          <img
            src={spocus}
            alt='spocus'
            className='max-w-full rounded border p-4 mx-auto'
          />
        </div>
      </div>
    </div>
  );
}

export default RightSideBar;
