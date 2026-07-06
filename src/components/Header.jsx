import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
    { name: "About", href: "#about" },
  ];
  return (
    <div className=" sticky top-0 border-b border-gray-200  shadow-sm px-6 lg:px-6">
      <header className="flex justify-between items-center ">
        <div className="w-32 h-auto">
          <img
            className="w-full h-full object-cover"
            src="https://blogging-kappa-henna.vercel.app/images/logo1.png"
            alt="Logo"
          />
        </div>
        {/* desktop menu */}
        <div className="items-center hidden lg:flex px-5 lg:px-10 space-x-6">
          {menuItems.map((m) => (
            <a
              href={m.href}
              key={m.name}
              className="px-4 py-1.5 rounded-xl font-medium hover:bg-green-500 hover:text-white  transform hover:scale-105 transition duration-300 "
            >
              {m.name}
            </a>
          ))}
        </div>
        {/* mobile menu */}
        {isOpen && (
          <div className="block lg:hidden py-5 justify-center items-center absolute top-20 left-10  border border-gray-200 shadow-md rounded-2xl bg-white  px-6  w-5/6 mx-auto space-y-5 animate-fade-in transition duration-300">
            <nav className="flex flex-col ">
              {menuItems.map((m) => (
                <a
                  href={m.href}
                  key={m.name}
                  className="text-center py-2 hover:bg-green-500 hover:text-white transition duration-300 rounded-2xl"
                  onClick={() => setIsOpen(false)}
                >
                  {m.name}
                </a>
              ))}

              <button className="w-full bg-green-500 text-white py-2 px-5 rounded-2xl cursor-pointer mt-3">Login</button>
            </nav>
          </div>
        )}
        <div className="flex gap-5 items-center">
          <button
            className="block lg:hidden  p-1.5 bg-green-200 rounded-sm cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
          <button className="px-3 py-1.5 bg-green-500 text-white rounded-2xl cursor-pointer">
            Login
          </button>
        </div>
      </header>
    </div>
  );
}
