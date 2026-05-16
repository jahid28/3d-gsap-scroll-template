import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function SponsorsPage() {
  const sectionRefs = {
    home: useRef(null),
    services: useRef(null),
    about: useRef(null),
    portfolio: useRef(null),
    contact: useRef(null),
    competitions: useRef(null),
  };

  return (
    <div className="min-h-screen bg-[#181818] text-white flex flex-col items-center">
      {/* Sponsors Hero Banner */}
      <section
        className="relative w-full min-h-[70vh] flex flex-col justify-center items-center text-center px-4 sm:px-8 py-24 bg-cover bg-center text-white"
        style={{ backgroundImage: "url('/images/sponsors_banner.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/60 z-0" />
        <div className="relative z-10">
          <h1 className="text-5xl sm:text-6xl font-bold text-orange-500 mb-8">Sponsors and Supporters</h1>
          <p className="max-w-4xl text-lg sm:text-xl leading-relaxed">
            We extend our heartfelt gratitude to our sponsors for placing their trust in Mecatron, a young and passionate team. Their generous support has provided the resources needed to explore new frontiers and push the boundaries of innovation. With their backing, Mecatron has been able to grow, learn, and bring ideas to life. We are deeply grateful for their belief in our journey.
          </p>
        </div>
      </section>

      <section className="w-full bg-[#AAAAAA] py-12">
        <div className="max-w-screen-xl mx-auto px-8">
          
          <h2 className="text-4xl font-extrabold text-black text-center mb-6">
            Our Sponsors and Supporters
          </h2>

          <div className="flex flex-col lg:flex-row items-center gap-12">
            
            {/* Left - Sponsors Image */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <img
                src="/images/tiered_sponsors.png"
                alt="Sponsors by tier"
                className="w-full max-w-2xl object-contain"
              />
            </div>

            {/* Right - Text + Button */}
            <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
              
              <p className="text-lg text-black leading-relaxed">
                Interested in sponsoring our team? Mecatron provides organizations
                with the opportunity to inspire and support the development of future
                engineers while connecting with NTU students. If you’re interested in
                sponsoring us, contact us with just a click!
              </p>

              <Link to="/contact">
                <button className="bg-orange-500 text-white font-extrabold px-8 py-3 rounded-xl transition hover:bg-orange-600">
                  Contact Us
                </button>
              </Link>

            </div>
          </div>
        </div>
      </section>


      {/* FSTD Section */}
      <section ref={sectionRefs.services}
      className="min-h-[500px] w-full bg-[#ffffff] flex flex-col md:flex-row items-center justify-center py-12">
    <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-center px-8 gap-8">
    
      <div className="flex-1 flex flex-col justify-center items-start py-8">
        <h2 className="text-4xl font-extrabold text-black mb-8">FUTURE SYSTEMS & TECHNOLOGY DIRECTORATE</h2>
        <p className="text-lg text-black mb-6">
          FSTD spearheads the Singapore Armed Forces’ long-term innovation efforts, driving game-changing military capabilities through strategic R&D planning and experimentation. As a key enabler of next-gen defense technologies, FSTD supports initiatives that shape future warfighting and autonomous systems — aligning closely with Mecatron’s vision for cutting-edge innovation.        
        </p>
      </div>

      <div className="flex-1 flex justify-center items-center py-8">
        <img
          src="/images/logos/fstd_logo.webp"
          alt="Photo"
          className="w-full max-w-3xl rounded-xl object-cover"
        />
      </div>

      </div>  
    </section>

    {/* SMF Section */}
    <section ref={sectionRefs.services}
      className="min-h-[500px] w-full bg-[#d4f8fa] flex flex-col md:flex-row items-center justify-center py-12">
    <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-center px-8 gap-8">

      <div className="flex-1 flex justify-center items-center py-8">
        <img
          src="/images/logos/smf_logo.webp"
          alt="Photo"
          className="w-full max-w-3xl rounded-xl object-cover"
        />
      </div>
    
      <div className="flex-1 flex flex-col justify-center items-start py-8">
        <h2 className="text-4xl font-extrabold text-black mb-8">Singapore Maritime Foundation</h2>
        <p className="text-lg text-black mb-6">
          As a key driver of Singapore’s maritime future, SMF promotes innovation, talent development, and global collaboration to strengthen Singapore as an International Maritime Centre. Their support empowers Mecatron NTU to explore cutting-edge autonomous technologies and nurture the next generation of maritime engineering talent.    
        </p>
      </div>
      </div>  
    </section>

        {/* DSO Section */}
    <section ref={sectionRefs.services}
      className="min-h-[500px] w-full bg-[#E2F4FD] flex flex-col md:flex-row items-center justify-center py-12">
    <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-center px-8 gap-8">
    
      <div className="flex-1 flex flex-col justify-center items-start py-8">
        <h2 className="text-4xl font-extrabold text-black mb-8">DSO National Laboratories</h2>
        <p className="text-lg text-black mb-6">
          We are especially grateful to DSO National Laboratories, Singapore’s largest defence research and development organisation, for their generous monetary sponsorship and the trust they have placed in Mecatron. Their support has provided us with valuable opportunities to innovate, strengthen our autonomous systems, and better prepare for international underwater robotics competitions.    
        </p>
      </div>

      <div className="flex-1 flex justify-center items-center py-8">
        <img
          src="/images/logos/dso_colour_logo.png"
          alt="Photo"
          className="w-full max-w-3xl object-cover"
        />
      </div>

      </div>  
    </section>

    {/* VectorNav Section */}
    <section ref={sectionRefs.services}
      className="min-h-[500px] w-full bg-[#000000] flex flex-col md:flex-row items-center justify-center py-12">
    <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-center px-8 gap-8">
    
      <div className="flex-1 flex flex-col justify-center items-start py-8">
        <h2 className="text-4xl font-extrabold text-white mb-8">VectorNav</h2>
        <p className="text-lg text-white mb-6">
          We are deeply grateful to VectorNav for their generous equipment sponsorship to Mecatron. Their sponsorship of two VN-100 IMU units, along with lifetime technical support, has significantly strengthened our navigation and sensing capabilities. The reliability and precision of their inertial navigation technology have been invaluable in supporting the development and testing of our autonomous underwater vehicle systems.
        </p>
      </div>

      <div className="flex-1 flex justify-center items-center py-8">
        <img
          src="/images/logos/vectornav_logo.png"
          alt="Photo"
          className="w-full max-w-3xl object-cover"
        />
      </div>

      </div>  
    </section>

        {/* Waterlinked Section */}
    <section ref={sectionRefs.services}
      className="min-h-[500px] w-full bg-[#1F3654] flex flex-col md:flex-row items-center justify-center py-12">
    <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-center px-8 gap-20">

      <div className="flex-1 flex justify-center items-center py-8">
        <img
          src="/images/logos/waterlinked2.svg"
          alt="Photo"
          className="w-full max-w-3xl object-cover"
        />
      </div>
    
      <div className="flex-1 flex flex-col justify-center items-start py-8">
        <h2 className="text-4xl font-extrabold text-white mb-8">WaterLinked</h2>
        <p className="text-lg text-white mb-6">
          We are deeply grateful to Water Linked for their ongoing support and for championing student innovation in the marine robotics community. Specifically, the Water Linked Doppler Velocity Log DVL A50 integrates seamlessly with our compact autonomous underwater vehicle (AUV) design, providing reliable, low-drift positioning data that is central to our AUV's autonomous performance.
        </p>
      </div>
      </div>  
    </section>

    {/* Espressif Section */}
    <section ref={sectionRefs.services}
      className="min-h-[500px] w-full bg-[#FFFFFF] flex flex-col md:flex-row items-center justify-center py-12">
    <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-center px-8 gap-8">
    
      <div className="flex-1 flex flex-col justify-center items-start py-8">
        <h2 className="text-4xl font-extrabold text-black mb-8">Espressif Systems</h2>
        <p className="text-lg text-black mb-6">
          Extremely grateful to Espressif Systems for their generous sponsorship of development boards and embedded hardware modules, including the ESP32-S3-EYE V2.2, ESP32-S3-Korvo-2 V3.1, and ESP32-P4-EYE platforms. Their support provided our electronics team with access to advanced embedded systems and development tools, helping us explore new possibilities in onboard computing and system integration for our autonomous underwater vehicle projects.
        </p>
      </div>

      <div className="flex-1 flex justify-center items-center py-8">
        <img
          src="/images/logos/espressif_stacked.svg"
          alt="Photo"
          className="w-full max-w-md object-contain"
        />
      </div>

      </div>  
    </section>

    {/* Aquarian Audio Section */}
    <section ref={sectionRefs.services}
      className="min-h-[500px] w-full bg-[#143E7A] flex flex-col md:flex-row items-center justify-center py-12">
    <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-center px-8 gap-8">
    
      <div className="flex-1 flex flex-col justify-center items-start py-8">
        <h2 className="text-4xl font-extrabold text-white mb-8">Aquarian Audio</h2>
        <p className="text-lg text-white mb-6">
          Our team would like to express our sincere appreciation to Aquarian Audio for their support. Their AS-1 Hydrophones have greatly aided our acoustic sensing and underwater signal processing efforts, essential for our competition success. 
        </p>
      </div>

      <div className="flex-1 flex justify-center items-center py-8">
        <img
          src="/images/logos/aquarian_logo.webp"
          alt="Photo"
          className="w-full max-w-md object-contain"
        />
      </div>

      </div>  
    </section>

    {/* DWE Section */}
    <section ref={sectionRefs.services}
      className="min-h-[500px] w-full bg-[#FFFFFF] flex flex-col md:flex-row items-center justify-center py-12">
    <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-center px-8 gap-8">
    
      <div className="flex-1 flex flex-col justify-center items-start py-8">
        <h2 className="text-4xl font-extrabold text-black mb-8">DeepWater Exploration Inc.</h2>
        <p className="text-lg text-black mb-6">
          We are especially grateful to DWE for their generous support! Their exploreHD 3.0 underwater cameras have played a key role in advancing our AUV perception capabilities, enabling our team to develop robust underwater robotic systems for competition and research applications.
        </p>
      </div>

      <div className="flex-1 flex justify-center items-center py-8">
        <img
          src="/images/logos/dwe_dark_logo.svg"
          alt="Photo"
          className="w-full max-w-md object-contain"
        />
      </div>

      </div>  
    </section>

        {/* Sonardyne Section */}
    <section
        ref={sectionRefs.services}
        className="relative min-h-[500px] w-full bg-[url('/images/sonardyne_bg.jpg')] bg-cover bg-center flex items-center justify-center py-12"
      >
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="relative z-10 max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-center px-8 gap-8 text-white">
          <div className="flex-1 flex flex-col justify-center items-start">
            <h2 className="text-4xl font-extrabold mb-8">
              Sonardyne
            </h2>
            <p className="text-lg mb-6">
              We are incredibly grateful to Sonardyne. for their generous support and partnership. Their loan of cutting-edge subsea equipment has been invaluable to our project, enabling us to push boundaries in underwater exploration and technology. Additionally, their financial sponsorship has also further empowered our team to achieve our goals and enhance our capabilities.
            </p>
            <p className="text-lg mb-6">
              Sonardyne’s commitment to innovation and their investment in our vision play a crucial role in our success, and we are proud to have them as a key partner on our journey!
            </p>
          </div>

          <div className="flex-1 flex justify-center items-center">
            <img
              src="/images/logos/sonardyne-logo-white.svg"
              alt="Sonardyne Logo"
              className="w-full max-w-3xl rounded-xl object-cover"
            />
          </div>
        </div>
      </section>

    {/* TJDF Section */}
    <section ref={sectionRefs.services}
      className="min-h-[500px] w-full bg-[#FFFFFF] flex flex-col md:flex-row items-center justify-center py-12">
    <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-center px-8 gap-8">
    
      <div className="flex-1 flex flex-col justify-center items-start py-8">
        <h2 className="text-4xl font-extrabold text-black mb-8">The James Dyson Foundation</h2>
        <p className="text-lg text-black mb-6">
          Mecatron is housed in the Dyson-NTU Studio. We fully utilize the lab space for team meetings and lab equipment (i.e. 3D printers) for building our underwater vehicle! We are grateful for the support of the James Dyson Foundation as we strive to design robust underwater vehicles with potential real-life applications in mind, such as marine sampling.      
        </p>
      </div>

      <div className="flex-1 flex justify-center items-center py-8">
        <img
          src="/images/logos/jdf_clear.png"
          alt="Photo"
          className="w-full max-w-3xl object-cover"
        />
      </div>

      </div>  
    </section>

    {/* Zen4Blue Section */}
    <section ref={sectionRefs.services}
      className="min-h-[500px] w-full bg-[#141E30] flex flex-col md:flex-row items-center justify-center py-12">
    <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-center px-8 gap-8">

       <div className="flex-1 flex justify-center items-center py-8">
        <img
          src="/images/logos/zen4blue_logo.webp"
          alt="Photo"
          className="w-full max-w-3xl rounded-xl object-cover"
        />
      </div>

    
      <div className="flex-1 flex flex-col justify-center items-start py-8">
        <h2 className="text-4xl font-extrabold text-white mb-8">Zen4Blue</h2>
        <p className="text-lg text-white mb-6">
          Zen4Blue strives to protect the oceans by supporting sustainable fisheries, creating marine career opportunities for future generations, and restoring balance to the ocean ecosystems.      
        </p>
        <p className="text-lg text-white mb-6">
          We are grateful to Zen4Blue for their support of our team’s travel from Singapore to USA for the 2024 MATE ROV World Championship!      
        </p>
      </div>

      </div>  
    </section>

    {/* Zen4Blue Banner */}
    <section
      ref={sectionRefs.services}
      className="w-full bg-[#6EDDD8] flex flex-col md:flex-row items-center justify-center py-6"
    >
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-center px-8 gap-6">
        <div className="flex-1 flex flex-col justify-center items-start py-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Zen4Blue Proudly Sponsors The Mecatron ROV Team!
          </h2>
          <p className="text-base md:text-lg text-black mb-3">
            What a fun and noble cause to support! After meeting a few members of the Mecatron ROV team during Oceans 2024 conference in Singapore, our mission came to life when we decided to help raise funds to support the ROV team’s advancement to the MATE ROV World Championship.     
          </p>
          <p className="text-base md:text-lg text-black">
            Supporting the future generation of innovators in achieving their career goals in marine robotics and beyond is why we launched the Zen4Blue organization. We strive to make marine careers possible for everyone! Go Team Mecatron!    
          </p>
        </div>
      </div>  
    </section>

    {/* ROV MAKER Section */}
    <section ref={sectionRefs.services}
      className="min-h-[500px] w-full bg-[#FFFFFF] flex flex-col md:flex-row items-center justify-center py-12">
    <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-center px-8 gap-8">
    
      <div className="flex-1 flex flex-col justify-center items-start py-8">
        <h2 className="text-4xl font-extrabold text-black mb-8">ROV MAKER</h2>
        <p className="text-lg text-black mb-6">
          ROVMAKER pursues to make a combination of underwater technology with scientific research and education practice, creating a diverse community of subsea explorers, hobbyists, and professional users. We are grateful to ROVMAKER for supporting our team by assisting with troubleshooting and equipment testing.      
        </p>
        <p className="text-lg text-black mb-6">
          ROVMAKER致力于将水下技术与科学研究和教育实践相结合，创建一个由水下探险家、爱好者和专业用户组成的多元化社区。感谢ROVMAKER对于我们团队的支持，协助我们进行故障排除和设备测试。  
        </p>
      </div>

      <div className="flex-1 flex justify-center items-center py-8">
        <img
          src="/images/rovmaker_logo.png"
          alt="Photo"
          className="w-full max-w-3xl rounded-xl object-cover"
        />
      </div>

      </div>  
    </section>

    </div>
  );
}