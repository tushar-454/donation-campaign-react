const Hero = () => {
  return (
    <div className='bg-[url("/src/assets/overlay.png")] bg-no-repeat bg-cover w-full h-[60vh] relative -top-28 -z-20'>
      <div className='w-full h-full bg-[#FFFFFFDE] grid justify-center content-center'>
        <div className='container mx-auto px-4'>
          {/* hero section content wraper  */}
          <div className='space-y-5 -z-20'>
            <div className='heroTitle'>
              <h1 className='text-3xl md:text-4xl xl:text-5xl text-center text-secoundary font-bold'>
                I Grow By Helping People In Need
              </h1>
            </div>
            <div className='searchGroup flex justify-center items-center'>
              <input
                type='search'
                placeholder='search here ...'
                className='w-full md:w-[420px] text-[#0B0B0B66] outline-none border border-line rounded-lg px-4 py-3'
              />
              <button className='w-fit text-white bg-primary outline-none border border-primary px-4 py-3 rounded-tr-lg rounded-br-lg -ml-4 mr-4'>
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
