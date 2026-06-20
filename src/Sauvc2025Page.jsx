import React, { useState } from 'react';
export default function Sauvc2025Page() {
  function Carousel() {
    const images = [
      '/sauvc_2025/images/carousel/carousel_pic_1.jpg',
      '/sauvc_2025/images/carousel/carousel_pic_2.jpg',
    ];
    const [idx, setIdx] = useState(0);
    const prev = () => setIdx((idx - 1 + images.length) % images.length);
    const next = () => setIdx((idx + 1) % images.length);
    return (
      <div className="relative max-w-3xl h-[50vh] flex items-center justify-center">
        <img src={images[idx]} alt="Team" className="rounded-xl object-cover w-full h-full" />
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
        <div className="text-lg">2025 March</div>
        <h1 className="text-5xl sm:text-6xl font-bold text-orange-500 mb-8">Singapore AUV Challenge</h1>
      </div>

      <section className="flex justify-center items-center flex-col md:flex-row pt-10 pb-15 px-8 md:px-20 bg-[#181818]">
        <div className="md:pt-20 pb-10 w-full max-w-7xl">
          <img 
            src="/sauvc_2025/images/sauvc_2025_img_1.jpg" 
            alt="sauvc"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </section>

      <section className="flex flex-col justify-start items-center pt-10 pb-15 px-8 md:px-20 bg-[#303030]">
        <div className="flex flex-col justify-center items-center text-center space-y-8 max-w-4xl">
          <h2 className="text-4xl font-extrabold text-orange-500 mb-8">SAUVC Overview</h2>
          <p className="text-lg sm:text-xl leading-relaxed">
            The Singapore Autonomous Underwater Vehicle Challenge (SAUVC) 2025 represents the 10th edition of this prestigious international competition organized by the IEEE Oceanic Engineering Society’s Singapore Chapter.
          </p>
          <div className="my-12 h-1 w-full bg-gradient-to-r from-transparent via-[#d73a1a] to-transparent shadow-lg shadow-[#d73a1a]/50"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-10 pb-20 max-w-7xl w-full">
          <div className="flex flex-col items-center">
            <div className="rounded-lg p-4 w-full">
              <img 
                src="/sauvc_2025/images/sauvc_2025_img_2.jpg" 
                alt="AUV showcase" 
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>
            <p className="text-gray-300 text-lg sm:text-xl leading-relaxed mt-4">
              Mecatron’s AUV (LUCY) being showcased
            </p>
          </div>

          <div className="space-y-8">
            <p className="text-gray-300 text-lg sm:text-xl leading-relaxed">
              These AUVs must navigate through controlled environments and perform tasks that mirror real-world offshore applications, such as navigation, depth control, and underwater acoustics, providing participants with valuable experience in AUV systems engineering.
            </p>
          </div>  
        </div>  
      </section>

      <section className="flex flex-col justify-start items-center pt-10 pb-15 px-8 md:px-20 bg-[#181818]">
        <div className="flex flex-col justify-center items-center text-center space-y-8 max-w-4xl">
          <h2 className="text-4xl font-extrabold text-orange-500 mb-8">2025 SAUVC Winners</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 pt-10 pb-20 max-w-7xl w-full gap-8">
          <div>
            <Carousel/>
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-gray-300 text-lg sm:text-xl leading-relaxed pt-2">
              50 teams from all around the world gathered in Singapore for the SAUVC held on 13th – 17th March 2025.
            </p>
            <p className="text-gray-300 text-lg sm:text-xl leading-relaxed">
              Mecatron’s AUV had the sixth fastest qualification timing of 16.90 seconds among the 20 qualified teams.
            </p>
            <p className="text-gray-300 text-lg sm:text-xl leading-relaxed">
              In the end, our 11-member team proceeded to clinch the 1st prize in the final round!
            </p>
            <p className="text-gray-300 text-lg sm:text-xl leading-relaxed pb-6">
              With our sights now set on RoboSub 2025 in California, we remain dedicated to refining our technologies and pushing the frontiers of autonomous underwater systems.
            </p>
          </div>
        </div>
      </section>

      <section className="flex flex-col justify-start items-center pt-10 pb-15 px-8 md:px-20 bg-[#303030]">
        <div className="flex flex-col justify-center items-center text-center space-y-8 max-w-4xl">
          <h2 className="text-4xl font-extrabold text-orange-500 mb-8">Changes Since 2024</h2>
          <p className="text-lg sm:text-xl leading-relaxed">
            Learn how Mecatron was able to clinch first place in SAUVC 2025.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 pt-20 pb-20 max-w-7xl w-full gap-10">
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-orange-500 mb-6">Non-technical Changes</h3>
            <p className="text-lg sm:text-xl leading-relaxed mb-6">
              Our team experienced meaningful maturation, with each member thoughtfully reflecting on previous mistakes.
            </p>
            <p className="text-lg sm:text-xl leading-relaxed mb-6">
              We expanded our team size while shifting focus toward mentorship, empowering more team members to contribute effectively. Additionally, we implemented more comprehensive documentation practices and strategic planning processes.
            </p>
            <div className="w-full rounded-lg p-4">
              <img 
                src="/sauvc_2025/images/sauvc_2025_img_4.jpg" 
                alt="team"
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-orange-500 mb-6">Technical Changes</h3>
            <p className="text-lg sm:text-xl leading-relaxed mb-6">
              We strategically prioritized well-established, battle-tested approaches with a strong emphasis on reliability, choosing these over more innovative but potentially unstable methods.
            </p>
            <p className="text-lg sm:text-xl leading-relaxed">
              We expanded our team size while shifting focus toward mentorship, empowering more team members to contribute effectively. Additionally, we implemented more comprehensive documentation practices and strategic planning processes.
            </p>
            <div className="rounded-lg p-4 mt-6 w-full">
              <img 
                src="/sauvc_2025/images/sauvc_2025_img_3.jpg" 
                alt="technical"
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center pt-10 pb-10 px-8 bg-[#303030]">
        <h2 className="text-4xl font-extrabold text-orange-500 mb-8">Watch Mecatron at SAUVC!</h2>
        <div className="flex flex-col md:flex-row justify-around pt-10 md:pt-20 gap-8 text-lg sm:text-xl">
          <div className="flex flex-col items-center space-y-6">
            <p className="font-bold text-lg sm:text-xl">Day 1</p>
            <video width="300" height="600" src="/sauvc_2025/videos/sauvc_2025_video_1.mp4" controls></video> 
          </div>
          <div className="flex flex-col items-center space-y-6">
            <p className="font-bold text-lg sm:text-xl">Day 2</p>
            <video width="300" height="600" src="/sauvc_2025/videos/sauvc_2025_video_2.mp4" controls></video> 
          </div>
          <div className="flex flex-col items-center space-y-6">
            <p className="font-bold text-lg sm:text-xl">Day 3</p>
            <video width="300" height="600" src="/sauvc_2025/videos/sauvc_2025_video_3.mp4" controls></video> 
          </div>
        </div>
      </section>  
    </div>
  );
}