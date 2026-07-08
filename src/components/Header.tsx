import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#services', label: 'Услуги' },
    { href: '#advantages', label: 'Преимущества' },
    { href: '#doctors', label: 'Врачи' },
    { href: '#reviews', label: 'Отзывы' },
    { href: '#contact', label: 'Контакты' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
              <span className="text-xl">🏥</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-lg font-bold text-primary-700">Здоровёнок</span>
              <p className="text-[10px] text-gray-400 -mt-1 leading-none">детская поликлиника</p>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-gray-600 hover:text-primary-600 transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-primary-500 after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Phone & CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+78001234567" className="text-sm font-bold text-gray-700 hover:text-primary-600 transition-colors flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              8 (800) 123-45-67
            </a>
            <a
              href="#contact"
              className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-5 py-2.5 rounded-full text-sm font-bold hover:from-primary-600 hover:to-primary-700 transition-all shadow-md hover:shadow-lg hover:shadow-primary-200 transform hover:-translate-y-0.5"
            >
              Записаться
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-3 text-sm font-semibold text-gray-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-gray-100">
              <a href="tel:+78001234567" className="block px-4 py-3 text-sm font-bold text-gray-700">
                📞 8 (800) 123-45-67
              </a>
              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="block text-center bg-gradient-to-r from-primary-500 to-primary-600 text-white px-5 py-3 rounded-full text-sm font-bold mt-2"
              >
                Записаться на приём
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
