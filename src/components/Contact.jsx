import React from "react";

export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto mt-5">
      <div className="items-center flex justify-center py-3 lg:py-6 space-y-5">
        <h1 className="text-3xl font-bold">Contact Us</h1>
      </div>
      <div className="w-full px-6 lg:px-12">
        <form className="px-6 space-y-5">
          <div className="w-full">
            <label htmlFor="email" className="text-md font-semibold ">
              Email
            </label>
            <input
              type="text"
              placeholder="example@gmail.com..."
              className="px-3 py-3 w-full rounded-2xl outline-none border border-green-500 focus:ring-2 ring-green-500"
            />
          </div>
          <div className="w-full">
            <label htmlFor="email" className="text-md font-semibold ">
              Submit
            </label>
            <input
              type="text"
              placeholder="Good.."
              className="px-3 py-3 w-full rounded-2xl outline-none border border-green-500 focus:ring-2 ring-green-500"
            />
          </div>
          <div className="w-full">
            <label htmlFor="email" className="text-md font-semibold ">
              Message
            </label>
            <textarea
              placeholder="Message.." rows={5}
              className="px-3 py-3 w-full rounded-2xl outline-none border border-green-500 focus:ring-2 ring-green-500"
            ></textarea>
          </div>
          <button className="px-6 py-2 bg-green-500 text-white rounded-2xl">submit</button>
        </form>
      </div>
    </div>
  );
}
