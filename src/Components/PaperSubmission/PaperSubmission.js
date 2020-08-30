import React from 'react';
import download from '../../images/download.png';
import easy from '../../images/easy.jpg';

function PaperSubmission() {
  return (
    <div>
      <div className='font-spartan bg-blue-800 text-gray-300 text-3xl p-4 text-center rounded'>
        Paper Submission
      </div>
      <div className='text-xl font-spartan px-6 py-2 text-justify my-12 '>
        <ul className='leading-loose list-decimal list-outside'>
          <li className=''>
            Paper should be in the format strictly specified on the conference
            website. Only Author(s) of the selected papers will get the
            intimation about whose articles will be accepted for publication.
            Kindly do not submit the paper multiple times; it may lead to
            cancellation of an article/paper.
          </li>
          <li className='my-5'>
            Note: All papers will be checked with advanced plagiarism detection
            tools like Turn it in or iThenticate.
          </li>
          <li className='my-4'>
            <a
              className='flex text-blue-500 flex-wrap'
              href='https://www.springer.com/de/authors-editors/book-authors-editors/resources-guidelines/book-manuscript-guidelines/manuscript-preparation/5636#c3324'
              target='_blank'
              rel='noopener noreferrer'>
              <div className='self-center'>
                Click here to download the paper format
              </div>
              <div className='w-40 my-16 mx-auto'>
                <img src={download} alt='download' className='max-w-full' />
              </div>
            </a>
          </li>
          <li>
            <div className='flex flex-wrap'>
              <div className='my-4'>
                Submit your Article/Review/Research Paper to Submit
              </div>
              <a
                href='https://easychair.org/conferences/?conf=icice2020'
                target='_blank'
                className='mx-4'
                rel='noopener noreferrer'>
                <div className='w-40  mx-auto shadow border p-2 rounded'>
                  <img src={easy} alt='easy' className='max-w-full' />
                </div>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default PaperSubmission;
