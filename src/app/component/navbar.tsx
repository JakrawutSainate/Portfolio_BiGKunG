import React, { useState } from "react";
import {
  FaGithub,
  FaFacebook,
  FaInstagram,
  FaEnvelope,
  FaBars,
} from "react-icons/fa";
import Link from "next/link";

interface NavbarProps {
  children: React.ReactNode;
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ children, className }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      {/* Mobile view - horizontal at bottom */}
      <div className="fixed right-0 bottom-0 left-0 z-50 md:hidden">
        <div className="flex justify-around py-2 bg-black/50">
          <a
            href="https://github.com/JakrawutSainate"
            className={`p-2 text-3xl hover:text-gray-400 ${className}`}
          >
            <FaGithub />
          </a>
          <a
            href="https://www.facebook.com/Hakumi.InitialD"
            className={`p-2 text-3xl hover:text-gray-400 ${className}`}
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com/_big.kung/"
            className={`p-2 text-3xl hover:text-gray-400 ${className}`}
          >
            <FaInstagram />
          </a>
          <a
            href="mailto:bigbigna1@hotmail.com"
            className={`p-2 text-3xl hover:text-gray-400 ${className}`}
          >
            <FaEnvelope />
          </a>
        </div>
      </div>

      {/* Tablet and Desktop view - vertical on the side */}
      <div
        className={`hidden flex-col justify-center items-center w-20 h-screen text-black bg-transparent md:flex ${className}`}
      >
        <a
          href="https://github.com/JakrawutSainate"
          className={`p-2 text-3xl hover:text-gray-400 ${className}`}
        >
          <FaGithub />
        </a>
        <a
          href="https://www.facebook.com/Hakumi.InitialD"
          className={`p-2 text-3xl hover:text-gray-400 ${className}`}
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.instagram.com/_big.kung/"
          className={`p-2 text-3xl hover:text-gray-400 ${className}`}
        >
          <FaInstagram />
        </a>
        <a
          href="mailto:bigbigna1@hotmail.com"
          className={`p-2 text-3xl hover:text-gray-400 ${className}`}
        >
          <FaEnvelope />
        </a>
      </div>

      {/* Navbar */}
      <div className={`flex flex-col mr-20 w-full ${className}`}>
        <div className="flex relative justify-start items-center p-4 lg:justify-center">
          {/* Hamburger Menu for Mobile */}
          <button className="block p-2 lg:hidden" onClick={toggleMenu}>
            <FaBars className="text-xl" />
          </button>
          {isMenuOpen && (
            <div className="absolute top-full mt-2 bg-white rounded-lg shadow-lg lg:hidden">
              <ul className="flex flex-col">
                <li className="p-2">
                  <Link href="../" className="text-xl hover:text-gray-400">
                    Home
                  </Link>
                </li>
                <li className="p-2">
                  <Link href="/skill" legacyBehavior>
                    <a className="text-xl hover:text-gray-400">Skills</a>
                  </Link>
                </li>
                <li className="p-2">
                  <Link href="/experience" legacyBehavior>
                    <a className="text-xl hover:text-gray-400">Experience</a>
                  </Link>
                </li>
                <li className="p-2">
                  <Link href="/aboutus" legacyBehavior>
                    <a className="text-xl hover:text-gray-400">Abouts us</a>
                  </Link>
                </li>
                <li className="p-2">
                  <Link href="/contact" legacyBehavior>
                    <a className="text-xl hover:text-gray-400">Contact</a>
                  </Link>
                </li>
              </ul>
            </div>
          )}
          {/* Normal Menu for Desktop */}
          <div className="hidden lg:flex lg:flex-row lg:items-center">
            <ul className="flex flex-row">
              <li className="p-2">
                <Link href="../" className="text-xl hover:text-gray-400">
                  Home
                </Link>
              </li>
              <li className="p-2">
                <Link href="/skill" legacyBehavior>
                  <a className="text-xl hover:text-gray-400">Skills</a>
                </Link>
              </li>
              <li className="p-2">
                <Link href="/experience" legacyBehavior>
                  <a className="text-xl hover:text-gray-400">Experience</a>
                </Link>
              </li>
              <li className="p-2">
                <Link href="/aboutus" legacyBehavior>
                  <a className="text-xl hover:text-gray-400">Abouts us</a>
                </Link>
              </li>
              <li className="p-2">
                <Link href="/contact" legacyBehavior>
                  <a className="text-xl hover:text-gray-400">Contact</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* Render children */}
        <div className="flex-grow">{children}</div>
      </div>
    </div>
  );
};

export default Navbar;
