import ContactBanner from '../../Components/ContactBanner/ContactBanner'
import ContactForm from '../../Components/ContactForm/ContactForm'
import "./Contact.css"
function Contact() {
  return (
    <div className='contactWrapper' id="contact">
        <ContactBanner />
        <div className="contactFormWrapper">
        <ContactForm />
        </div>
    </div>
  )
}

export default Contact