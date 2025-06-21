
import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden select-none">
      {/* Skip to main content link for keyboard users */}
      <a 
        href="#main-content" 
        className="skip-link"
        aria-label="Skip to main content"
      >
        Skip to main content
      </a>
      
      <Header />
      
      <main 
        id="main-content" 
        className="flex-1 pt-12" 
        role="main"
        tabIndex={-1}
      >
        {children}
      </main>
      
      <Footer />
    </div>
  );
};

export default Layout;
