import React from 'react';
import { Link } from 'react-router-dom';

import upload from '../../images/upload.jpg';
import Biswajit from '../../images/Biswajit.jpg';
import pmeena from '../../images/pmeena.jpg';
import manoj from '../../images/manoj.png';
import kannan from '../../images/kannan.png';
import Mahanty from '../../images/Mahanty.png';
import malcolm from '../../images/malcolm.png';

function LeftSideBar() {
  return (
    <div>
      <div className='border-4 border-green-600 p-4 rounded'>
        <div className='font-spartan bg-gary-100 text-gray-700 text-2xl p-4 text-center rounded'>
          <Link to='/register' className='flex'>
            <div className='w-32 mx-auto'>
              <img
                src={upload}
                className='rounded-full border max-w-full'
                alt='upload'
              />
            </div>
            <div className='self-center'>Conference Registration</div>
          </Link>
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
          <div className='h-64 overflow-hidden rounded text-sm shadow border'>
            <ul className='flip'>
              <li className=''>
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
                    target='_blank'
                    rel='noopener noreferrer'
                    class='text-center'>
                    Prof. Bibhuti Bhusan Biswal
                  </a>
                  <p>
                    Department of Industrial Design, National Institute of
                    Technology Rourkela
                  </p>
                </div>

                <div className='w-40 my-8 mx-auto'>
                  <img
                    class='max-w-full rounded shadow border'
                    src={manoj}
                    alt=' Prof Manoj K Tiwari'
                  />
                </div>
                <div className='my-4'>
                  <a
                    href='http://www.nitie.ac.in/about-director'
                    target='_blank'
                    rel='noopener noreferrer'
                    class='text-center'>
                    Prof Manoj K Tiwari
                  </a>
                  <p>Director NITIE Mumbai</p>
                </div>

                <div className='w-40 my-8 mx-auto'>
                  <img
                    class='max-w-full rounded shadow border'
                    src={malcolm}
                    alt=' Dr Malcolm Brady'
                  />
                </div>
                <div className='my-4'>
                  <a
                    href='https://business.dcu.ie/staff/dr-malcolm-brady/'
                    target='_blank'
                    rel='noopener noreferrer'
                    class='text-center'>
                    Dr Malcolm Brady
                  </a>
                  <p> Associate Professor Management in DCU Business School</p>
                </div>
                <div className='w-40 my-8 mx-auto'>
                  <img
                    class='max-w-full rounded shadow border'
                    src={kannan}
                    alt=' Kannan Govindan, M.E., PhD.,'
                  />
                </div>
                <div className='my-4'>
                  <a
                    href='https://portal.findresearcher.sdu.dk/en/persons/kgov'
                    target='_blank'
                    rel='noopener noreferrer'
                    class='text-center'>
                    Kannan Govindan, M.E., PhD.,
                  </a>
                  <p>
                    Professor, Head of the Center for Sustainable Supply Chain
                    Engineering at SDU{' '}
                  </p>
                </div>
                <div className='w-40 my-8 mx-auto'>
                  <img
                    class='max-w-full mx-auto rounded shadow border'
                    src={Mahanty}
                    alt='Biswajit Mahanty '
                  />
                </div>
                <div className='my-4'>
                  <a
                    href='http://www.iitkgp.ac.in/department/IM/faculty/im-bm'
                    target='_blank'
                    rel='noopener noreferrer'
                    class='text-center'>
                    Biswajit Mahanty
                  </a>
                  <p>
                    Professor, Industrial & Systems Engineering in IIT Kharagpur
                  </p>
                </div>

                <div className='w-40 my-8 mx-auto'>
                  <img
                    class='max-w-full rounded shadow border'
                    src={Biswajit}
                    alt='Prof. Biswajit Sarkar'
                  />
                </div>
                <div className='my-4'>
                  <a
                    href='https://drbiswajitsarkar.com/'
                    target='_blank'
                    rel='noopener noreferrer'
                    class='text-center'>
                    Prof. Biswajit Sarkar
                  </a>
                  <p>
                    Associate Professor, Department of Industrial Engineering,
                    Yonsei University, South Korea.
                  </p>
                </div>

                <div className='w-40 my-8 mx-auto'>
                  <img
                    class='max-w-full rounded shadow border'
                    src={pmeena}
                    alt='Dr Purushottam'
                  />
                </div>
                <div className='my-4'>
                  <a
                    href='https://www.nyit.edu/bio/pmeena'
                    target='_blank'
                    rel='noopener noreferrer'
                    class='text-center'>
                    Dr Purushottam Meena
                  </a>
                  <p>
                    Associate Professor, Operations Management New York
                    Institute of Technology, USA
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
