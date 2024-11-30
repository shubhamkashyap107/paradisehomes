import React from 'react';
import Message from '../Message';
import Team from '../Team';
import ContactInfo from '../ContactInfo';
import Map from '../Map';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  return (
    <div className='flex flex-col sm:flex-row'>
      <div className='w-[100%] sm:w-8/12 sm:p-8 p-3 '>
        <Team />
        <ContactInfo />
        <Map />
      </div>

      <div className="relative w-full sm:w-4/12">
        <Message />
        {/* Toast container is now inside the Contact component */}
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          draggable
          pauseOnHover
          toastStyle={{
            zIndex: 1050, // Ensure it appears above all other content
          }}
        />
      </div>
    </div>
  );
};

export default Contact;
