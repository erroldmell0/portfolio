import FadeIn from './FadeIn'

const Experience = () => {
  const experiences = [
    {
      id: 0,
      company: "Orb AI",
      role: "Frontend Developer Intern",
      duration: "",
      description: [
        "Built the UI of a B2B lead tracking platform from scratch",
        "Integrated multiple backend components and APIs",
        "Developed responsive and user-friendly interfaces",
        "Collaborated with the backend team to ensure seamless data flow"
      ]
    }
  ]

  return (
    <>
      <FadeIn>
      <div className='py-16 md:py-20 px-6 md:px-16 font-sans' id='experience'>

        <div className='flex flex-col justify-center items-center mb-12'>
          <button className="bg-gray-200 text-xs text-gray-600 font-semibold tracking-wide rounded-full px-8 py-1 mb-4">Experience</button>
          <p className='max-w-xl text-sm sm:text-base text-gray-600 leading-relaxed'>My professional journey and work experience</p>
        </div>

        <div className='max-w-3xl mx-auto'>
          {experiences.map((exp) => (
            <div key={exp.id} className='border-l-4 border-gray-400 pl-8 py-6 relative'>
              <div className='absolute -left-3 top-8 w-4 h-4 bg-gray-700 rounded-full'></div>
              
              <div className='mb-4'>
                <h3 className='text-xl md:text-2xl font-bold text-gray-800'>{exp.company}</h3>
                <p className='text-sm md:text-base text-gray-600 font-medium mt-1'>{exp.role}</p>
                {exp.duration && <p className='text-xs md:text-sm text-gray-500 mt-2'>{exp.duration}</p>}
              </div>

              <ul className='space-y-2'>
                {exp.description.map((point, idx) => (
                  <li key={idx} className='flex items-start gap-3 text-sm md:text-base text-gray-700'>
                    <span className='text-gray-400 mt-1'>•</span>
                    <span>{point}</span>
                  </li>
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

export default Experience
