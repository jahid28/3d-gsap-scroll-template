import { useState, useEffect } from 'react';


export default function Pen3DPage() {
  const showcaseImages = [
    '/images/3dpen_8.jpg',
    '/images/3dpen_9.jpg',
    '/images/3dpen_10.jpg',
    '/images/3dpen_11.jpg',
    '/images/3dpen_12.jpg',
  ];

  const GlassBox = ({ children, color = '#ffffff', blur = 7,intensity=0.15, padding='0px', ...props }) => {
  const hexToRgba = (hex, alpha) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  const glassStyle = {  
    backgroundColor: `${hexToRgba(color,intensity)}`,
    backdropFilter: `blur(7px)`,
    WebkitBackdropFilter: `blur(${blur}px)`, // for safari support
    boxShadow: '10px 10px 10px rgba(30, 30, 30, 0.4)',
    borderLeft: `solid 1px rgba(255,255,255,0.03)}`,
    borderTop: `solid 1px rgba(255,255,255,0.03)}`,
    borderRadius: '16px',
    padding: padding,
    ...props.style
  };

  return <div style={glassStyle} {...props} className='mt-8 '>{children}</div>;
};

  return (
    <div className="bg-gradient-to-t from-black from-10% to-red-500  text-white px-6 py-16 space-y-16">
      <div className="max-w-6xl mx-auto pt-12">
      <div className="flex items-start justify-between w-full">
      <p className="text-white text-lg">June 2025</p>
          <h1 className="text-5xl text-orange-600 font-bold text-right leading-[0.9] bg-gradient-to-r from-red-400 to-white inline-block text-transparent bg-clip-text pb-2">3D Pen Series<br />Workshop</h1>
        </div>
      </div>

        {/* Showcase */}
        <GlassBox color="#ffffff" blur={10} padding='30px'>
        <div className="text-white mt-16">
          <div className='text-center'>
            <h2 className="bg-gradient-to-r from-red-400 to-white inline-block text-transparent bg-clip-text text-4xl font-bold mb-4 pb-1">Design Showcase</h2>
          </div>
          <p className="text-center mb-8">Our participants did an awesome job!</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 justify-center">
            {showcaseImages.map((src, i) => (
              <div
                key={i}
                className={`bg-white p-4 pb-12 rounded-md shadow-lg transform transition-transform hover:scale-105
                  ${i % 2 === 0 ? '-rotate-3' : 'rotate-3'}
                `}
                style={{ maxWidth: '200px', margin: '0 auto' }}
              >
                <img
                  src={src}
                  alt={`Showcase ${i + 1}`}
                  className="w-full object-cover aspect-square rounded-sm"
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>
        </GlassBox>

      {/* Section 1 */}
        <GlassBox color="#ffffff" blur={10}>
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="flex-1 flex justify-center items-center py-8 max-w-xl w-full">
            <img
              src="/images/3dpen_1.jpg"
              alt="Picture"
              className="rounded-xl w-full h-auto max-h-[600px] object-fit"
            />
          </div>

          <div className="flex-1 flex flex-col justify-center items-start py-8">
            <h3 className="text-2xl font-extrabold pb-8 bg-gradient-to-r from-red-400 to-white inline-block text-transparent bg-clip-text text-4xl font-bold mb-4">Unleashing Creativity with Technology</h3>
            <GlassBox color="#ffffff" blur={10} padding='16px'>
            <p>On 5 June, Mecatron proudly conducted a 3D Pen Workshop for a vibrant group of 38 participants from Vietnam. As part of our growing 3D Pen Series, this hands-on session aimed to blend creativity and technology, allowing participants to explore 3D art using specially provided pens.</p>
            </GlassBox>
          </div>
        </div>
        </GlassBox>

    {/* Section 2 */}
    <GlassBox color="#ffffff" blur={10} padding='20px'>
    <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8">
    
      <div className="flex-1 flex flex-col justify-center items-start">
            <h3 className="text-2xl font-extrabold pb-8 bg-gradient-to-r from-red-400 to-white inline-block text-transparent bg-clip-text text-4xl font-bold mb-4 ">First-Time Wonders with 3D</h3>
            <GlassBox color="#ffffff" blur={10} padding='16px'>
            <p>For many, it was their first time experimenting with this medium, and the results were nothing short of inspiring. The room was buzzing with energy as attendees took on the challenge of bringing their imaginations to life in 3D form.</p>
            </GlassBox>

      </div>

      <div className="flex-1 flex justify-center items-center">
        <ImageCarousel1 />
      </div>
    </div>  
    </GlassBox>



    {/* Section 3 */}
    <GlassBox color="#ffffff" blur={10} padding='20px'>

    <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8">

      <div className="flex-1 flex justify-center items-center">
        <ImageCarousel2 />
      </div>
      <div className="flex-1 flex flex-col justify-center items-start">
            <h3 className="text-2xl font-extrabold pb-8 bg-gradient-to-r from-red-400 to-white inline-block text-transparent bg-clip-text text-4xl font-bold mb-4">Guided Exploration and Collaborative Learning</h3>
            <GlassBox color="#ffffff" blur={10} padding='16px'>
            <p>Participants were encouraged to let their creativity flow freely, some worked entirely freehand, while others carefully followed stencils to craft detailed shapes and figures. The workshop environment fostered curiosity and patience, as individuals helped each other troubleshoot, shared ideas, and celebrated completed works together.</p>
            </GlassBox>
      </div>
    </div>  
      </GlassBox>


    </div>
  );
}

function ImageCarousel1() {
  const images = [
    '/images/3dpen_2.jpg',
    '/images/3dpen_3.jpg',
    '/images/3dpen_4.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full max-w-xl h-[400px] rounded-xl overflow-hidden mx-auto">
      <img
        src={images[currentIndex]}
        alt=""
        className="object-cover w-full h-full transition-opacity duration-500 ease-in-out"
      />

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-3 h-3 rounded-full ${i === currentIndex ? 'bg-orange-500' : 'bg-white/50'} border border-white`}
          />
        ))}
      </div>
    </div>
  );
}

function ImageCarousel2() {
  const images = [
    '/images/3dpen_5.jpg',
    '/images/3dpen_6.jpg',
    '/images/3dpen_7.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full max-w-xl h-[400px] rounded-xl overflow-hidden mx-auto">
      <img
        src={images[currentIndex]}
        alt=""
        className="object-cover w-full h-full transition-opacity duration-500 ease-in-out"
      />

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-3 h-3 rounded-full ${i === currentIndex ? 'bg-orange-500' : 'bg-white/50'} border border-white`}
          />
        ))}
      </div>
    </div>
  );
}