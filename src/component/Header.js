import React from 'react';
import IconZalo from '../assets/icons/zalo.png'
import IconMessenger from '../assets/icons/messenger.png'
const Header = () => {
  return (
    <div className='bg-orange-300 py-5 fixed top-0 left-0 right-0 z-10 shadow-md'>
      <div className='container mx-auto flex justify-between items-center pl-4'>
        <div className='flex items-center'>
          <img className='w-6' src="/logo152.png" alt="HOKKAI Logo" />
          <span className='font-bold text-blue-600 ml-2'>HOKKAI</span>
        </div>
        <div className='flex items-center md:mr-10 mr-4'>
          <ContactInfo icon='phone' text='0983196214' />
          <ContactInfo icon='zalo' text='Zalo' link='https://zalo.me' />
          <ContactInfo icon='facebook' text='Messenger' link='https://www.facebook.com/profile.php?id=100015175244438' />
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

export default Header;
