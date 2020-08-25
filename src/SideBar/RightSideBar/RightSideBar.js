import React from 'react';
import easy from '../../images/easy.jpg';
import venue from '../../images/venue.jpg';

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
        <div className=' text-xl p-6 text-blue-700'>
          <div>Registration Form</div>
          <div>Publication</div>
          <div>Brochure</div>
          <div>Special Session</div>
        </div>
      </div>
      <div className='border-4 border-green-600 p-4 rounded'>
        <div className='font-spartan bg-blue-800 text-gray-300 text-3xl p-4 text-center rounded'>
          Conference Venue
        </div>
        <div className='w-full mx-auto p-6'>
          <img src={venue} alt='venue' className='max-w-full mx-auto' />
        </div>
        <div className='px-6 text-justify'>
          School of Mechanical Engineering, Kalinga Institute of Industrial
          Technology (KIIT), Deemed to be University, Bhubaneswar, Odisha,
          India, Pin: 751024
        </div>
      </div>
    </div>
  );
}

export default RightSideBar;
