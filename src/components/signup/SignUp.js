import React from 'react'
import { Link } from 'react-router-dom'

function SignUp() {
  return (
    <>
 
    <div className='h-[83vh] flex items-center justify-center'>
    <div className="bg-white p-6 rounded-lg shadow-lg w-[500px]">
        <div className="text-center">
          <h2 className="text-2xl font-semibold">Sign Up</h2>
          <p className="text-gray-600">Create Account</p>
        </div>
        <form className="mt-4">
        <div className="mb-4">
            <label htmlFor="name" className="block text-gray-800 font-semibold">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-2 border rounded shadow-sm focus:outline-none"
              placeholder="Enter your Name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-800 font-semibold">
              Contact Number
            </label>
            <input
              type="number"
              id="number"
              className="w-full p-2 border rounded shadow-sm focus:outline-none"
              placeholder="Enter your Contact Number"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-800 font-semibold">
              Email
            </label>
            <input
              type="email"
              id="emails"
              className="w-full p-2 border rounded shadow-sm focus:outline-none"
              placeholder="Enter your Email"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-800 font-semibold"
            >
              Password
            </label>
            <input
              type="password"
              id="passwords"
              className="w-full p-2 border rounded shadow-sm focus:outline-none"
              placeholder="Enter your password"
            />
          </div>
      
        </form>
        <div className="my-5 flex justify-center text-center flex-col">
          <button className="mt-2 bg-blue-500 hover:bg-sky-700 text-white font-semibold py-2 px-4 rounded flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm2 0a6 6 0 1112 0 6 6 0 01-12 0z"
                clipRule="evenodd"
              />
              <path
                fillRule="evenodd"
                d="M10 2a8 8 0 00-5.14 14.14L1.47 18.64a1 1 0 101.42 1.42l2.5-2.5a8 8 0 0012.12-7.08H10V2z"
                clipRule="evenodd"
              />
              <path
                fillRule="evenodd"
                d="M10 4a6 6 0 00-3.66 10.36l-2.5 2.5A1 1 0 002 18.64l3.14-3.14A6 6 0 1010 4z"
                clipRule="evenodd"
              />
            </svg>
            Google
          </button>
        </div>
     
      </div>
    </div>
    </>
  )
}

export default SignUp