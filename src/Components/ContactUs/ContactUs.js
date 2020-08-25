import React from 'react';

function ContactUs() {
  return (
    <div>
      <div className='font-spartan bg-blue-800 text-gray-300 text-3xl p-4 text-center rounded'>
        Contact Us
      </div>
      <div className='text-xl font-spartan text-gray-900'>
        <div className='p-6 xl:text-3xl text-xl text-gray-700 font-didcat font-semibold'>
          Paper submission and Technical issues:
        </div>
        <div className='flex pb-6'>
          <div className='font-semibold'>Telephone No : </div>
          <div className='mx-2'>
            91-78944232868, 9937374811, 9090040315, 8327723978
          </div>
        </div>
        <div className='flex pb-6'>
          <div className='font-semibold'>Email : </div>
          <div>
            <a
              href='mailto:convener.icice@kiit.ac.in'
              className='text-blue-400 mx-2'>
              convener.icice@kiit.ac.in
            </a>
          </div>
        </div>
        <div className='flex pb-6'>
          <div className='font-semibold'>Telephone No : </div>
          <div className='mx-2'>
            Campus 8, School of Mechanical Engineering KIIT, Patia, Bhubaneswar
            Odisha, India PIN: 751024.
          </div>
        </div>
      </div>
      <div className='font-spartan bg-blue-800 text-gray-300 text-3xl p-4 text-center rounded'>
        How to reach us :-
      </div>
      <div className='text-xl font-spartan text-gray-900 my-6'>
        <div className='flex pb-6'>
          <div className='font-semibold'>Nearest Airport : </div>
          <div className='mx-2'>
            Biju Patnaik International Airport, Bhubaneswar: 12.9Km from KIIT
            App based cabs are also available from Airport and railway station.
          </div>
        </div>
        <div className='flex pb-6'>
          <div className='font-semibold'>Nearest Railway Station: </div>
          <div className='mx-2'>
            Bhubaneswar Railway Station: 12.5Km from KIIT
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
