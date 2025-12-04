import { PORTFOLIO_DATA } from "@/constant/constant";

const JourneyPage = () => (
  <div className="min-h-screen bg-black pt-24 pb-12">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Title */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
        My Journey: Original Series
      </h1>

      <p className="text-gray-400 text-lg sm:text-xl mb-10">
        The story of growth, challenges, and achievements
      </p>

      {/* Episodes */}
      <div className="space-y-6">
        {PORTFOLIO_DATA.journey.map((episode, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-gray-900 to-gray-800 p-4 sm:p-6 rounded-lg flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl animate-slide-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Year Block */}
            <div className="text-center min-w-[80px] sm:min-w-[100px]">
              <div className="text-xl sm:text-2xl font-bold text-red-600">
                {episode.start}-{episode.end}
              </div>
            </div>

            {/* Content */}
            <div className="flex-1">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                {episode.title}
              </h3>
              <h5 className="text-lg sm:text-xl text-white mb-2">
                {episode.organization}
              </h5>
              <p className="text-sm sm:text-base text-gray-400">
                {episode.description}
              </p>
            </div>

          </div>
        ))}
      </div>
    </div>
  </div>
);


  export default JourneyPage;