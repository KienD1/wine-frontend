import React, { useState } from 'react';

const Header = () => {
  return (
    <div className='bg-orange-300 py-4 shadow-md'>
      <div className='container mx-auto flex justify-between items-center'>
        <div className='flex items-center'>
          <img className='w-6' src="/logo152.png" alt="HOKKAI Logo" />
          <span className='font-bold text-blue-600 ml-2'>HOKKAI</span>
        </div>
        <div className='flex items-center'>
          <ContactInfo icon='phone' text='0983196214' />
          <ContactInfo icon='zalo' text='Zalo' link='https://zalo.me' />
          <ContactInfo icon='facebook' text='FaceBook' link='https://www.facebook.com/profile.php?id=100015175244438' />
        </div>
      </div>
    </div>
  );
}

const ContactInfo = ({ icon, text, link }) => {
  const [isHovered, setIsHovered] = useState(false);

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
      <svg width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4" />
        <line x1="12" y1="11" x2="12" y2="11.01" />
        <line x1="8" y1="11" x2="8" y2="11.01" />
        <line x1="16" y1="11" x2="16" y2="11.01" />
      </svg>
    ),
    facebook: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  };

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
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
      className={`ml-5 flex items-center cursor-pointer  ${isHovered ? 'font-bold' : ''}`}
      onClick={handleClick}
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseOut}
    >
      {icons[icon] && React.cloneElement(svgs[icon], { className: icons[icon] + ' mr-2' })}
      {text}
    </span>
  );
}

export default Header;
