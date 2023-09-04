import React from "react";

function HomePageContainer() {
    return (
        <>
            <div className="container mx-auto bg-white w-1/2">
                <div className="flex justify-center">
                    <img className="h-[80px] " src="/images/dd.svg" alt="logo" />
                </div>
                <div className="flex justify-center my-2">
                    <h4 className='font-bold text-2xl'>How to build a resume</h4>
                </div>
                <div className="my-2">
                    <h4 className='text- text-center'>The resume building process is simple and intuitive: Five easy steps
                        is all it takes to get from
                        start to finish. Resume writing can be time-consuming. So, our resume tools and <a className="text-blue-500" href="https://resume.io/how-to-write-a-resume">guides</a> are designed to save as much of your time as possible</h4>
                </div>
                <div className="flex justify-center my-2">
                    <button className="rounded h-10 w-auto bg-blue-500 hover:bg-sky-700 text-white font-bold px-3">Build My Resume</button>
                </div>
            </div>
        </>
    )

}

export default HomePageContainer