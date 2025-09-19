export default function SectionThree() {
  return (
    <section className="">
      <div className="flex flex-col items-center justify-center text-center pt-[8%] pb-[4%]">
        <img
          src="Group 4.png"
          alt="picture"
          className="w-[60px] sm:w-[80px] md:w-[120px]"
        />
        <h2 className="text-[22px] sm:text-[30px] md:text-[35px] md:max-w-4xl font-[900] leading-[20px] md:leading-[40px] mt-0">
          FIND SHINEWATER NEAR YOU
        </h2>
        <div className="w-[80%] 2xl:w-[50%] text-[13px] sm:text-base md:text-lg text-gray-700 mt-7">
          <p>
            We're proud to partner with retailers nationwide to bring ShineWater
            closer to you!
          </p>
        </div>
      </div>

      <div className="grid  grid-cols-1 2xl:grid-cols-2  mb-12 ">
        <img src="image 50.png" alt="" className="ml-auto mr-auto 2xl:mr-[-1px]" />
        <img src="Group 133.png" alt=" " className="mr-auto ml-auto 2xl:ml-[-1px]" />
      </div>

      <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-10" >
        <button className="relative group">
          {/* Red shadow/background layer */}
          <div className="absolute inset-0 bg-red-500 rounded-full transform translate-x-1 translate-y-1"></div>
          {/* Main black button */}
          <div className="relative border-2 border-black bg-black text-white px-8 py-3 rounded-full font-bold text-[12px] md:text-lg uppercase tracking-wide hover:transform hover:-translate-x-0.5 hover:-translate-y-0.5 transition-transform duration-200">
            OUR RETAILERS
          </div>
        </button>

        <button className="bg-white border-2 border-black text-black px-8 py-3 rounded-full font-bold text-[12px] md:text-lg uppercase tracking-wide hover:bg-gray-50 transition-colors duration-200">
          SHOP ONLINE
        </button>
      </div>
    </section>
  );
}
