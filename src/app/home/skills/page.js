import { PORTFOLIO_DATA } from "@/constant/constant";

const SkillsPage = () => (
  <div className="min-h-screen bg-black pt-24 pb-16">
    <div className="max-w-6xl mx-auto px-6">

      {/* Heading */}
      <h1 className="text-5xl font-extrabold text-white mb-3">
        Technical Skills
      </h1>
      <p className="text-gray-400 text-lg mb-14">
        A snapshot of my development toolkit
      </p>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {PORTFOLIO_DATA.skills.map((skill, index) => (
          <div
            key={index}
            className="p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 
                       shadow-lg"
            style={{ animationDelay: `${index * 120}ms` }}
          >
            
            {/* Category */}
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-red-500 text-3xl">⬤</span>
              {skill.category}
            </h3>

            {/* Skill List */}
            <div className="space-y-5 mb-6">
              {skill.items.map((item, i) => (
                <div key={i}>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-200 font-medium">{item}</span>
                    <span className="text-gray-400 text-sm">{skill.level}%</span>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full h-2 bg-gray-700/50 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-red-600 to-red-400 
                                 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

          </div>
        ))}
      </div>

    </div>
  </div>
);

export default SkillsPage;