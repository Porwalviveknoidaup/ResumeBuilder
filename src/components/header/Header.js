import React, { useState } from 'react';
import LoginModal from '../login/Login';
import { useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate()
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

    const openLoginModal = () => {
      setIsLoginModalOpen(true);
    };
  
    const closeLoginModal = (e) => {
        e.preventDefault()
      setIsLoginModalOpen(false);
    };
    const gotoHome = () =>{
        navigate("/")
    }
  return (
    <>
     <header className="bg-white text-black py-3 sticky top-0 z-50 shadow-md md:px-20 sm:px-0">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img
            src="/images/logo1.jpg"
            alt="Organization Logo"
            className="h-10 w-10 rounded-full cursor-pointer"
            onClick={()=>{gotoHome()}}
          />
          <span className="text-lg font-semibold cursor-pointer" onClick={()=>{gotoHome()}}>Resume Builder</span>
        </div>
        <div className="flex items-center space-x-4">
          <img
            src="/images/default-user.png"
            alt="User Icon"
            className="h-8 w-8 rounded-full cursor-pointer"
            onClick={()=>{openLoginModal()}}
          />
        </div>
      </div>
    </header>
     <LoginModal isOpen={isLoginModalOpen} onClose={(e)=>{closeLoginModal(e)}} />
    </>
   
  );
}

export default Header;
