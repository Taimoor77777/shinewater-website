export default function Footer() {
  return (
    <section className="h-[150px]  border-t-2 ">
      <div className="grid grid-cols-1 sm:grid-cols-3 items-center justify-center text-center ml-14 sm:ml-10 sm:mr-10 mt-0 sm:mt-6 ">
        <div className="flex gap-4 mb-6 mt-6 sm:mb-0 sm:mt-0">
          <img src="Item → Link → SVG.png" alt="insta" />
          <img src="Item → Link → SVG (1).png" alt="insta" />
          <img src="ic_baseline-facebook.png" alt="insta" />
          <img src="mdi_twitter.png" alt="insta" />
          <img src="mdi_pinterest.png" alt="insta" />
        </div>

        <p className="mr-auto sm:mr-0">©2025 All rights received</p>

        <div className="flex mr-auto sm:ml-auto sm:mr-0 mt-6 mb-6 sm:mb-0 sm:mt-0 gap-4">
          <img src="Item → Img.png" alt="" />
          <img src="Item → Img (1).png" alt="" />
          <img src="Item → Img (2).png" alt="" />
          <img src="Item → Img (3).png" alt="" />
          <img src="Item → Img (4).png" alt="" />
        </div>
      </div>
    </section>
  );
}
