
import ContactForm from '../ContactForm/ContactForm'
import "./Contact.css"
function Contact() {
  return (
    <div className='flex flex-col justify-center items-center' id="contact">
      <h1 className="text-[2.5rem] md:text-[3.5rem] font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 mb-10">
        Contact
      </h1>
      <div className="contactFormWrapper">
        <ContactForm />
      </div>
    </div>
  )
}

export default Contact