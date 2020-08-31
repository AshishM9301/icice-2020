import React from 'react';
import Biswajit from '../../images/Biswajit.jpg';
import biswajitdas from '../../images/biwajitdas.png';
import pmeena from '../../images/pmeena.jpg';
import manoj from '../../images/manoj.png';
import kannan from '../../images/kannan.png';
import Mahanty from '../../images/Mahanty.png';
import malcolm from '../../images/malcolm.png';

function KeyNoteSpeaker() {
  return (
    <div>
      <div className='font-spartan bg-blue-800 text-gray-300 text-3xl p-4 text-center rounded'>
        Keynote Speakers
      </div>
      <div className='text-2xl font-spartan text-center my-12 xl:w-1/2 mx-auto'>
        <div className='w-40 my-8 mx-auto'>
          <img
            className='max-w-full rounded shadow border'
            src='http://nitmeghalaya.in/nitmeghalaya/ckfinder/userfiles/images/dir.JPG'
            alt=' Prof. Bibhuti Bhusan Biswal'
          />
        </div>
        <div className='my-4'>
          <a
            href='http://2018nitm.nitmeghalaya.in/department/mechanical-engineering-1/faculty-7/dr-bibhuti-bhusan-biswal'
            target='_blank'
            rel='noopener noreferrer'
            className='text-center'>
            Prof. Bibhuti Bhusan Biswal
          </a>
          <p>Director, NIT Meghalaya</p>
        </div>

        <div className='w-40 my-8 mx-auto'>
          <img
            className='max-w-full rounded shadow border'
            src={biswajitdas}
            alt=' Dr. Biswajit Das'
          />
        </div>
        <div className='my-4'>
          <div className='text-center'>Dr. Biswajit Das</div>
          <p>Vice president & Practice Head, Innominds</p>
        </div>

        <div className='w-40 my-8 mx-auto'>
          <img
            className='max-w-full rounded shadow border'
            src={manoj}
            alt=' Prof Manoj K Tiwari'
          />
        </div>
        <div className='my-4'>
          <a
            href='http://www.nitie.ac.in/about-director'
            target='_blank'
            rel='noopener noreferrer'
            className='text-center'>
            Prof Manoj K Tiwari
          </a>
          <p>Director NITIE Mumbai</p>
        </div>

        <div className='w-40 my-8 mx-auto'>
          <img
            className='max-w-full rounded shadow border'
            src={malcolm}
            alt=' Dr Malcolm Brady'
          />
        </div>
        <div className='my-4'>
          <a
            href='https://business.dcu.ie/staff/dr-malcolm-brady/'
            target='_blank'
            rel='noopener noreferrer'
            className='text-center'>
            Dr Malcolm Brady
          </a>
          <p>Senior Lecturer in Management at DCU Business School, Dublin</p>
        </div>
        <div className='w-40 my-8 mx-auto'>
          <img
            className='max-w-full rounded shadow border'
            src={kannan}
            alt=' Kannan Govindan, M.E., PhD.,'
          />
        </div>
        <div className='my-4'>
          <a
            href='https://portal.findresearcher.sdu.dk/en/persons/kgov'
            target='_blank'
            rel='noopener noreferrer'
            className='text-center'>
            Kannan Govindan, M.E., PhD.,
          </a>
          <p>
            Professor, Head of the Center for Sustainable Supply Chain
            Engineering at SDU, Denmark
          </p>
        </div>
        <div className='w-40 my-8 mx-auto'>
          <img
            className='max-w-full mx-auto rounded shadow border'
            src={Mahanty}
            alt='Biswajit Mahanty '
          />
        </div>
        <div className='my-4'>
          <a
            href='http://www.iitkgp.ac.in/department/IM/faculty/im-bm'
            target='_blank'
            rel='noopener noreferrer'
            className='text-center'>
            Biswajit Mahanty
          </a>
          <p>Professor in Industrial & Systems Engineering at IIT Kharagpur</p>
        </div>

        <div className='w-40 my-8 mx-auto'>
          <img
            className='max-w-full rounded shadow border'
            src={Biswajit}
            alt='Prof. Biswajit Sarkar'
          />
        </div>
        <div className='my-4'>
          <a
            href='https://drbiswajitsarkar.com/'
            target='_blank'
            rel='noopener noreferrer'
            className='text-center'>
            Dr. Biswajit Sarkar
          </a>
          <p>
            Associate Professor in the Department of Industrial Engineering at
            Yonsei University, South Korea
          </p>
        </div>

        <div className='w-40 my-8 mx-auto'>
          <img
            className='max-w-full rounded shadow border'
            src={pmeena}
            alt='Dr Purushottam'
          />
        </div>
        <div className='my-4'>
          <a
            href='https://www.nyit.edu/bio/pmeena'
            target='_blank'
            rel='noopener noreferrer'
            className='text-center'>
            Dr Purushottam Meena
          </a>
          <p>
            Associate professor in management science at New York Institute of
            Technology (NYIT)
          </p>
        </div>
      </div>
    </div>
  );
}

export default KeyNoteSpeaker;
