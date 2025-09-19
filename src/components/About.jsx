export default function About(){
    return (
        <div className="flex flex-col text-center justify-center items-center min-h-[45vh] bg-[#86ddd6] pt-6 pb-5">
            <img src="Group 4.png" alt="picture" className="w-[60px] sm:w-[80px] md:w-[120px]" />
            <h2 className=" w-[80%] text-[22px] sm:text-[26px] md:text-[30px] font-[900] leading-[26px] md:leading-[26px] mt-0">
                FROM BRAINSTORM TO BEVERAGE REVOLUTION
            </h2>
                            {/* text-[22px] sm:text-[30px] md:text-[35px] md:max-w-4xl font-[900] leading-[20px] md:leading-[40px] */}
            <div className="max-w-[80%] text-[13px] sm:text-base md:text-lg text-gray-700 mt-7 ">
                
                <p>
                    ShineWater wasn't just created—it was born out of a mission to make hydration awesome. A team of passionate
                    physicians and health geeks came together to craft a drink that's not only delicious but actually good for
                    you. No sugar or artificial flavors—just pure hydration that helps fight common deficiencies like Vitamin D.
                    Every sip? Packed with essential vitamins, minerals, and a whole lot of good vibes. We're not just about
                    drinks—we're a movement, turning little choices into a big impact. Hydration for the win!
                </p>

                <p className="font-semibold ">
                    We're more than just a beverage company; we're a movement for better living through small, good choices.
                </p>
            </div>
        </div>
    )
}