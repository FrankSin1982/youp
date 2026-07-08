export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-18">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-50"></div>
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-200/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-mint-200/20 rounded-full blur-3xl"></div>

      {/* Floating shapes */}
      <div className="absolute top-32 left-10 w-4 h-4 bg-peach-300 rounded-full animate-bounce opacity-60" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
      <div className="absolute top-48 right-20 w-3 h-3 bg-primary-400 rounded-full animate-bounce opacity-60" style={{ animationDelay: '0.5s', animationDuration: '2.5s' }}></div>
      <div className="absolute bottom-32 left-1/3 w-5 h-5 bg-mint-400 rounded-full animate-bounce opacity-40" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
      <div className="absolute top-64 left-1/2 w-3 h-3 bg-accent-300 rounded-full animate-bounce opacity-50" style={{ animationDelay: '1.5s', animationDuration: '3.5s' }}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-primary-100">
              <span className="w-2 h-2 bg-mint-500 rounded-full animate-pulse"></span>
              <span className="text-sm font-semibold text-gray-600">Приём ежедневно с 8:00 до 20:00</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-tight">
              Здоровье вашего{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-700">
                ребёнка
              </span>{' '}
              — наша{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-500 to-accent-600">
                забота
              </span>
            </h1>

            <p className="text-lg text-gray-500 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Современная детская поликлиника с опытными врачами, передовым оборудованием и тёплой атмосферой, где каждый маленький пациент чувствует себя как дома.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-full text-base font-bold hover:from-primary-600 hover:to-primary-700 transition-all shadow-xl shadow-primary-200 hover:shadow-2xl hover:shadow-primary-300 transform hover:-translate-y-1"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                Записаться на приём
              </a>
              <a
                href="tel:+78001234567"
                className="inline-flex items-center justify-center gap-2 bg-white text-gray-700 px-8 py-4 rounded-full text-base font-bold border-2 border-gray-200 hover:border-primary-300 hover:text-primary-600 transition-all shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                Позвонить
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {[
                { number: '15+', label: 'лет опыта' },
                { number: '20 000+', label: 'пациентов' },
                { number: '30+', label: 'специалистов' },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-black text-primary-600">{stat.number}</div>
                  <div className="text-xs sm:text-sm text-gray-400 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative hidden lg:block">
            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/8460043/pexels-photo-8460043.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=700"
                alt="Врач с ребёнком"
                className="rounded-3xl shadow-2xl w-full object-cover h-[550px]"
              />
              {/* Floating card 1 */}
              <div className="absolute -left-8 top-1/4 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 animate-bounce" style={{ animationDuration: '6s' }}>
                <div className="w-12 h-12 bg-mint-100 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">👨‍⚕️</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-800">30+ врачей</p>
                  <p className="text-xs text-gray-400">высшей категории</p>
                </div>
              </div>
              {/* Floating card 2 */}
              <div className="absolute -right-4 bottom-1/4 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 animate-bounce" style={{ animationDuration: '5s', animationDelay: '1s' }}>
                <div className="w-12 h-12 bg-peach-100 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">⭐</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-800">4.9 рейтинг</p>
                  <p className="text-xs text-gray-400">на основе 1200+ отзывов</p>
                </div>
              </div>
            </div>
            {/* Decorative blob */}
            <div className="absolute -z-0 top-8 -right-8 w-full h-full bg-gradient-to-br from-primary-200 to-accent-200 rounded-3xl opacity-40"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
