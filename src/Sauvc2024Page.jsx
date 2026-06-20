import React, { useState } from 'react';
export default function Sauvc2024Page() {
  function Carousel() {
    const images = [
      '/sauvc_2024/images/carousel/sauvc_2024_carousel_1.jpeg',
      '/sauvc_2024/images/carousel/sauvc_2024_carousel_2.jpeg',
      '/sauvc_2024/images/carousel/sauvc_2024_carousel_3.jpeg',
      '/sauvc_2024/images/carousel/sauvc_2024_carousel_4.jpg',
    ];
    const [idx, setIdx] = useState(0);
    const prev = () => setIdx((idx - 1 + images.length) % images.length);
    const next = () => setIdx((idx + 1) % images.length);
    return (
      <div className="relative w-full max-w-xl h-auto flex items-center justify-center">
        <img src={images[idx]} alt="Team" className="rounded-xl object-cover w-full h-80" />
        <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-orange-500 text-black hover:text-white rounded-full p-2 shadow transition z-10">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
        </button>
        <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-orange-500 text-black hover:text-white rounded-full p-2 shadow transition z-10">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
        </button>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className={`w-3 h-3 rounded-full ${i === idx ? 'bg-orange-500' : 'bg-white/60'} border border-white`}
            />
          ))}
        </div>
      </div>
    );
  }

  return(
    <div className="min-h-screen bg-[#181818] text-white font-sans">
      <div className="flex flex-col md:flex-row pt-32 items-center md:justify-around text-center">
        <div className="text-lg">2024 April</div>
        <h1 className="text-5xl sm:text-6xl font-bold text-orange-500 mb-8">Singapore AUV Challenge</h1>
      </div>
      
      <section className="flex justify-center items-center flex-col md:flex-row pt-10 pb-15 px-8 md:px-20 bg-[#181818]">
        <div className="pt-20 pb-10 w-full max-w-7xl">
          <img 
            src="/sauvc_2024/images/sauvc_2024_img_1.jpeg" 
            alt="sauvc 2024"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </section>

      <section className="px-8 md:px-20 py-10 bg-[#303030]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="bg-gray-800 rounded-lg p-4">
                <img 
                  src="/sauvc_2024/images/turtle_boi.jpeg" 
                  alt="Autonomous Underwater Vehicle" 
                  className="w-full h-auto rounded-lg object-cover"
                />
              </div>
              <div className="space-y-4">
                <p className="text-gray-300 text-lg sm:text-xl leading-relaxed">
                  43 teams from all around the world gathered in Singapore for the SAUVC held on 5th – 8th April 2024.
                </p>

                <p className="text-gray-300 text-lg sm:text-xl leading-relaxed">
                  <span className="font-semibold">Mecatron's AUV had the third fastest qualification timing of 10.53 seconds among the qualified teams.</span>
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-gray-300 text-lg sm:text-xl leading-relaxed">
                  The Singapore AUV Challenge (SAUVC) is an exciting competition where teams build Autonomous Underwater Vehicles (AUVs).
                </p>
                
                <p className="text-gray-300 text-lg sm:text-xl leading-relaxed">
                  These AUVs must navigate through controlled environments and perform tasks that mirror real-world offshore applications, such as navigation, depth control, and underwater acoustics, providing participants with valuable experience in AUV systems engineering.
                </p>
              </div>
              <div className="md:pt-20">
                <Carousel/>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col md:flex-row items-center justify-between pt-10 pb-10 px-8 bg-[#303030]">
        <div className="flex flex-1 flex-col md:flex-row justify-evenly items-center mt-12 md:mt-0 space-y-8 md:space-y-0 text-lg sm:text-xl">
          <div className="flex flex-col items-center space-y-5">
            <p className="font-bold">Day 1</p>
            <video width="300" height="600" src="/sauvc_2024/videos/VID1.mp4" controls></video> 
          </div>
          <div className="flex flex-col items-center space-y-5">
            <p className="font-bold">Day 2</p>
            <video width="300" height="600" src="/sauvc_2024/videos/VID4.mp4" controls></video> 
          </div>
          <div className="flex flex-col items-center space-y-5">
            <p className="font-bold">Day 3</p>
            <video width="300" height="600" src="/sauvc_2024/videos/VID5.mp4" controls></video> 
          </div>
        </div>
      </section>
    </div>
  );
}