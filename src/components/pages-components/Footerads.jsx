const FooterAds = () => {
    return (
      <div className="footer-adss bg-white flex justify-between flex-col xl:flex-row xl:justify-center mt-10">
        <div className="contact-box h-96 bg-slate-700 xl:w-2/5 xl:mr-5">
          <div className="some-text mt-16 ml-16 w-2/3 xl:w-full xl:ml-0 text-left text-white">
            <h3 className=" text-2xl xl:ml-16 ">GET IN TOUCH</h3>
            <h2 className=" text-4xl font-bold mt-10 xl:ml-16">CONTACT US</h2>
            <hr className=" w-1/6 mt-5 xl:ml-16" />
            <span>
              <p className="mt-9 xl:ml-16">Jln Cempaka Wangi No 22</p>
              <p className=" xl:ml-16">Bandung - Indonesia</p>
            </span>
            <h2 className=" text-2xl xl:ml-16 text-red-600 font-bold mt-9">
              +6221.2002.2012
            </h2>
          </div>
        </div>
  
        <div className="contact-box bg-slate-700 mt-8 pb-4 xl:w-2/5 xl:mt-0 xl:pb-0 xl:ml-5">
          <div className="some-text mt-16 ml-16 w-4/5 xl:w-full xl:ml-0 text-left text-white">
            <h3 className=" text-2xl xl:ml-16 ">RESERVATION</h3>
            <h2 className=" text-4xl xl:ml-16 font-bold mt-10">BOOK A TABLE</h2>
            <hr className=" w-1/6 xl:ml-16 mt-5" />
            <p className=" mt-9 xl:ml-16 xl:text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <button className=" w-1/2 h-10 md:h-14 md:text-xl mt-5 lg:w-1/4 xl:ml-16 bg-red-600">
              Book Now
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default FooterAds;
  