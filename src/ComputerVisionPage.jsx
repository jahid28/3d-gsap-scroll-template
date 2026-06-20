import React, { useState, useEffect } from 'react';


export default function ComputerVisionPage() {
  return (
<div className="bg-[#1a1a1a] text-white px-4 sm:px-8 py-16 space-y-20 overflow-x-hidden">
<div className="max-w-6xl mx-auto pt-12">
        <div className="flex items-start justify-between w-full">
          <p className="text-white text-sm">September 2024</p>
          <h1 className="text-5xl text-orange-600 font-bold text-right leading-[0.9]">
            Computer Vision<br />Workshop</h1>
        </div>

        {/* Section 1 */}
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8">
          {/* Photo */}
          <div className="flex-1 flex justify-center items-center py-8 max-w-xl w-full">
            <PolaroidPhoto
              src="/images/computervision_2.jpg"
              alt="Photo"
              caption="100% focused on powering the robot"
              rotate="-rotate-6"
              photocolour='#ffffffff'
            />
          </div>

          {/* Text */}
          <div className="flex-1 flex flex-col justify-center items-start py-8">
            <h3 className="text-2xl font-extrabold pb-8">Getting Started with Computer Vision</h3>
            <p>This workshop introduces <b>Roboflow</b>, guiding attendees through data collection, labeling, and training a  <b>YOLO (You Only Look Once)</b> model for object detection.</p>
            <br />
            <p> Participants will program a ball-tracking robot using Arduino and a UVC camera, learning to integrate hardware and software for real-time object detection and motion control.</p>
          </div>
        </div>

        {/* Section 2 */}
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8">

          {/* Text */}
          <div className="flex-1 flex flex-col justify-center items-start py-8">
            <p>This combination of practical robotics and advanced computer vision techniques provides a comprehensive foundation for building intelligent systems. Perfect for enthusiasts and beginners alike!</p>
          </div>

          {/* Photo */}
          <div className="flex-1 flex justify-center items-center py-8 max-w-xl w-full">
            <PolaroidPhoto
              src="/images/computervision_3.jpg"
              alt="Photo 3"
              caption="Another fully-focused team!"
              rotate="rotate-3"
              photocolour='#ffffffff'
            />
          </div>

        </div>

      </div>

      <section className="w-full bg-[#2a2626] pt-16">
        <h2 className="text-4xl font-extrabold text-orange-500 pb-4 text-center">Workshop Objectives</h2>
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 py-16 px-8">
          <InfoColumn
            image="/images/computervision_4.jpg"
            heading="Understanding Computer Vision"
            bullets={[
              "Survey of real-world CV applications",
              "Types of Computer Vision tasks, including detection, segmentation, pose estimation",
              "Innovation principles and product development",
            ]}
            caption=" "
            rotate="-rotate-2"
          />

          <InfoColumn
            image="/images/computervision_5.jpg"
            heading="Machine Learning Fundamentals"
            bullets={[
              "    Training principles and data importance",
              "Performance monitoring and avoiding overfitting",
            ]}
            caption=" "
            rotate="rotate-1"
          />

          <InfoColumn
            image="/images/computervision_1.jpeg"
            heading="Practical Application"
            bullets={[
              "    Model deployment",
              "Building a ball-tracking camera system with Arduino",
            ]}
            caption=" "
            rotate="-rotate-1"
          />
        </div>

      </section>

      {/* Video Section */}
      <section className="w-full bg-[#1a1a1a] py-16">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-center px-2 gap-8">
          {/* Left: Text */}
          <div className="flex-1 flex flex-col justify-center items-start py-8">
            <h2 className="text-4xl font-extrabold text-orange-500 mb-6">Live Demo</h2>
            <p className="text-lg text-white mb-6">
              Watch our participants bring vision to life by programming and testing their ball-tracking robots in action using Arduino and computer vision!
            </p>
          </div>

          {/* Right: Video */}
          <div className="flex-1 flex justify-center items-center py-8 max-w-xl w-full">
            <video
              src="/images/computervision_video.mp4"
              controls
              className="rounded-xl w-full h-auto max-h-[600px] object-cover"
            >
              Your browser does not support the video tag.
            </video>
          </div>
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
        <p className="text-black mt-2 text-sm italic font-bold">{caption}</p>
      )}
    </div>
  );
}

function InfoColumn({ image, heading, bullets, caption, rotate = '' }) {
  return (
    <div className="flex flex-col items-center text-center space-y-4">
      {/* Polaroid-style image */}
      <div className={`bg-white p-4 pb-10 shadow-md rounded-md transform ${rotate}`}>
        <img
          src={image}
          alt={heading}
          className="w-64 aspect-[5/3] object-cover mx-auto rounded"
        />
        {caption && (
          <p className="text-orange-500 mt-2 text-sm italic font-bold">{caption}</p>
        )}
      </div>

      {/* Heading + Subheading */}
      <h3 className="text-xl font-bold text-orange-500">{heading}</h3>

      {/* Bullet points */}
      <ul className="text-left text-sm text-white list-disc list-inside space-y-1">
        {bullets.map((point, idx) => (
          <li key={idx}>{point}</li>
        ))}
      </ul>
    </div>
  );
}
