import React from 'react';
import download from '../../images/download.png';
import easy from '../../images/easy.jpg';

function PaperSubmission() {
  return (
    <div>
      <div className='font-spartan bg-blue-800 text-gray-300 text-3xl p-4 text-center rounded'>
        Paper Submission
      </div>
      <div className='text-xl font-spartan px-6 py-2 text-justify my-12'>
        <div>
          Paper should be in the format strictly specified on the conference
          website. Only Author(s) of the selected papers will get the intimation
          about whose articles will be accepted for publication. Kindly do not
          submit the paper multiple times; it may lead to cancellation of an
          article/paper.
        </div>
        <div className='border bg-gray-800 my-6 text-gray-100 font-ubuntu text-3xl text-center p-6'>
          Note: All papers will be checked with advanced plagiarism detection
          tools like Turn it in or iThenticate.
        </div>
        <div className='w-40 my-16 mx-auto'>
          <img src={download} alt='download' className='max-w-full' />
        </div>
        <div className='text-center'>
          <div className='my-4'>Click here to download the paper format</div>
          <div className='my-4'>
            Submit your Article/Review/Research Paper to Submit
          </div>
          <a
            href='https://easychair.org/conferences/?conf=icice2020'
            target='_blank'
            rel='noopener noreferrer'>
            <div className='w-40 mx-auto shadow border p-2 rounded'>
              <img src={easy} alt='easy' className='max-w-full' />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default PaperSubmission;
