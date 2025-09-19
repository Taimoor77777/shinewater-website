export default function SectionTwo() {
  return (
    <>
    <section className="grid grid-cols-1 2xl:grid-cols-2 ">
      <div className=" relative flex flex-col justify-center items-center 2xl:items-start ml-0 2xl:ml-32 text-center 2xl:text-start  gap-6 ">
        <div className="flex text-[22px] sm:text-[30px] md:text-[35px] justify-center  2xl:justify-start items-end gap-2 w-[100%] l:w-[90%] 2xl:w-[90%] flex-wrap font-[900] mt-28 2xl:mt-0">
          <h2>SIP FOR CHANGE:</h2>
          <div className="flex flex-col items-center ">
            <img
              src="Group 4.png"
              alt="picture"
              className="className= w-[60px] sm:w-[80px] md:w-[120px]"
            />
            <h2>SHINEWATER'S</h2>
          </div>
          <h2>GLOBAL MISSION</h2>
        </div>
        <p className="w-[90%] 2xl:w-[75%] text-[13px] sm:text-base md:text-lg">
          We're not just in the hydration game; we're in the
          “making-the-world-better” game! That's why ShineWater is teaming up
          with Action for Healthy Kids to make sure kids everywhere stay fueled,
          fit, and ready to conquer the world.
        </p>
        <p className="w-[90%] 2xl:w-[75%] text-[13px] sm:text-base md:text-lg">
          Every can you crack open is like sending a mini superhero to school
          with better nutrition, more exercise, and a whole lot of healthiness.
        </p>
        <p className="w-[90%] 2xl:w-[75%] text-[13px] sm:text-base md:text-lg">
          So, sip, save the day, and keep those little ones feeling like they
          just had a nap and an ice cream cone—because that's how awesome they
          deserve to be! Join us in our mission to improve lives, one can at a
          time.
        </p>

        <div className="hidden 2xl:block absolute top-[90%]  left-[18%] sm:top-[65%] sm:left-[23%] md:top-[80%] 2xl:top-[86%] md:left-[-14%] bg-[#eb6daf] rounded-full p-1 w-[50px] sm:w-[70px] md:w-[80px]">
          <img
            src="strawberry full small inverted.png"
            alt="Strawberry"
            className="w-full h-auto"
          />
        </div>

        <div className="hidden 2xl:block absolute top-[60%] left-[10%] sm:top-[55%] sm:left-[18%] md:top-[88%] md:left-[81%] bg-[#ff7e40] rounded-full p-1 w-[50px] sm:w-[70px] md:w-[90px]">
          <img
            src="Peach half_2025.png"
            alt="Peach"
            className="w-full h-auto"
          />
        </div>

        <div className="hidden 2xl:block absolute top-[25%] right-[15%] sm:top-[28%] sm:right-[18%] md:top-[27%] md:right-[1%] bg-[#ff8f9f] rounded-full w-[60px] sm:w-[70px] md:w-[80px] h-[70px]">
          <img
            src="attachment2 1.png"
            alt="Mango"
            className="relative top-[-10px] sm:top-[-15px] md:top-[-20px] w-full h-auto"
          />
        </div>

        <div className="hidden 2xl:block absolute top-[20%] left-[10%] sm:top-[22%] sm:left-[15%] md:top-[8%] md:left-[10%] bg-[#ff7e40] rounded-full w-[60px] sm:w-[80px] md:w-[80px]">
          <img src="Mango.png" alt="Mango" className="w-full h-auto" />
        </div>
      </div>

      <div className="mr-auto ml-auto mt-10 2xl:mt-0 2xl:mr-0  ">
        <img src="Ellipse 21.png" alt="cute" />
      </div>
    </section>
    </>
  );
}
