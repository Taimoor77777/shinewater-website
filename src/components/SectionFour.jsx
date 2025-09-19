import EmailInput from "./Email";

export default function SectionFour() {
  return (
    <>
      <section>
        <div className="flex flex-col text-center justify-center items-center min-h-[45vh] bg-[#eb6daf] pt-24 pb-5">
          <img
            src="Group 7.png"
            alt="picture"
            className="w-[60px] sm:w-[80px] md:w-[120px]"
          />
          <h2 className=" w-[80%] text-[22px] sm:text-[26px] md:text-[30px] font-[900] leading-[26px] md:leading-[26px] mt-0 text-white">
            MAKE EVERY SIP COUNT-JOIN THE SHINEWATER MOVEMENT
          </h2>
          {/* text-[22px] sm:text-[30px] md:text-[35px] md:max-w-4xl font-[900] leading-[20px] md:leading-[40px] */}
          <div className="max-w-[80%] text-[13px] sm:text-base md:text-lg text-white mt-7 ">
            <p>
              You know hydration is important, but why not make it
              world-changing? When you choose ShineWater, you’re not just
              hydrating—you’re part of a global mission to make the world
              healthier and happier. So, what are you waiting for? Explore our
              collection of nutrient-packed drinks and become part of the
              worldwide hydration squad. You in?
            </p>

            <p className="font-semibold ">
              We're more than just a beverage company; we're a movement for
              better living through small, good choices.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-10 mt-12">
            <button className="relative group">
              {/* Red shadow/background layer */}
              <div className="absolute inset-0 bg-red-500 rounded-full transform translate-x-1 translate-y-1"></div>
              {/* Main black button */}
              <div className="relative border-2 border-black bg-black text-white px-8 py-3 rounded-full font-bold text-[12px] sm:text-[14px] uppercase tracking-wide hover:transform hover:-translate-x-0.5 hover:-translate-y-0.5 transition-transform duration-200">
                EXPLORE OUR PRODUCTS
              </div>
            </button>

            <button className="relative group">
              <div className="absolute inset-0 bg-black rounded-full transform translate-x-1 translate-y-1"></div>
              <div
                className="relative w-[60%] sm:w-auto
                     bg-white border-2 border-black text-black
                     px-6 sm:px-8 py-3 
                     rounded-full font-bold 
                     text-[12px] sm:text-[14px] uppercase tracking-wide hover:bg-gray-50 transition-colors duration-200"
              >
                LEARN MORE ABOUT ACTION FOR HEALTHY STUDENTS
              </div>
            </button>
          </div>
        </div>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  items-start mt-16 mb-16 ml-14 mr-14">
        <div className="w-[80%]">
          <img src="ShineWater logo_K 1.png" alt="Logo" className="mb-10" />
          <p className="mb-4 leading-8">
            Creating delightful online shopping experiences, one theme at a
            time.
          </p>
          <div className="flex mb-4 gap-2">
            <img src="mdi-light_email-open.png" alt="" />
            <p>Support@shinewater.com</p>
          </div>
          <div className="flex gap-2">
            <img src="ph_phone-thin.png" alt="" />
            <p>+00- 0000-000</p>
          </div>
        </div>

        <div>
          <h2 className="font-[900] mt-[20%] md:mt-[70px] mb-6  ">
            QUICK LINKS
          </h2>
          <div className="flex flex-col leading-10">
            <a href="#">About Us</a>
            <a href="#">Our Products</a>
            <a href="#">Contact Us</a>
            <a href="#">FAQ</a>
          </div>
        </div>

        <div className="flex flex-col leading-10 mt-8 md:mt-[100px]">
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
          <p>Wholesale Inquiries</p>
        </div>

        <div className="flex flex-col">
          <h2 className="font-[900] mt-[20%] md:mt-[70px] mb-6">
            NEWSLETTER SIGN-UP
          </h2>
          <p className="leading-8 mb-6">
            Treat your inbox to some tasty deals, drops, and hydration hacks!
          </p>
          <EmailInput />
        </div>
      </section>
    </>
  );
}
