'use client';

export default function Footer() {
  const navigationItems = [
    { id: '01', label: 'Home', href: '#' },
    { id: '02', label: 'About', href: '#about' },
    { id: '03', label: 'Services', href: '#services' },
    { id: '04', label: 'Our Work', href: '#work' },
    { id: '05', label: 'Contact', href: '#contact' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-black text-white overflow-hidden mx-8 mb-8 rounded-3xl p-8">
      
      {/* Background Image Section with Logo */}
      <div className="relative w-full h-64 mb-16 rounded-3xl overflow-hidden">
        <div className="w-full h-full">
          <img 
            src="/footer-back.jpg" 
            alt="Footer Background" 
            className="w-full h-full object-cover"
          />
          {/* Overlay for better logo visibility */}
          <div className="absolute inset-0 bg-black/90"></div>
        </div>
        {/* Logo positioned above background image */}
        <div className="absolute inset-0 z-20 flex justify-center items-center">
          <img 
            src="/logo-white.png" 
            alt="Your Logo" 
            className="h-20 w-auto"
          />
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 px-4 sm:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            
            {/* Left Side - Contact Info */}
            <div className="pr-0 lg:pr-8">
              <h2 className="text-white font-manrope text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4">
                Stay connected®<br />
                <span className="text-lg sm:text-xl lg:text-2xl text-gray-300">motion.studioteams@gmail.com</span>
              </h2>
              <p className="text-gray-400 font-manrope text-sm sm:text-base mb-8 max-w-md">
                Crafted with creativity and passion.<br />
                Let's stay connected, reach out anytime!
              </p>
              
              {/* Contact Button */}
              <a 
                href="#contact"
                className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-manrope font-medium hover:bg-gray-100 transition-colors duration-200"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                Contact Now
              </a>
            </div>

            {/* Right Side - Navigation */}
            <div>
              <nav className="space-y-4">
                {navigationItems.map((item) => (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="group flex items-center justify-between py-3 border-b border-gray-800 hover:border-gray-600 transition-colors duration-200"
                  >
                    <span className="font-manrope text-lg text-white group-hover:text-gray-300 transition-colors">
                      {item.id} / {item.label}
                    </span>
                    <svg 
                      className="w-5 h-5 text-white group-hover:text-gray-300 group-hover:translate-x-1 transition-all duration-200" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-gray-800 px-8 py-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <p className="text-gray-400 font-manrope text-sm">
            Copyright © Motion Studio 2025
          </p>
          <button 
            onClick={scrollToTop}
            className="text-gray-400 font-manrope text-sm hover:text-white transition-colors duration-200 flex items-center gap-2"
          >
            ©Back to top
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}