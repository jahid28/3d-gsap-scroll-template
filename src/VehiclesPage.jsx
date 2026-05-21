import Navbar from './Navbar';
import { VehicleDescription } from './components/VehicleDescription';

export default function VehiclesPage() {
  return (
    <div className="min-h-screen bg-[#181818] text-white w-full overflow-x-hidden">
      <Navbar />

      {/* Hero Header */}
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

      {/* Vehicles Content Container */}
      <div className="w-full">

        {/* Hydra Section */}
        <VehicleDescription
          title="Hydra 2026"
          description="Hydra 2026 is the direct evolution of our SAUVC Champion bot, Lucy. By maintaining Lucy's signature compact size while introducing major mechanical upgrades, Hydra is engineered to support high-performance dropper and gripper mechanisms."
          linkTo="/hydra"
          highlightBg={true}
          modelType="hydra"
          modelScale={[4,4,4]}
          tags={[
            "Topology Optimization",
            "Modular Frame Design",
            "Symmetric 8-thruster Configuration"
          ]}
        />
        
        {/* Kraken Section */}
        <VehicleDescription
          title="Kraken 2026"
          description="Built to push design boundaries, Kraken is our dedicated testbed for experimental hull materials. It is purpose-built to validate advanced actuation systems, including an integrated torpedo deployment setup."
          linkTo="/kraken"
          modelType="kraken"
          modelScale={[4,4,4]}
          tags={[
            "Aerodynamic Airfoil Wing Skeleton (Acrylic)",
            "Precision CNC Enclosure",
            "Upgraded 8-thruster Configuration"
          ]}
        />

        {/* Kevin Section */}
        <VehicleDescription
          title="Kevin 2025"
          description="Our flagship ROV designed for precision and reliability. Kevin features advanced manoeuvrability and energy efficiency, making it perfect for underwater exploration and competition."
          linkTo="/kevin"
          highlightBg={true}
          tags={[
            "Advanced Thruster Configuration",
            "Energy-efficient Design",
            "Competition-tested Reliability"
          ]}
        />

        {/* Lucy Section */}
        <VehicleDescription
          title="Lucy 2025"
          description="Our newest ROV featuring sleek design and enhanced capabilities. Lucy is equipped with 5 thrusters and stylish pink accents, designed for both performance and aesthetics."
          linkTo="/lucy"
          modelType="lucy"
          modelScale={[4, 4, 4]}
          tags={[
            "SAUVC 2025 Champion",
            "5-thruster Configuration",
            "3+ hour Battery Life",
          ]}
        />

      </div>
    </div>
  );
}