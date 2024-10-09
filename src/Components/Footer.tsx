// components/Footer.tsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'

const Footer: React.FC = () => {
  return (
    <footer className="flex justify-between items-center gap-4 md:p-12 p-6 px-[20px] lg:px-[108px] md:px-[60px] bg-secondaryColor text-white">
      <div className="footer-text text-sm md:text-lg">
        <p>Copyright &copy; 2024 by @AnasKhan | All Rights Reserved.</p>
      </div>

      <div className="footer-icon-top flex justify-center items-center p-2 bg-main-color rounded-lg transition duration-500 ease-in-out hover:shadow-lg">
        <a href="#home">
          <FontAwesomeIcon icon={faAngleUp} className='text-secondaryColor md:text-2xl text-xl  bg-myCustomColor p-2 rounded-xl shadow-[0_0_6px_var(--myCustomColor)] hover:shadow-[0_0_12px_var(--myCustomColor)] transition duration-200'/>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
