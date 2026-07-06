import React from "react";

export default function PostCard() {
  return (
    <div className="w-full  border border-gray-200 rounded-sm shadow-md hover:border-green-500 hover:shadow-md hover:rounded-md hover:shadow-green-500 transform hover:scale-105 transition duration-300 py-3">
      <img
        className="w-full h-auto"
        src="https://blogging-kappa-henna.vercel.app/images/blog_01.png"
        alt=""
      />
      <h3 className="px-6 font-bold text-md">
        Earth's intelligence: Being pulled toward the heart of....
      </h3>
      <p className="px-6 text-justify">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit
        provident odio fugiat...
      </p>
      <span className="text-md font-bold px-6  ">Oct, 4, 2023</span>
    </div>
  );
}
