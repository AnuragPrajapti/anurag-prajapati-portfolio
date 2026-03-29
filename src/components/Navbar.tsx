import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import "./Navbar.scss";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/", hash: "#home" },
    { name: "About", path: "/", hash: "#about" },
    { name: "Skills", path: "/", hash: "#skills" },
    { name: "Experience", path: "/", hash: "#experience" },
    { name: "Projects", path: "/", hash: "#projects" },
    { name: "Contact", path: "/", hash: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (hash: string) => {
    setIsMobileMenuOpen(false);
    
    // Small delay to ensure menu closes first
    setTimeout(() => {
      const element = document.querySelector(hash);
      if (element) {
        const navbarHeight = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - navbarHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, 100);
  };

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="container">
        <div className="navbar-content">
          <Link to="/" className="navbar-brand">
            <span className="brand-text">Anurag</span>
            <span className="brand-dot">.</span>
          </Link>

          <div className="navbar-links desktop">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.hash}
                className="nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.hash);
                }}
              >
                {link.name}
              </a>
            ))}
          </div>

          <button
            className="mobile-menu-button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mobile-menu-content">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.hash}
                  className="mobile-nav-link"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.hash);
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
