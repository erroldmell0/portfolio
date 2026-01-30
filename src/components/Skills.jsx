import FadeIn from './FadeIn'

const Skills = () => {

  const skills = [
    { name: 'Java', img: './../public/skills/java.png' },
    { name: 'Python', img: './../public/skills/python.png' },
    { name: 'Git', img: './../public/skills/git.png' },
    { name: 'GitHub', img: './../public/skills/github.png' },
    { name: 'C', img: './../public/skills/c.png' },
    { name: 'HTML', img: './../public/skills/html-5.png' },
    { name: 'CSS', img: './../public/skills/css-3.png' },
    { name: 'JavaScript', img: './../public/skills/js.png' },
    { name: 'React', img: './../public/skills/react.svg' },
    { name: 'Tailwind CSS', img: './../public/skills/tailwind.png' },
  ]

  return (
    <>
      <FadeIn>
      <div className='py-16 md:py-20 px-6 md:px-16 font-sans' id='skills'>

          <div className='flex flex-col justify-center items-center mb-12'>
            <button className="bg-gray-200 text-xs text-gray-600 font-semibold tracking-wide rounded-full px-8 py-1 mb-4">Skills</button>
            <p className='max-w-xl text-sm sm:text-base text-gray-600 leading-relaxed'>The skill, tools and Technologies I'm aware of</p>
          </div>

        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 place-items-center'>
          {skills.map((skill) => (
            <div key={skill.name} className='flex flex-col items-center gap-3'>
              <img src={skill.img} alt={skill.name} className='w-16 h-16 object-contain' />
              <p className='text-sm font-medium text-gray-700'>{skill.name}</p>
            </div>
          ))}
        </div>

      </div>
      <hr className="border-t-2 border-gray-400 w-full mx-auto" />
      </FadeIn>
    </>
  )
}

export default Skills
