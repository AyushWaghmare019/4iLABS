import React from 'react';
import Members from '../components/Members.jsx';
import Achievements from '../components/Achievements.jsx';

import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";

const Home = () => {
  const projects = [
    {
      title: "Antahsagari",
      description: "Underwater ROV for exploring and navigation: An underwater rov that aims to explore and navigate the underwater world of mighty Brahmaputra River. A ROV that is capable of collecting data which can be used for various research purposes and developments.",
      image: img1,
      bgGradient: "from-blue-600/10 to-blue-900/10",
    },
    {
      title: "InNdrone",
      description: "An autonomous drone which can inspect indoor areas and move without the help of GPS. The drone is able to map entire area while constantly sensing for obstacles and planning its path to move safely and efficiently. It finds its application in hazardous situations like fire accidents, earthquakes etc. where human reach is not possible.",
      image: img2,
      bgGradient: "from-purple-600/10 to-purple-900/10",
    },
    {
      title: "Mitra",
      description: "Multi-Terrain Agricultural Bot: carrying out the legacy of ARLE, we present before you MITRA. An autonomous robot capable of navigation using computer vision, localization, 3D mapping and Sensor Data Management similar to ARLE to navigate around the field. It is capable to identify weeds and deployed with a mechanism to remove them. Also, it aims to help farmers in the irrigation of crops and guards the crop against pests.",
      image: img3,
      bgGradient: "from-green-600/10 to-green-900/10",
    },
    {
      title: "Multi Modal",
      description: `Multimodal AI is a cutting-edge field where the latest research is happening. 4i Labs is using Multimodal AI to help local businesses create their own posters using reference images and indigenous languages, replacing the need for designers.

Our solution aims to eliminate the branding problems faced by local small to medium scale businesses. We provide our indigenous text-to-image model which takes input images and prompts in local languages to generate the required poster, performing its own modifications.

Our team is extensively working to scrape well-captioned images, train an indigenous LLM from scratch, and fine-tune state-of-the-art text-to-image models.`,
      image: img4,
      bgGradient: "from-yellow-600/10 to-yellow-900/10",
    },
    {
      title: "Quantum Machine Learning",
      description: "This is a newly established research domain at 4i Labs, focused on exploring the potential of quantum computing in solving complex problems. The initiative applies quantum algorithms across various areas, including industry-grade synthetic data generation using Quantum GANs (QGANs), quantum optimization, and applications in cryptography. The domain is committed to advancing Quantum Machine Learning through collaborative research, practical implementations, and the exploration of near-term quantum advantage.",
      image: img5,
      bgGradient: "from-red-600/10 to-red-900/10",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="about" className="relative min-h-screen flex items-center justify-center text-center px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight">
            Design. Build.{' '}
            <span className="text-blue-400">Repeat.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
            The 4I Lab was founded to drive applied research in engineering technologies with real-world impact—both industrial and societal. Equipped with state-of-the-art design tools and rapid prototyping facilities, the lab serves as a hub for creativity and problem-solving.
            <br /><br />
            The name "4i" reflects our core values: Ideation, Innovation, Incubation, and Implementation—a complete cycle that transforms ideas into tangible solutions.
            <br /><br />
            At 4i Labs, we foster a collaborative culture where members support one another and inspire continuous innovation. Our mission is to be at the forefront of technological advancement and to empower others to think boldly, build smartly, and lead with purpose.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-black text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 shadow-lg">
          <h2 className="text-5xl font-bold text-center mb-4">Projects</h2>
          <p className="text-center text-gray-400 max-w-2xl mx-auto mb-16">
            RoboTeam tends to compete in a new competition every 1–2 years. These are some of the competitions we have worked towards in the past.
          </p>

          <div className="space-y-20">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                } items-center gap-10 bg-gradient-to-br ${project.bgGradient} rounded-xl p-4`}
              >
                {/* Image */}
                <div className="w-full md:w-1/2 overflow-hidden rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full max-h-[350px] object-contain mx-auto transition-transform duration-300 ease-in-out"
                  />
                </div>

                {/* Text */}
                <div className="w-full md:w-1/2">
                  <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                  <p className="text-gray-300 leading-relaxed whitespace-pre-line">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Members Section */}
      <section id="members" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-bold text-white mb-16 text-center">Members</h2>
          <Members />
        </div>
      </section>

      {/* Achievements Section */}
      <section id="Achievements" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-bold text-white mb-16 text-center">Achievements</h2>
          <Achievements />
        </div>
      </section>
    </div>
  );
};

export default Home;
