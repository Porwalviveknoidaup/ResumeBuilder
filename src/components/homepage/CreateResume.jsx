import React from 'react'

function CreateResume() {
  return (
    <>
    <div className='w-full my-3 flex h-full items-center md:px-20 sm:px-0'>
        <div className='w-1/2'>
            <img src='/images/users.svg' alt='logo' className='h-full w-[80%] aspect-[4/3] object-contain mix-blend-darken'/>
        </div>
        <div className="w-1/2 px-4 flex h-full flex-col items-start justify-center ">
                        <h4 className='font-bold text-6xl my-3'>Create A Resume To Land Your Next Job</h4>
                        <span className='leading-6'>We have developed a resume builder based on feedback from thousands of users, recruiter expertise, stellar template design and the best hiring practices. The goal is simple: help you land that dream job interview! Get an advantage in the modern professional environment.</span>
                        <button className='h-10 w-auto bg-blue-600 text-white font-bold px-3 leading-3 my-3 hover:bg-sky-700 rounded transition duration-300 ease-in-out '>Build Your Resume</button>
                    </div>
    </div>
    <div className='my-4 md:px-20 sm:px-0 w-100 flex'>
    <div className=' w-1/3 flex flex-col items-start px-5'>
    <img src='/images/sl.svg' alt='logo' className='h-10 w-10 my-1' />
    <h1 className='font-bold text-xl'>Powerful and easy-to-use</h1>
    <span className='my-1'>Created to be suitable for all levels of job seekers. Our host of powerful features ranges from an excellent spell-checker, to job tracking, multi-format export, auto-generated summaries and more.</span>
    </div>
    <div className=' w-1/3 flex flex-col items-start px-5'>
    <img src='/images/fl.svg' alt='logo' className='h-10 w-10 my-1' />
    <h1 className='font-bold text-xl'>Customization made simple</h1>
    <span className='my-1'>Fine-tune your resume for a specific job with ease. We help you turn a generic document into a cutting-edge instrument that wins interviews. Transform universal resumes into perfect sales pitches with a few key-strokes.</span>
    </div>
    <div className=' w-1/3 flex flex-col items-start px-5'>
    <img src='/images/cl.svg' alt='logo' className='h-10 w-10 my-1' />
    <h1 className='font-bold text-xl'>Templates designed by experts</h1>
    <span className='my-1'>Our designed templates and examples are reviewed by recruiters. This gives you a powerful boost in resume creation, straight from the other side of the job market - the people responsible for hiring and candidate evaluation.</span>
    </div>
 
    </div>
    </>
  )
}

export default CreateResume