import React from 'react';
import downloadlogo from '../../images/download-logo.png';

function Register() {
  return (
    <div>
      <div className='font-spartan bg-blue-800 text-gray-300 text-3xl p-4 text-center rounded'>
        Registration Details
      </div>
      <ul className='list-decimal  p-10 my-4'>
        <li className='pb-6 xl:text-3xl text-xl text-gray-700 font-didcat font-semibold'>
          Registration Fee
          <div className='md:w-2/3 mx-auto my-6 text-center'>
            <div className='bg-blue-500 rounded py-4 text-gray-100 '>
              Early Bird Rounds
            </div>
            <div>
              <div className='flex'>
                <div className='w-1/2 mx-auto border '>
                  <div className='p-4 xl:text-2xl bg-gray-800 rounded text-gray-100'>
                    Category
                  </div>
                </div>
                <div className='w-1/2 mx-auto border'>
                  <div className='p-4 xl:text-2xl bg-gray-800 rounded text-gray-100'>
                    Registration Fee
                  </div>
                </div>
              </div>
              <div className='text-base'>
                <div className='flex'>
                  <div className='w-1/2 mx-auto border '>
                    <div className='py-4'>Research Scholar/Students</div>
                  </div>
                  <div className='w-1/2 mx-auto border '>
                    <div className='py-4'>₹ 2,000</div>
                  </div>
                </div>
                <div className='flex'>
                  <div className='w-1/2 mx-auto border '>
                    <div className='py-4'>Academician</div>
                  </div>
                  <div className='w-1/2 mx-auto border '>
                    <div className='py-4'>₹ 3,000</div>
                  </div>
                </div>

                <div className='flex'>
                  <div className='w-1/2 mx-auto border '>
                    <div className='py-4'>Industrial Participant</div>
                  </div>
                  <div className='w-1/2 mx-auto border '>
                    <div className=''>₹ 4,000</div>
                  </div>
                </div>
                <div className='flex'>
                  {' '}
                  <div className='w-1/2 mx-auto border '>
                    <div className='py-4'>Only Participation</div>{' '}
                  </div>
                  <div className='w-1/2 mx-auto border '>
                    <div className='py-4'>₹ 1,000</div>
                  </div>
                </div>

                <div className='flex'>
                  {' '}
                  <div className='w-1/2 mx-auto border '>
                    <div className='py-4 border-b-0'>Foreign Delegates</div>
                  </div>
                  <div className='w-1/2 mx-auto border '>
                    <div className='py-4'>$ 50</div>
                  </div>
                </div>
              </div>
            </div>

            <div className='text-base'></div>
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
        <li className='pb-6 xl:text-3xl text-xl text-gray-700 font-didcat font-semibold'>
          <a
            href='https://docs.google.com/forms/d/e/1FAIpQLSebWxfFfchGHFKNNjBlq5YiXtQh1NFS8k7q5LjTUz0GL0ehXQ/viewform?usp=sf_link '
            className='text-blue-400'
            target='_blank'
            rel='noopener noreferrer'>
            Click Here to Register
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Register;
