import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { toast } from 'react-toastify';

const Message = () => {
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");

  const handleSendClick = () => {
    if (!name || !msg) {
      // Toast will trigger when name or msg is empty
      toast.warn("Please enter your name and message!");
      return;
    }

    // WhatsApp redirect logic with encoded message
    const encodedMsg = encodeURIComponent(`Name: ${name}\nMessage: ${msg}`);
    const waApi = import.meta.env.VITE_WA_API || "https://wa.me/?text=";
    window.location.href = `${waApi}${encodedMsg}`;
  };

  return (
    <div className="sticky top-40 w-[93%] mx-auto h-fit p-8 border border-gray-800 rounded-lg shadow-lg bg-gray-900 mb-12">
      <h2 className="text-2xl font-semibold text-blue-500 mb-4">
        Connect with us!
      </h2>
      <div className="mb-6">
        <label
          htmlFor="username"
          className="block text-sm font-medium text-gray-300 mb-2"
        >
          Tell us your name
        </label>
        <input
          type="text"
          id="username"
          placeholder="Shubham Kashyap"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-800 text-white"
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-300 mb-2"
        >
          Send us a message
        </label>
        <textarea
          id="message"
          placeholder="I want to buy a house!"
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          className="w-full p-3 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-800 text-white h-32 resize-none"
        />
      </div>
      <div className="flex justify-end">
        <button
          onClick={handleSendClick}
          className="flex items-center py-3 px-5 text-white bg-green-600 hover:bg-green-700 font-medium rounded-lg"
        >
          Send on <FaWhatsapp className="ml-2 text-lg" />
        </button>
      </div>
    </div>
  );
};

export default Message;
