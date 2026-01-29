import FadeIn from './FadeIn'

const Contact = () => {
  const handleSubmit = (e) => {
  e.preventDefault()

  const form = e.target
  const formData = new FormData(form)

  const data = {
    name: formData.get('name'),
    email: formData.get('email'),
    subject: formData.get('subject'),
    message: formData.get('message'),
  }

  console.log('Form submitted:', data)

  form.reset()
}

  return (
    <div id='contact'>
      <FadeIn>
        <div className='flex flex-col md:flex-row py-16 md:py-20 px-6 md:px-16 font-sans bg-neutral-900 text-white'>

          {/* left-section */}
          <div className='md:w-1/2 flex justify-center py-8'>
            <div className="max-w-md">
              <div className="w-16 h-1 bg-white mb-4"></div>
              <h2 className="font-extrabold text-4xl md:text-6xl leading-tight">Contact me</h2>
              <div className="w-16 h-1 bg-white mt-6"></div>
              <p className="text-sm mt-6">Cultivating Connections: Reach out and Connect with me.</p>
            </div>
          </div>

          {/* right-section */}
          <div className="md:w-1/2 flex justify-center items-center mt-10 md:mt-0">
            <form onSubmit={handleSubmit} className="flex flex-col w-full max-w-md gap-4" aria-label="Contact form">

              <label htmlFor="name">Name</label>
              <input id='name' name="name" type="text" required className='p-2 rounded bg-neutral-800 text-white focus:outline-none focus:ring-2 focus:ring-white'></input>

              <label htmlFor="email">Email</label>
              <input id='email' name="email" type='text' required className='p-2 rounded bg-neutral-800 text-white focus:outline-none focus:ring-2 focus:ring-white'></input>

              <label htmlFor="subject">Subject</label>
              <input id='subject' name="subject" type='text' required className='p-2 rounded bg-neutral-800 text-white focus:outline-none focus:ring-2 focus:ring-white'></input>

              <label htmlFor="message">Message</label>
              <textarea id='message' name="message" rows="4" required className='p-2 rounded bg-neutral-800 text-white focus:outline-none focus:ring-2 focus:ring-white'></textarea>

              <input type='submit' value='Send Message' className='p-2 rounded bg-white text-black font-bold cursor-pointer hover:bg-gray-200 transition'></input>
            </form>
          </div>

        </div>
        <hr className="border-t-2 border-gray-400 w-full mx-auto" />

      </FadeIn>
    </div>
  )
}

export default Contact
