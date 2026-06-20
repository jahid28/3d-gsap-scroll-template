import React, { useState, useEffect } from 'react';


export default function Blender3DPage() {
  return (
    <div className="bg-[#1a1a1a] text-white">
      <div className="max-w-6xl mx-auto pt-28 px-6 pb-10">
      <div className="flex items-start justify-between w-full">
      <p className="text-white text-lg">October 2024</p>
          <h1 className="text-5xl text-orange-600 font-bold text-right leading-[0.9]">Blender <br />3D<br />Workshop</h1>
        </div>

        {/* Section 1 */}
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8">
          {/* Photo */}
          <div className="flex-1 flex justify-center items-center py-8 max-w-xl w-full">
            <PolaroidPhoto
              src="/images/blender3d_3.jpg"
              alt="Photo"
              caption="A sneak peek of what we can create with Blender"
              rotate="-rotate-6"
              photocolour='#EA580C'
            />
          </div>

          {/* Text */}
          <div className="flex-1 flex flex-col justify-center items-start py-8">
            <h3 className="text-2xl font-extrabold pb-8">Blender: The Industry Leader in 3D Modeling & Photorealistic Rendering</h3>

            <p>Blender enables artists to create detailed models and seamlessly integrate them into lifelike environments, making it the perfect tool for this workshop.</p>
            <br/>
            <p>Whether it is for marketing, game asset creation, or simply converting an image from your head to something others can see, creating 3D content is an extremely valuable skill.</p>
          </div>
        </div>

      </div>

      {/*Workshop Day 1*/}
      <section className="w-full bg-[#2a2626] pt-16">
        <h2 className="text-4xl font-extrabold text-orange-500 pb-4 text-center">Workshop Day 1</h2>
            <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 py-16 px-8">
                  <InfoColumn
                    image="/images/blender3d_2.jpg"
                    heading="Introduction to Product Design Fundamentals"
                    bullets={[
                      "Dyson Designers’ approach to product mockups", "Core elements of photorealism",
                    ]}
                    caption=" "
                    rotate="-rotate-2"
                  />

                  <InfoColumn
                    image="/images/blender3d_1.jpg"
                    heading="Blender Basics"
                    bullets={[
                      "UI Navigation", "Working with basic elements and modelling tools",
                    ]}
                    caption=" "
                    rotate="rotate-1"
                  />

                  <InfoColumn
                    image="/images/blender3d_4.jpg"
                    heading="Advanced Features & Resources"
                    bullets={[
                      "Key modifiers (Arrays, Boolean, Solidify)","Practical application through table modeling","Model importing and online resource utilization",
                    ]}
                    caption=" "
                    rotate="-rotate-1"
                  />
                </div>

      </section>

      {/*Workshop Day 2*/}
      <section className="w-full bg-[#1a1a1a] pt-16">
        <h2 className="text-4xl font-extrabold text-orange-500 pb-4 text-center">Workshop Day 2</h2>
            <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 py-16 px-8">
                  <InfoColumn
                    image="/images/blender3d_7.jpg"
                    heading="Materials and Texturing"
                    bullets={[
                      "PBR workflow and node-based material creation","Understanding maps",
                    ]}
                    caption=" "
                    rotate="rotate-2"
                  />

                  <InfoColumn
                    image="/images/blender3d_9.jpg"
                    heading="Lighting & Rendering"
                    bullets={[
                      "Lighting fundamentals and EEVEE engine optimization","Camera setup and compositing techniques",
                    ]}
                    caption=" "
                    rotate="-rotate-1"
                  />

                  <InfoColumn
                    image="/images/blender3d_8.jpg"
                    heading="Final Project"
                    bullets={[
                      "Creating product mockups","Troubleshooting incorrect settings","Social media showcase and promotion",
                    ]}
                    caption=" "
                    rotate="rotate-1"
                  />
                </div>

      </section>


    </div>
  );
}

function PolaroidPhoto({ src, alt, caption, rotate = '-rotate-3', photocolour = 'white' }) {
  return (
    <div
      className={`p-5 pb-10 shadow-lg rounded-lg w-fit text-center transform ${rotate}`}
      style={{ backgroundColor: photocolour }}
    >
      <img
        src={src}
        alt={alt}
        className="w-96 aspect-[5/3] object-cover mx-auto rounded-md"
      />
      {caption && (
        <p className="text-white mt-2 text-sm italic font-bold">{caption}</p>
      )}
    </div>
  );
}

function InfoColumn({ image, heading, bullets, rotate }) {
  return (
    <div className="flex flex-col items-center text-center space-y-4">
      {/* Polaroid with Clip */}
      <div className="relative">
        {/* Clip SVG */}
        <img
          src="/images/clip.svg"
          alt="Clip"
          className="absolute -top-11 left-1/2 -translate-x-1/2 w-24 h-20 z-20"
        />

        {/* Polaroid Photo */}
        <PolaroidPhoto src={image} alt={heading} rotate={rotate} />
      </div>

      {/* Heading & Bullets */}
      <h3 className="text-xl font-bold text-orange-500">{heading}</h3>
      <ul className="text-white list-disc list-inside text-left space-y-1 text-sm">
        {bullets.map((bullet, i) => (
          <li key={i}>{bullet}</li>
        ))}
      </ul>
    </div>
  );
}
