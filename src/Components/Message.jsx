import { a } from 'framer-motion/client';
import React, { useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';




const Message = () => {
    
    const [name, setName] = useState("")
    const [msg, setMsg] = useState("")
    const navigate = useNavigate()
    
    console.log(import.meta.env.VITE_WA_API + msg);

  return (
    <div className="w-4/12 h-fit p-8 sticky top-40 right-3 border border-gray-200 rounded-lg shadow-md bg-white">
      

    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
      Connect with us!
    </h2>

    <div className="mb-6">
      <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
        Tell us your name
      </label>
      <input
        type="text"
        id="username"
        placeholder="Shubham Kashyap"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400"
      />
    </div>

    <div className="mb-6">
      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
        Send us a message
      </label>
      <textarea
        id="message"
        placeholder="I want to buy a house!"
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400 h-32 resize-none"
      />
    </div>


    <button onClick={() => {
        window.location.href = import.meta.env.VITE_WA_API + msg 
    }} className="flex items-center justify-center ml-auto py-3 px-5 text-white bg-green-600 hover:bg-green-700 transition-colors duration-300 font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
      Send on <FaWhatsapp className="ml-2 text-lg" />
    </button>
  </div>
  )
}

export default Message