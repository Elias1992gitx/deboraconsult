import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 px-5">
        {/* Countries */}
        <div>
          <h3 className="font-bold text-white mb-4">Countries</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-white">
                Study in UK
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Study in Canada
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Study in Australia
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Study in USA
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Study in Europe
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Explore All Countries
              </a>
            </li>
          </ul>
        </div>

        {/* Exams */}
        <div>
          <h3 className="font-bold text-white mb-4">Exams</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-white">
                GMAT
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                GRE
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                IELTS
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                TOEFL
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                SAT
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                DET
              </a>
            </li>
          </ul>
        </div>

        {/* Colleges */}
        <div>
          <h3 className="font-bold text-white mb-4">Colleges</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-white">
                MBA Colleges
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                MS Colleges
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                BE/BTECH Colleges
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                BBA Colleges
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Masters in Hospitality
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Masters in Journalism
              </a>
            </li>
          </ul>
        </div>

        {/* Apply */}
        <div>
          <h3 className="font-bold text-white mb-4">Apply</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-white">
                SOP
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                LOR
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Student Visa
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Education Loans
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 py-6 px-5">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Deborah Consultancy. All Rights
            Reserved.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <FaFacebookF />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaTwitter />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaInstagram />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaLinkedinIn />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
