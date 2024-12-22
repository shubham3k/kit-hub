import ContactForm from "@/components/contact/ContactForm"
import SocialLinks from "@/components/contact/SocialLinks"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 py-16 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 text-center">
        Contact Us
      </h1>
      <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto text-center">
        Get in touch with us for any inquiries, feedback, or support.
      </p>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <ContactForm />
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Connect With Us</h2>
          <SocialLinks />
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-white mb-2">Address</h3>
            <p className="text-blue-100">
              123 University Avenue<br />
              Collegetown, ST 12345<br />
              United States
            </p>
          </div>
          <div className="mt-4">
            <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
            <p className="text-blue-100">contact@collegehub.com</p>
          </div>
          <div className="mt-4">
            <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
            <p className="text-blue-100">(123) 456-7890</p>
          </div>
        </div>
      </div>
    </div>
  )
}

