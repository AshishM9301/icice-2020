import React from 'react';

function KeyNoteSpeaker() {
  return (
    <div>
      <div className='font-spartan bg-blue-800 text-gray-300 text-3xl p-4 text-center rounded'>
        Keynote Speakers
      </div>
      <div className='text-2xl font-spartan text-center my-12 xl:w-1/2 mx-auto'>
        <div className='w-40 my-8 mx-auto'>
          <img
            class='max-w-full rounded shadow border'
            src='http://nitmeghalaya.in/nitmeghalaya/ckfinder/userfiles/images/dir.JPG'
            alt=' Prof. Bibhuti Bhusan Biswal'
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

        <div className='w-40 my-8 mx-auto'>
          <img
            class='max-w-full rounded shadow border'
            src='http://www.nitie.ac.in/sites/default/files/Director-2019.png'
            alt=' Prof Manoj K Tiwari'
          />
        </div>
        <div className='my-4'>
          <a href='http://www.nitie.ac.in/about-director' class='text-center'>
            Prof Manoj K Tiwari
          </a>
          <p>Director NITIE Mumbai</p>
        </div>

        <div className='w-40 my-8 mx-auto'>
          <img
            class='max-w-full rounded shadow border'
            src='https://drbiswajitsarkar.com/wp-content/uploads/2019/08/190.jpg'
            alt='Prof. Biswajit Sarkar'
          />
        </div>
        <div className='my-4'>
          <a href='https://drbiswajitsarkar.com/' class='text-center'>
            Prof. Biswajit Sarkar
          </a>
          <p>
            Associate Professor, Department of Industrial Engineering, Yonsei
            University
          </p>
        </div>
      </div>
    </div>
  );
}

export default KeyNoteSpeaker;
