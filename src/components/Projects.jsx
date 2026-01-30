import FadeIn from './FadeIn'
import { GoLinkExternal } from "react-icons/go";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Lockr",
      image: "/projects/lockr.png",
      tech: "React, Vite, Tailwind CSS, Node.js, Express, MongoDB",
      description: [
        "Developed a full-stack web application for storing and managing user passwords.",
        "Implemented Express APIs for MongoDB data delivery.",
        "Integrated MongoDB for persistent storage.",
        "Built a responsive frontend using React and Vite."
      ],
      github: "https://github.com/erroldmell0/Lockr"
    },
     {
      id: 2,
      title: "TextUtils",
      image: "/projects/textutils.png",
      tech: "React, Bootstrap",
      description: [
        "Developed a React-based text utility application that converts text to uppercase, lowercase, reversed text, and allows one-click copy functionality.",
        "Implemented Dark Mode and Light Mode themes to enhance user experience and accessibility.",
        "Provided real-time text analytics, including word count, character count, and estimated reading time.",
      ],
      github: "https://cheerful-clafoutis-ef2a70.netlify.app/"
    },
     {
      id: 3,
      title: "End-to-End MLProject",
      image: "/projects/project.png",
      tech: "Python, Scikit-learn, Flask",
      description: [
        "Implemented a full ML pipeline from data ingestion to deployment.",
        "Built custom logging and exception handling modules to improve robustness.",
        "Packaged the model as a web app using Flask to expose prediction endpoints and an HTML frontend.",
        "Structured the project into reusable modules (ingestion, transformation, prediction pipeline) for clarity and maintainability."
      ],
      github: "https://github.com/erroldmell0/mlproject"
    },
     {
      id: 4,
      title: "ForestFirePrediction Model ",
      image: "/projects/project.png",
      tech: "Python, Flask, Scikit-learn",
      description: [
        "Built a regression model to predict Fire Weather Index (FWI) using multiple linear regression.",
        "Tuned hyperparameters using Ridge, Lasso, and ElasticNet; selected Ridge based on performance.",
        "Integrated the model into a Flask app with a simple HTML interface for input and FWI prediction",
      ],
      github: "https://github.com/erroldmell0/forestfireprediction "
    },
     {
      id: 5,
      title: "Rock-Paper-Scissors Game",
      image: "/projects/rockpaperscissors.png",
      tech: "HTML, CSS, JavaScript",
      description: [
        "Developed a Rock-Paper-Scissors game with an additional autoplay mode.",
      ],
      github: "https://erroldmell0.github.io/rock-paper-scissor/"
    },
     {
      id: 6,
      title: "Amazon Clone ",
      image: "/projects/amazon.png",
      tech: "HTML, CSS, JavaScript",
      description: [
        "Developed a fully functional e-commerce platform inspired by Amazon.",
        "Implemented dynamic product catalogs, with and pagination functionality.",
        "Built a shopping cart system with features for adding/removing items and simulating checkout.",
        "Designed the website to be fully responsive, ensuring a seamless experience across devices."
      ],
      github: "https://github.com/erroldmell0/clone-amazon-project "
    },
     {
      id: 7,
      title: "Calculator",
      image: "/projects/calculator.png",
      tech: "HTML, CSS, JavaScript ",
      description: [
        "Created a calculator capable of performing basic operations such as addition, subtraction,multiplication, and division with natural and decimal numbers.",
      ],
      github: "https://erroldmell0.github.io/basic-calculator/"
    }, {
      id: 8,
      title: "YouTube Clone",
      image: "/projects/youtube.png",
      tech: "HTML, CSS",
      description: [
        "Developed a YouTube clone using HTML and CSS, replicating the UI and basic functionality",
      ],
      github: "https://github.com/erroldmell0/Lockr"
    },
  ];
  return (
    <>
      <FadeIn>
        <div className="py-16 md:py-20 px-6 md:px-16 font-sans" id="projects">

          <div className="flex flex-col justify-center items-center mb-12">
            <button className="bg-gray-200 text-xs text-gray-600 font-semibold tracking-wide rounded-full px-8 py-1 mb-4">Projects</button>
            <p className="max-w-xl text-sm sm:text-base text-gray-600 leading-relaxed">The projects I've worked on</p>
          </div>

          {/* Horizontal scroll container */}
          <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory">
            {projects.map((project) => (
              <div key={project.id} className="min-w-[320px] max-w-[320px] bg-white rounded-xl shadow-md p-4 snap-start">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-lg mb-4 border border-gray-200"/>

                <p className="text-lg font-semibold text-gray-800">{project.title}
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="ml-2 font-bold text-gray-800 hover:text-gray-600"><GoLinkExternal className="inline-block align-middle" /></a>
                </p>

                <p className="text-sm text-gray-600 mb-2">{project.tech}</p>

                <ul className="text-sm text-gray-600 list-disc pl-4">
                  {project.description.map((line, i) => (
                    <li key={i}>{line}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <hr className="border-t-2 border-gray-400 w-full mx-auto" />
      </FadeIn>
    </>
  )
}

export default Projects
