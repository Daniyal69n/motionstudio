'use client';

import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-start">
          <div className="flex-shrink-0">
            <Image
              src="/logo-black.png"
              alt="Motion Studio Logo"
              width={100}
              height={60}
              priority
              className="w-auto h-auto"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}