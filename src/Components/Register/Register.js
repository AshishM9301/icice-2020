import React from 'react';
import downloadlogo from '../../images/download-logo.png';

function Register() {
  return (
    <div>
      <div className='font-spartan bg-blue-800 text-gray-300 text-3xl p-4 text-center rounded'>
        Register Details
      </div>
      <ul className='list-decimal  p-10 my-4'>
        <li className='pb-6 xl:text-3xl text-xl text-gray-700 font-didcat font-semibold'>
          Registration Fee
          <div className='md:w-2/3 mx-auto my-6 text-center'>
            <div className='bg-blue-500 rounded py-4 text-gray-100 '>
              Early Bird Rounds
            </div>
            <div className='flex'>
              <div className='w-1/2 mx-auto border '>
                <div className='p-4 xl:text-2xl bg-gray-800 rounded text-gray-100'>
                  Category
                </div>
                <div className='text-base'>
                  <div className='border py-4'>Research Scholar/Students</div>
                  <div className='border py-4'>Academician</div>
                  <div className='border py-4'>Industrial Participant</div>
                  <div className='border py-4'>Only Participation</div>
                  <div className='border py-4 border-b-0'>
                    Foreign Delegates
                  </div>
                </div>
              </div>

              <div className='w-1/2 mx-auto border'>
                <div className='p-4 xl:text-2xl bg-gray-800 rounded text-gray-100'>
                  Registration Fee
                </div>
                <div className='text-base'>
                  <div className='border py-4'>₹ 6,000</div>
                  <div className='border py-4'>₹ 7,000</div>
                  <div className='border py-4'>₹ 8,000</div>
                  <div className='border py-4'>₹ 2,000</div>
                  <div className='border py-4'>$ 200</div>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li className='pb-6 xl:text-3xl text-xl text-gray-700 font-didcat font-semibold'>
          Author/Co-Author Registration Fee Includes:
          <div className='text-xl font-spartan font-normal px-6 py-2'>
            <ul className='list-disc list-inside '>
              <li>Welcome reception</li>
              <li>Conference Kit</li>
              <li>Snacks</li>
              <li>Lunch</li>
              <li>Founders Dinner</li>
            </ul>
          </div>
        </li>
        <li className='pb-6 xl:text-3xl text-xl text-gray-700 font-didcat font-semibold'>
          Please send the scanned copy of duly filled form to
          <a href='mailto:convener.icice@kiit.ac.in' className='text-blue-500'>
            convener.icice@kiit.ac.in
          </a>
          along with the proof of fee submission.
        </li>
        <li className='pb-6 xl:text-3xl text-xl text-gray-700 font-didcat font-semibold '>
          <div className='flex'>
            <div className='self-center'>
              Link to Download Registration form{' '}
            </div>
            <div className='w-20 mx-10'>
              <img
                src={downloadlogo}
                className='max-w-full'
                alt='download form'
              />
            </div>
          </div>
        </li>
        <li className='pb-6 xl:text-3xl text-xl text-gray-700 font-didcat font-semibold '>
          <div className='flex'>
            <div className='self-center'>Account Details</div>
            <div className='w-20 mx-10'>
              <img
                src={downloadlogo}
                className='max-w-full'
                alt='download form'
              />
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Register;
