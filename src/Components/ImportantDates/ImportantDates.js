import React from 'react';

function ImportantDates() {
  return (
    <div>
      <div className='font-spartan bg-blue-800 text-gray-300 text-3xl p-4 text-center rounded'>
        Important Dates
      </div>
      <div className='my-12 mx-auto flex xl:flex-row flex-col text-center shadow rounded text-xl'>
        <div className='xl:w-1/4 w-full bg-blue-600 mx-auto border self-center'>
          <div className='bg-blue-600 text-gray-100 py-16'>Important Dates</div>
        </div>
        <div className='flex xl:flex-col flex-row'>
          <div className='flex flex-col xl:flex-row bg-blue-800 rounded text-gray-100 '>
            <div className='xl:w-1/4 border py-4'>
              Deadline for the full paper submission
            </div>
            <div className='xl:w-1/4 border py-4'>
              Notification for paper Acceptance
            </div>
            <div className='xl:w-1/4 border py-4'>
              Deadline for Camera-ready paper submission
            </div>
            <div className='xl:w-1/4 border py-4'>
              Early registration Deadline
            </div>
          </div>
          <div className='flex flex-col xl:flex-row'>
            <div className='xl:w-1/4 border xl:py-4'>30 September 2020</div>
            <div className='xl:w-1/4 border xl:py-4'>15 November-2020</div>
            <div className='xl:w-1/4 border xl:py-4'>25 November-2020</div>
            <div className='xl:w-1/4 border xl:py-4'>5 December-2020</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImportantDates;
