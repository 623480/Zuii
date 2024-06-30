import React from "react";

const Contact = () => {
  return (
    <div className="min-h-lvh text-center mx-auto w-6/12 mt-16">
      <h1 className="text-lg font-bold">Get in touch with us.</h1>
      <div className="flex flex-col">
        <input placeholder="email" type="text" className="border border-black my-2 px-2 py-2 rounded-lg"/>
        <input type="text" placeholder="message" className="border border-black my-2 px-2 py-2 rounded-lg"/>
        <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">submit</button>
      </div>
    </div>
  );
};

export default Contact;
