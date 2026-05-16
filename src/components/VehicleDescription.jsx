import { Link } from 'react-router-dom';
import { Optimized3DViewer } from './Optimized3DViewer';

export function VehicleDescription({
  title,
  description,
  tags = [],
  linkTo,
  modelType,
  modelScale = [5, 5, 5],
  reverseLayout = false,
  highlightBg = false,
}) {
  return (
    <section
      className={`w-full py-4 sm:py-6 transition-colors duration-300 ${
        highlightBg ? 'bg-[#222]' : 'bg-transparent'
      }`}
    >
      {/* Inner Container: Restricts the maximum width of the content and centers it */}
      <div 
        className={`max-w-7xl mx-auto sm:px-12 flex flex-col lg:flex-row items-center justify-center gap-12 ${
          reverseLayout ? 'lg:flex-row-reverse' : ''
        }`}
      >
      {/* Content Block */}
      <div className="flex-1 text-center lg:text-left sm:px-8">
          <h2 className="text-4xl font-bold text-orange-500 mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
            {description}
          </p>

        {/* Tags (Rounded Badges) */}
        <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-8">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-4 py-1.5 text-xs sm:text-sm font-semibold rounded-full bg-zinc-800 text-gray-200 border border-zinc-700 shadow-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Button */}
        <div className="mt-4">
          <Link
            to={linkTo}
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2.5 text-sm sm:text-base rounded-lg shadow-lg hover:shadow-orange-500/20 transition-all duration-200"
          >
            Meet {title.split(' ')[0]}
          </Link>
        </div>
      </div>

      {/* 3D Viewer Block */}
      <div className="flex-1 flex items-center justify-center">
        <div className="w-[24rem] h-[24rem] md:w-[32rem] md:h-[32rem] lg:w-[40rem] lg:h-[40rem] flex items-center justify-center overflow-hidden relative backdrop-blur-sm border border-zinc-800/50">
          <Optimized3DViewer
            showModel={true}
            scale={modelScale}
            enableTouchControls={true}
            modelType={modelType}
          />
        </div>
      </div>
    </div>
    </section>
  );
}