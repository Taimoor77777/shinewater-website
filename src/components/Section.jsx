export default function SectionOne() {
  return (
    <>
      <section className="relative  bg-white">
        <div className="flex flex-col items-center justify-center text-center pt-[8%] pb-[8%]">
          <img
            src="Group 4.png"
            alt="picture"
            className="w-[60px] sm:w-[80px] md:w-[120px]"
          />
          <h2 className="text-[22px] sm:text-[30px] md:text-[35px] md:max-w-4xl font-[900] leading-[20px] md:leading-[40px] mt-0">
            THE GOOD STUFF INSIDE SHINEWATER
          </h2>
          <div className="w-[80%] 2xl:w-[50%] text-[13px] sm:text-base md:text-lg text-gray-700 mt-7">
            <p>
              Inside every can of ShineWater is a delicious, nutrient-packed
              powerhouse that keeps you hydrated and feeling amazing. What’s in
              the mix? Welp, a whole lot of:
            </p>
          </div>
          <div className="relative">
            <img
              src="pngegg 1.png"
              alt="water"
              className="w-[95%] md:w-[100%] "
            />
            <img
              src="SW_MixedBerryAcai_1200x1200_300dpi.png"
              alt="left can"
              className="absolute top-[20%] left-[22%] border-0 w-[18%]"
            />
            <img
              src="SW_PeachMango_1200x1200300dpi 1.png"
              alt="right can"
              className="absolute top-[30%] right-[25%] border-0 w-[20%]"
            />
          </div>
          <div className="w-[80%] 2xl:w-[50%] text-[13px] sm:text-base md:text-lg text-gray-700 ">
            <p>
              Inside every can of ShineWater is a delicious, nutrient-packed
              powerhouse that keeps you hydrated and feeling amazing. Whats in
              the mix? Welp, a whole lot of:
            </p>
          </div>
        </div>

        <div
          className=" hidden 2xl:flex absolute  flex-col justify-center items-center w-[320px] h-[320px] border  border-black rounded-full shadow-md top-[11%] left-[5%]"
          style={{ boxShadow: "8px 8px 0px rgba(0,0,0,0.7)" }}
        >
          <img
            src="Animation - 1738154569771 1.png"
            alt="smol"
            className="w-[22%]"
          />
          <p className="font-bold pt-2">VITAMIN D</p>
          <p className="w-[72%] text-center pt-2">
            Supports bone health, immune function, and athletic
            performance—essential for maintaining a balanced, healthy life.
          </p>
        </div>

        <div
          className="hidden 2xl:flex absolute flex-col justify-center items-center w-[320px] h-[320px] border  border-black rounded-full shadow-md bottom-[11%] left-[5%]"
          style={{ boxShadow: "8px 8px 0px rgba(0,0,0,0.7)" }}
        >
          <img
            src="Animation - 1738154569771 1.png"
            alt="smol"
            className="w-[22%]"
          />
          <p className="font-bold pt-2">ELECTROLYTES</p>
          <p className="w-[72%] text-center pt-2">
            Hydrate and replenish your body with key minerals that support your heart, muscles, and hydration levels.
          </p>
        </div>

        <div
          className="hidden 2xl:flex absolute flex-col justify-center items-center w-[320px] h-[320px] border  border-black rounded-full shadow-md bottom-[11%] right-[5%]"
          style={{ boxShadow: "8px 8px 0px rgba(0,0,0,0.7)" }}
        >
          <img
            src="Animation - 1738154569771 1.png"
            alt="smol"
            className="w-[22%]"
          />
          <p className="font-bold pt-2">Zero Sugar</p>
          <p className="w-[72%] text-center pt-2">
            Enjoy all the flavor and nutrition you crave without the sugar or artificial ingredients.
          </p>
        </div>

        <div
          className="hidden 2xl:flex absolute flex-col justify-center items-center w-[320px] h-[320px] border  border-black rounded-full shadow-md top-[11%] right-[5%]"
          style={{ boxShadow: "8px 8px 0px rgba(0,0,0,0.7)" }}
        >
          <img
            src="Animation - 1738154569771 1.png"
            alt="smol"
            className="w-[22%]"
          />
          <p className="font-bold pt-2">Antioxidants</p>
          <p className="w-[72%] text-center pt-2">
            Packed with antioxidants to support overall wellness, protect your body from oxidative stress, and boost immunity.
          </p>
        </div>
      </section>

      <section className=" grid grid-cols-2 2xl:hidden gap-8 md:gap-x-[130px] mt-8 mx-2  ">
        <div
          className="ml-auto flex flex-col justify-center items-center w-[90%] sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[55%] aspect-square border  border-black rounded-full shadow-md bg-white z-20"
          style={{ boxShadow: "8px 8px 0px rgba(0,0,0,0.7)" }}
        >
          <img
            src="Animation - 1738154569771 1.png"
            alt="smol"
            className="w-[15%] sm:w-[18%] md:w-[22%]"
          />
          <p className="font-bold pt-2 text-[10px] sm:text-[15px] md:text-[19px]">
            VITAMINS
          </p>
          <p className="w-[72%] text-center text-[8px] sm:text-[13px] md:text-[14px] l:text-[18px] pt-2">
            Supports bone health, immune function, and athletic
            performance—essential for maintaining a balanced, healthy life.
          </p>
        </div>

        <div
          className="mr-auto flex flex-col justify-center items-center w-[90%] sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[55%] aspect-square border  border-black rounded-full shadow-md bg-white z-20"
          style={{ boxShadow: "8px 8px 0px rgba(0,0,0,0.7)" }}
        >
          <img
            src="Animation - 1738154569771 1.png"
            alt="smol"
            className="w-[15%] sm:w-[18%] md:w-[22%]"
          />
          <p className="font-bold pt-2 text-[10px] sm:text-[15px] md:text-[19px]">
            Antioxidants
          </p>
          <p className="w-[72%] text-center text-[8px] sm:text-[13px] md:text-[14px] l:text-[18px] pt-2">
            Packed with antioxidants to support overall wellness, protect your body from oxidative stress, and boost immunity.
          </p>
        </div>

        <div
          className="ml-auto flex flex-col justify-center items-center w-[90%] sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[55%] aspect-square border  border-black rounded-full shadow-md bg-white z-20"
          style={{ boxShadow: "8px 8px 0px rgba(0,0,0,0.7)" }}
        >
          <img
            src="Animation - 1738154569771 1.png"
            alt="smol"
            className="w-[15%] sm:w-[18%] md:w-[22%]"
          />
          <p className="font-bold pt-2 text-[10px] sm:text-[15px] md:text-[19px]">
            ELECTROLYTES
          </p>
          <p className="w-[72%] text-center text-[8px] sm:text-[13px] md:text-[14px] l:text-[18px] pt-2">
            Hydrate and replenish your body with key minerals that support your heart, muscles, and hydration levels.
          </p>
        </div>

        <div
          className="mr-auto flex flex-col justify-center items-center w-[90%] sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[55%] aspect-square border  border-black rounded-full shadow-md bg-white z-20"
          style={{ boxShadow: "8px 8px 0px rgba(0,0,0,0.7)" }}
        >
          <img
            src="Animation - 1738154569771 1.png"
            alt="smol"
            className="w-[15%] sm:w-[18%] md:w-[22%]"
          />
          <p className="font-bold pt-2 text-[10px] sm:text-[15px] md:text-[19px]">
            Zero Sugar
          </p>
          <p className="w-[72%] text-center text-[8px] sm:text-[13px] md:text-[14px] l:text-[18px] pt-2">
            Enjoy all the flavor and nutrition you crave without the sugar or artificial ingredients.
          </p>
        </div>

        {/* <div className="absolute flex flex-col justify-center items-center w-[320px] h-[320px] border  border-black rounded-full shadow-md bottom-[11%] left-[5%]"
      style={{ boxShadow: "8px 8px 0px rgba(0,0,0,0.7)" }}
      >
        <img src="Animation - 1738154569771 1.png" alt="smol" className="w-[22%]" />
        <p className="font-bold pt-2">
            VITAMINS
        </p>
        <p className="w-[72%] text-center pt-2">
          Supports bone health, immune function, and athletic performance—essential for maintaining a balanced, healthy life.
        </p>
      </div>  

      <div className="absolute flex flex-col justify-center items-center w-[320px] h-[320px] border  border-black rounded-full shadow-md top-[11%] right-[5%]"
      style={{ boxShadow: "8px 8px 0px rgba(0,0,0,0.7)" }}
      >
        <img src="Animation - 1738154569771 1.png" alt="smol" className="w-[22%]" />
        <p className="font-bold pt-2">
            VITAMINS
        </p>
        <p className="w-[72%] text-center pt-2">
          Supports bone health, immune function, and athletic performance—essential for maintaining a balanced, healthy life.
        </p>
      </div>  

      <div className="absolute flex flex-col justify-center items-center w-[320px] h-[320px] border  border-black rounded-full shadow-md bottom-[11%] right-[5%]"
      style={{ boxShadow: "8px 8px 0px rgba(0,0,0,0.7)" }}
      >
        <img src="Animation - 1738154569771 1.png" alt="smol" className="w-[22%]" />
        <p className="font-bold pt-2">
            VITAMINS
        </p>
        <p className="w-[72%] text-center pt-2">
          Supports bone health, immune function, and athletic performance—essential for maintaining a balanced, healthy life.
        </p>
      </div>   */}
      </section>
    </>
  );
}
