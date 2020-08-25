import React from 'react';
import upload from '../../images/upload.jpg';

function LeftSideBar() {
  return (
    <div>
      <div className='border-4 border-green-600 p-4 rounded'>
        <div className='font-spartan bg-gary-100 text-gray-700 text-2xl p-4 text-center rounded'>
          <div className='flex'>
            <div className='w-32 mx-auto'>
              <img src={upload} className='rounded-full border max-w-full' />
            </div>
            <div className='self-center'>Conference Registration</div>
          </div>
        </div>
      </div>
      <div className='border-4 my-10 border-green-600 p-4 rounded'>
        <div className='font-spartan bg-blue-800 text-gray-300 text-3xl p-4 text-center rounded'>
          Latest Updates
        </div>
        <div className='p-6 text-xl text-center'>
          <div className='h-20 overflow-hidden rounded shadow border'>
            <ul className='move-uward'>
              <li className='h-24'>Paper Submission is Open</li>
              <li className='h-24'>Paper Submission is Open</li>
              <li className='h-24'>Paper Submission is Open</li>
              <li className='h-24'>Paper Submission is Open</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='border-4 my-10 border-green-600 p-4 rounded'>
        <div className='font-spartan bg-blue-800 text-gray-300 text-3xl p-4 text-center rounded'>
          Keynote Speakers
        </div>
        <div className='p-6 text-xl text-center'>
          <div className='h-64 overflow-hidden rounded shadow border'>
            <ul className='flip'>
              <li className='my-4'>
                <div className='w-40 mx-auto'>
                  <img
                    class='max-w-full'
                    src='http://nitmeghalaya.in/nitmeghalaya/ckfinder/userfiles/images/dir.JPG'
                  />
                </div>
                <div className='my-4'>
                  <a
                    href='http://2018nitm.nitmeghalaya.in/department/mechanical-engineering-1/faculty-7/dr-bibhuti-bhusan-biswal'
                    class='text-center'>
                    Prof. Bibhuti Bhusan Biswal
                  </a>
                  <p>Director NIT Meghalaya</p>
                </div>
              </li>
              <hr />
              <li className='my-12'>
                <div className='w-40 mx-auto'>
                  <img
                    class='max-w-full'
                    src='http://www.nitie.ac.in/sites/default/files/Director-2019.png'
                  />
                </div>
                <div>
                  <a
                    href='http://www.nitie.ac.in/about-director'
                    class='text-center'>
                    Prof Manoj K Tiwari
                  </a>
                  <p>Director NITIE Mumbai</p>
                </div>
              </li>
              <hr />

              <li className='my-12'>
                <div className='w-40 mx-auto'>
                  <img
                    class='max-w-full'
                    src='https://drbiswajitsarkar.com/wp-content/uploads/2019/08/190.jpg'
                  />
                </div>
                <div>
                  <a href='https://drbiswajitsarkar.com/' class='text-center'>
                    Prof. Biswajit Sarkar
                  </a>
                  <p>
                    Associate Professor, Department of Industrial Engineering,
                    Yonsei University
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSideBar;
