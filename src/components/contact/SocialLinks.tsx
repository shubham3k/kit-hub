import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'

export default function SocialLinks() {
  return (
    <div className="flex space-x-4">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-teal-300">
        <FaFacebook size={24} />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-teal-300">
        <FaTwitter size={24} />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-teal-300">
        <FaInstagram size={24} />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-teal-300">
        <FaLinkedin size={24} />
      </a>
    </div>
  )
}

