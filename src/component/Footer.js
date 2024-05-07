
import React, { useState, useEffect } from 'react';
import IconZalo from '../assets/icons/zalo.png';
import IconMessenger from '../assets/icons/messenger.png'

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const show = currentScrollY > 100;
      setShowBackToTop(show);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (
    <div className='bg-orange-300 py-4 shadow-md'>
      {showBackToTop && (
        <button
          className="fixed bottom-10 right-10 bg-slate-100 hover:bg-orange-200 text-white font-bold py-2 px-2 rounded-full shadow-xl"
          onClick={scrollToTop}
        >
          <svg class="h-8 w-8 text-orange-400"
            width="24" height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" />
            <polyline points="6 15 12 9 18 15" /></svg>
        </button>
      )}
      <div className='container mx-auto flex justify-between items-center my-6'>
        <div className='flex items-center'>
          <img className='w-6' src="/logo152.png" alt="HOKKAI Logo" />
          <span className='font-bold text-blue-600 ml-2'>HOKKAI</span>
        </div>
        <div className='flex items-center mr-4'>
          <ContactInfo icon='phone' text='0983196214' />
          <ContactInfo icon='zalo' text='Zalo' link='https://zalo.me' />
          <ContactInfo icon='facebook' text='FaceBook' link='https://www.facebook.com/profile.php?id=100015175244438' />
        </div>
      </div>

      <hr className='md:mx-44 mt-10 p-4 border-t border-gray-400' />
      <div className='text-xs font-medium flex justify-between items-center'>
        <div className='md:mx-44 text-xs ml-2'>
          © Copyright 2024   . All rights Reserved.
        </div>
        <div className='md:mr-44 mr-4'>
          Make by Trung Kien
        </div>
      </div>
    </div>
  );
}

const ContactInfo = ({ icon, text, link }) => {

  const icons = {
    phone: 'h-5 w-5 text-green-500',
    zalo: 'h-6 w-6 text-sky-500',
    facebook: 'h-6 w-6 text-red-500',
  };

  const svgs = {
    phone: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    zalo: (
      <img src={IconZalo} alt=''></img>
    ),
    facebook: (
      <img src={IconMessenger} alt=''></img>
    ),
  };

  const handleClick = () => {
    if (icon === 'zalo') {
      window.location.href = link;
    } else if (icon === 'facebook') {
      window.location.href = link;
    }
  };
  return (
    <span
      className={`md:ml-5 flex items-center cursor-pointer  hover:transform hover:scale-105 transition-transform duration-300 ease-in-out ml-2  text-xs md:text-base`}
      onClick={handleClick}
    >
      {icons[icon] && React.cloneElement(svgs[icon], { className: icons[icon] + ' mr-2' })}
      {text}
    </span>
  );
}

export default Footer;
