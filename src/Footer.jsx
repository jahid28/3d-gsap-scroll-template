import { Link } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import { FaInstagram, FaLinkedinIn, FaDribbble, FaBehance, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import mecatronLogo from './assets/logos/mecatronWheelLogo.png';

export default function Footer() {
  const [mailMenuOpen, setMailMenuOpen] = useState(false);
  const mailMenuRef = useRef(null);
  const email = 'teammecatronntu@gmail.com';

  useEffect(() => {
    function handleOutsideClick(e) {
      if (mailMenuRef.current && !mailMenuRef.current.contains(e.target)) {
        setMailMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  function openGmail() {
    const url = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setMailMenuOpen(false);
  }

  function openOutlook() {
    const url = `https://outlook.office.com/mail/deeplink/compose?to=${encodeURIComponent(email)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setMailMenuOpen(false);
  }

  return (
    <footer className="bg-[#222] text-gray-300 pt-10 pb-4 px-4">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        {/* Logo */}
        <div className="flex items-center justify-center mb-6">
          <img src={mecatronLogo} alt="Mecatron Logo" className="h-14 w-auto object-contain" />
        </div>

        <p>
          A NTU student-led team specializing in marine robotics with potential real-world applications
        </p>
        {/* Social Icons */}
        <div className="flex gap-6 mt-6 mb-6 items-center">
          <a href="https://www.instagram.com/ntu_mecatron" className="rounded-full border border-gray-500 p-2 hover:bg-orange-500 hover:text-white transition"><FaInstagram size={22} /></a>
          <a href="https://sg.linkedin.com/company/ntu-mecatron" className="rounded-full border border-gray-500 p-2 hover:bg-orange-500 hover:text-white transition"><FaLinkedinIn size={22} /></a>

          {/* Mail icon with chooser */}
          <div className="relative" ref={mailMenuRef}>
            <button
              type="button"
              onClick={() => setMailMenuOpen(open => !open)}
              className="rounded-full border border-gray-500 p-2 hover:bg-orange-500 hover:text-white transition"
              aria-haspopup="menu"
              aria-expanded={mailMenuOpen}
              title="Send email"
            >
              <FaEnvelope size={22} />
            </button>

            {mailMenuOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-gray-800 border border-gray-600 rounded shadow-lg z-50">
                <button
                  onClick={openGmail}
                  className="w-full text-left px-3 py-2 hover:bg-gray-700 transition"
                >
                  Open in Gmail
                </button>
                <button
                  onClick={openOutlook}
                  className="w-full text-left px-3 py-2 hover:bg-gray-700 transition"
                >
                  Open in Outlook
                </button>
                <button
                  onClick={() => {
                    window.location.href = `mailto:${email}`;
                    setMailMenuOpen(false);
                  }}
                  className="w-full text-left px-3 py-2 hover:bg-gray-700 transition"
                >
                  Open default mail
                </button>
              </div>
            )}
          </div>
        </div>
        {/* Contact Info */}
        <div className="flex flex-col md:flex-row gap-4 items-center mb-6 text-lg">
          <div className="flex items-center gap-2"><FaEnvelope />{email}</div>
        </div>
        {/* Divider */}
        <hr className="w-full border-gray-600 mb-2" />
        {/* Designer Credit */}
        <div className="text-center text-sm text-gray-400">Mecatron NTU</div>
      </div>
    </footer>
  );
}