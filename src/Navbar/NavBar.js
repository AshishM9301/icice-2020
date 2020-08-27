import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  const [Display, setSidplay] = useState(false);

  const toggle = () => {
    setSidplay(!Display);
  };

  const hoverCommittee = () => {
    return (
      <div className='text-base'>
        <div className='flex-col flex'>
          <Link
            to='/organising'
            onClick={toggle}
            className='p-4 rounded hover:bg-blue-700'>
            Organising
          </Link>
          <Link
            to='/advisory'
            onClick={toggle}
            className='p-4 rounded hover:bg-blue-700'>
            Advisory
          </Link>
          <Link
            to='/technical'
            onClick={toggle}
            className='p-4 rounded hover:bg-blue-700'>
            Technical
          </Link>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className='bg-blue-500 text-gray-100'>
        <div className={`flex xl:flex-row flex-col xl:justify-end text-base`}>
          <div className='flex flex-row justify-between'>
            <Link to='/' className='p-4 hover:bg-blue-700'>
              Home
            </Link>
            <div className='p-4 hide'>
              <button onClick={toggle}>
                <i class='fa fa-bars'></i>
              </button>
            </div>
          </div>
          <div
            className={`${
              Display ? `block` : 'navhide'
            } flex flex-col xl:flex-row`}>
            <a
              href='https://kiit.ac.in/about/'
              target='_blank'
              rel='noopener noreferrer'
              className='p-4 hover:bg-blue-700'>
              About KIIT
            </a>
            <Link
              onClick={toggle}
              to='/callforpaper'
              className='p-4 hover:bg-blue-700'>
              Call for Paper
            </Link>
            <Link
              onClick={toggle}
              to='/register'
              className='p-4 hover:bg-blue-700'>
              Registration
            </Link>
            <Link
              onClick={toggle}
              to='/importantdates'
              className='p-4 hover:bg-blue-700'>
              Important Dates
            </Link>
            <div className='dropdown inline rounded hover:bg-blue-500 hover:text-gray-100 z-50'>
              <div className='relative block mr-3 bg-transparent hover:bg-blue-700 p-4 border border-blue-500 hover:border-transparent rounded'>
                Committees ▾
              </div>
              <div className='dropdown-menu absolute hidden h-auto flex pt-2'>
                <div className='block w-full rounded bg-blue-500 border border-blue-400 shadow px-4 py-2'>
                  <div className='flex flex-col'>{hoverCommittee()}</div>
                </div>
              </div>
            </div>

            <Link
              onClick={toggle}
              to='/keynotespeaker'
              className='p-4 hover:bg-blue-700'>
              Invited Speaker
            </Link>
            <Link
              onClick={toggle}
              to='/papersubmission'
              className='p-4 hover:bg-blue-700'>
              {' '}
              Paper Submission
            </Link>

            <Link
              onClick={toggle}
              to='/contact'
              className='p-4 hover:bg-blue-700'>
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
