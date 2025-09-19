export default function Hero() {
  return (
    <section className="relative flex flex-col text-center justify-center items-center min-h-[80vh] overflow-hidden">
      
      {/* Mango */}
      <div className="absolute top-[20%] left-[10%] sm:top-[22%] sm:left-[15%] md:top-[25%] md:left-[20%] bg-[#ff7e40] rounded-full w-[60px] sm:w-[80px] md:w-[100px]">
        <img src="Mango.png" alt="Mango" className="w-full h-auto" />
      </div>

      {/* Blackberry */}
      <div className="absolute top-[18%] left-[40%] sm:top-[20%] sm:left-[28%] md:top-[25%] md:left-[31%] bg-[#d03362] rounded-full w-[40px] sm:w-[60px] md:w-[80px]">
        <img src="blackberry.png" alt="Blackberry" className="w-full h-auto" />
      </div>

      {/* Peach */}
      <div className="absolute top-[60%] left-[10%] sm:top-[55%] sm:left-[18%] md:top-[58%] md:left-[21%] bg-[#ff7e40] rounded-full p-1 w-[50px] sm:w-[70px] md:w-[90px]">
        <img src="Peach half_2025.png" alt="Peach" className="w-full h-auto" />
      </div>

      {/* Watermelon */}
      <div className="absolute top-[62%] right-[10%] sm:top-[60%] sm:right-[18%] md:top-[57%] md:right-[23%] bg-[#ff7e40] rounded-full w-[60px] sm:w-[80px] md:w-[100px]">
        <img src="watermelon Full small (1).png" alt="Watermelon" className="w-full h-auto" />
      </div>

      {/* Mango top-right */}
      <div className="absolute top-[25%] right-[15%] sm:top-[28%] sm:right-[18%] md:top-[32%] md:right-[21%] bg-[#ff8f9f] rounded-full w-[60px] sm:w-[70px] md:w-[80px] h-[60px] md:h-[70px]">
        <img src="attachment2 1.png" alt="Mango" className="relative top-[-10px] sm:top-[-15px] md:top-[-20px] w-full h-auto" />
      </div>

      {/* Orange */}
      <div className="absolute top-[12%] right-[20%] sm:top-[15%] sm:right-[24%] md:top-[20%] md:right-[28%] bg-[#ff8f9f] rounded-full w-[60px] sm:w-[80px] md:w-[100px]">
        <img src="Orange_small.png" alt="Orange" className="w-full h-auto" />
      </div>

      {/* Strawberry */}
      <div className="absolute top-[70%] left-[18%] sm:top-[65%] sm:left-[23%] md:top-[67%] md:left-[28%] bg-[#eb6daf] rounded-full p-1 w-[50px] sm:w-[70px] md:w-[90px]">
        <img src="strawberry full small.png" alt="Strawberry" className="w-full h-auto" />
      </div>

      {/* Grapes */}
      <div className="absolute top-[72%] right-[22%] sm:top-[68%] sm:right-[28%] md:top-[67%] md:right-[32%] bg-[#005fb9] rounded-full w-[50px] sm:w-[70px] md:w-[90px]">
        <img src="Grapes.png" alt="Grape" className="w-full h-auto" />
      </div>

      {/* Main Center Content */}
      <img src="Group 4.png" alt="picture" className="className= w-[60px] sm:w-[80px] md:w-[120px]" />
      <h1 className="text-[28px] sm:text-[36px] md:text-[50px] font-[900] leading-[32px] md:leading-[40px] mt-0">
        ShineWater Sage
      </h1>
      <p className="max-w-md sm:max-w-lg md:max-w-2xl text-sm sm:text-base md:text-lg text-gray-700 mt-4 px-4">
        Our mission? Simple: Hydrate, elevate, and keep things tasty. No junk, 
        just pure, nutrient-packed goodness that’ll have you sipping with a smile.
      </p>
    </section>
  );
}
