import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Resume', href: '/resume' },
    { name: 'Projects', href: '/case-studies' }, // Changed from "Case Studies" to "Projects"
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => currentPath === href;

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Handle escape key to close mobile menu
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    if (isMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      // Trap focus within mobile menu
      const focusableElements = mobileMenuRef.current?.querySelectorAll(
        'a[href], button:not([disabled])'
      );
      if (focusableElements && focusableElements.length > 0) {
        (focusableElements[0] as HTMLElement).focus();
      }
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    menuButtonRef.current?.focus();
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-card" role="banner">
      <div className="container mx-auto px-4px-2 py-0">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link 
            to="/" 
            className="text-xl font-playfair font-bold text-oxford-blue hover:opacity-80 transition-opacity focus-visible:opacity-80"
            aria-label="Surya Prakash Dhar Dwivedi - Home"
          >
            Surya Prakash Dhar Dwivedi
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6" role="navigation" aria-label="Main navigation">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`font-inter font-medium transition-colors duration-200 touch-target flex items-center justify-center text-sm px-2 py-1 whitespace-nowrap ${
                  isActive(item.href)
                    ? 'nav-active text-burnt-umber'
                    : 'text-charcoal-grey hover:text-oxford-blue'
                }`}
                style={{ fontSize: '14px', letterSpacing: '0.02em' }}
                aria-current={isActive(item.href) ? 'page' : undefined}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            ref={menuButtonRef}
            className="md:hidden touch-target flex items-center justify-center"
            onClick={toggleMenu}
            aria-label="Toggle main menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-haspopup="true"
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <span
                className={`block h-0.5 w-6 bg-charcoal-grey transition-transform ${
                  isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-charcoal-grey transition-opacity ${
                  isMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-charcoal-grey transition-transform ${
                  isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div 
            ref={mobileMenuRef}
            id="mobile-menu"
            className="md:hidden mt-4 pb-4"
            role="menu"
            aria-labelledby="mobile-menu-button"
          >
            <nav className="flex flex-col space-y-4" role="navigation" aria-label="Mobile navigation">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`font-inter font-medium transition-colors duration-200 touch-target flex items-center ${
                    isActive(item.href)
                      ? 'text-burnt-umber'
                      : 'text-charcoal-grey hover:text-oxford-blue'
                  }`}
                  onClick={closeMenu}
                  role="menuitem"
                  aria-current={isActive(item.href) ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
