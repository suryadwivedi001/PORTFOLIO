import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-ivory-white border-t border-light-grey-border">
      <div className="container mx-auto px-4 py-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="text-2xl font-playfair font-bold text-oxford-blue mb-4 block">
              Surya Prakash Dhar Dwivedi
            </Link>
            <p className="text-charcoal-grey mb-4 max-w-md font-inter" style={{ lineHeight: '1.5' }}>
              AI Transformation Consultant & Product Manager helping organizations 
              leverage artificial intelligence to drive product innovation and growth.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/surya-prakash-dhar-dwivedi-32a89a165/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-charcoal-grey hover:text-burnt-umber transition-colors font-inter"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-charcoal-grey hover:text-burnt-umber transition-colors font-inter"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-inter font-semibold mb-4 text-charcoal-grey">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-charcoal-grey hover:text-burnt-umber transition-colors font-inter">
                  About Me
                </Link>
              </li>
              <li>
                <Link to="/resume" className="text-charcoal-grey hover:text-burnt-umber transition-colors font-inter">
                  Resume
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-charcoal-grey hover:text-burnt-umber transition-colors font-inter">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-charcoal-grey hover:text-burnt-umber transition-colors font-inter">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-charcoal-grey hover:text-burnt-umber transition-colors font-inter">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-inter font-semibold mb-4 text-charcoal-grey">Contact</h3>
            <ul className="space-y-2">
              <li className="text-charcoal-grey font-inter">
                surya.dwivedi01@outlook.com
              </li>
              <li className="text-charcoal-grey font-inter">
                +91 8847313113
              </li>
              <li>
                <Link to="/contact" className="text-burnt-umber hover:text-burnt-umber/80 transition-colors font-inter">
                  Get in Touch
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-light-grey-border mt-4 pt-4 text-center">
          <p className="text-charcoal-grey font-inter">
            © {new Date().getFullYear()} Surya Prakash Dhar Dwivedi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
