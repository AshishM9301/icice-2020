import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  const hoverCommittee = () => {
    return (
      <div className='text-base'>
        <div className='flex-col flex'>
          <div className='p-4 rounded hover:bg-blue-700'>Organising</div>
          <div className='p-4 rounded hover:bg-blue-700'>Advisory</div>
          <div className='p-4 rounded hover:bg-blue-700'>Technical</div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className='bg-blue-500 text-gray-100'>
        <div className='flex xl:flex-row flex-col justify-end text-base'>
          <Link to='/' className='p-4 hover:bg-blue-700'>
            Home
          </Link>
          <div className='p-4 hover:bg-blue-700'>About KIIT</div>
          <div className='p-4 hover:bg-blue-700'>Call for Paper</div>
          <div className='p-4 hover:bg-blue-700'>Registration</div>
          <div className='p-4 hover:bg-blue-700'>Important Dates</div>
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
          <div className='p-4 hover:bg-blue-700'>Sponsor</div>
          <div className='p-4 hover:bg-blue-700'>Invited Speaker</div>
          <div className='p-4 hover:bg-blue-700'> Paper Submission</div>
          <div className='p-4 hover:bg-blue-700'>Accomondation</div>
          <div className='p-4 hover:bg-blue-700'>Contact</div>
        </div>
      </div>
    </div>
  );
}
