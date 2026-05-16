import { Optimized3DViewer } from './components/Optimized3DViewer';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

export default function VehiclesPage() {
  return (
    <div className="min-h-screen bg-[#181818] text-white">
      <Navbar />
      <div className="pt-20 px-4 sm:px-8">

        <section
        className="relative w-full min-h-[70vh] flex flex-col justify-center items-center text-center px-4 sm:px-8 py-24 bg-cover bg-center text-white"
        style={{ backgroundImage: "url('/images/bot_1.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/60 z-0" />
        <div className="relative z-10">
        <h1 className="text-5xl font-bold text-orange-500 mb-8 text-center">Our Vehicles</h1>
        <p className="text-lg text-center mb-16">Explore our innovative underwater vehicles!</p>

        </div>
      </section>
        
        {/* Vehicles Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          {/* Kevin Section */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 mb-20 p-4 pt-8 sm:p-0 sm:pt-0">
            <div className="flex-1 text-center lg:text-left">
              <Link to="/kevin" className="block hover:scale-105 transition-transform duration-300">
                <h2 className="text-4xl font-bold text-white mb-4 hover:text-orange-500 transition-colors">Kevin</h2>
                <p className="text-lg text-gray-300 mb-6">
                  Our flagship ROV designed for precision and reliability. Kevin features advanced manoeuvrability 
                  and energy efficiency, making it perfect for underwater exploration and competition.
                </p>
                <div className="space-y-2 text-gray-400">
                  <p>• Advanced thruster configuration</p>
                  <p>• Energy-efficient design</p>
                  <p>• Competition-tested reliability</p>
                </div>
              </Link>
            </div>
            <div className="flex-1 flex items-center justify-center">
              {/* Kevin 3D model container */}
              <div className="w-[24rem] h-[24rem] sm:w-[24rem] sm:h-[24rem] md:w-[32rem] md:h-[32rem] lg:w-[44rem] lg:h-[44rem] rounded-full flex items-center justify-center overflow-hidden relative bg-transparent">
                <Optimized3DViewer 
                  showModel={true}
                  scale={[5, 5, 5]}
                  enableTouchControls={true}
                />
              </div>
            </div>
          </div>

          {/* Lucy Section */}
          <div className="flex flex-col lg:flex-row-reverse items-center justify-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <Link to="/lucy" className="block hover:scale-105 transition-transform duration-300">
                <h2 className="text-4xl font-bold text-white mb-4 hover:text-orange-500 transition-colors">Lucy</h2>
                <p className="text-lg text-gray-300 mb-6">
                  Our newest ROV featuring sleek design and enhanced capabilities. Lucy is equipped with 
                  5 thrusters and stylish pink accents, designed for both performance and aesthetics.
                </p>
                <div className="space-y-2 text-gray-400">
                  <p>• 5-thruster configuration</p>
                  <p>• 3+ hour battery life</p>
                  <p>• SAUVC 2025 champion</p>
                </div>
              </Link>
            </div>
            <div className="flex-1 flex items-center justify-center">
              {/* Lucy 3D model container */}
              <div className="w-[24rem] h-[24rem] sm:w-[24rem] sm:h-[24rem] md:w-[32rem] md:h-[32rem] lg:w-[44rem] lg:h-[44rem] rounded-full flex items-center justify-center overflow-hidden relative bg-transparent">
                <Optimized3DViewer 
                  showModel={true}
                  scale={[4, 4, 4 ]}
                  enableTouchControls={true}
                  modelType="lucy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 