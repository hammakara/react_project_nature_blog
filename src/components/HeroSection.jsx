export default function HeroSection() {
  return (
    <div className="max-w-7xl mx-auto " id="home">
      <div className="block lg:flex justify-center lg:justify-between items-center">
        {/* welcome  */}
        <div className="w-full  px-3 lg:px-6 py-3 lg:py-6">
          <h1 className="text-center font-bold text-4xl  ">
            Welcome To Our Blog
          </h1>
          <p className="text-md  text-center lg:text-left py-3 lg:py-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consectetur, magnam excepturi, assumenda in necessitatibus ut minus
            ipsam iusto doloremque nam numquam exercitationem dolores architecto
            deserunt inventore! Inventore perspiciatis, quisquam consequuntur
            molestias accusantium saepe animi nam adipisci culpa nobis! Dolore,
            odit?
          </p>
          <div className="flex justify-between items-center w-full px-12 lg:px-24 mt-3 gap-3">
            <input
              type="text"
              className="border border-green-500 focus:ring-2 ring-green-500 outline-none py-2 px-6 rounded-2xl"
              placeholder="Quick Search"
            />
            <button className="flex gap-2 rounded-2xl bg-green-500 text-white transform hover:scale-105 transition duration-300 px-6 py-2 ">
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
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
              <span>Search</span>
            </button>
          </div>
        </div>
        {/* hero image */}
        <div className="w-fullpx-3 lg:px-6 py-3 lg:py-6">
          <img
            className="w-full h-full"
            src="https://blogging-kappa-henna.vercel.app/images/01.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
