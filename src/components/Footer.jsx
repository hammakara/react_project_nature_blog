import React from "react";

export default function Footer() {
  return (
    <div className="w-full h-auto bg-slate-900 text-gray-300 mt-5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 items-center justify-center lg:grid-cols-3 py-8 lg:py-12 px-5">
        <div>
          <h1 className="text-4xl font-bold text-center">Nature</h1>
        </div>
        <div className="mt-3 px-5">
          <h1 className="text-xl font-bold ">Quick Link</h1>
          <ul className="list-disc">
            <li>Home</li>
            <li>Pupular</li>
            <li>Latest</li>
            <li>About Us</li>
          </ul>
        </div>
        <div className="mt-3 px-5">
          <h1 className="text-xl font-bold ">Quick Link</h1>
          <ul className="list-disc">
            <li>Home</li>
            <li>Pupular</li>
            <li>Latest</li>
            <li>About Us</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
