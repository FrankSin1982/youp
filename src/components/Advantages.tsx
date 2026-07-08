const advantages = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Без очередей',
    description: 'Приём строго по записи. Никакого ожидания в коридорах — приходите к назначенному времени.',
    gradient: 'from-primary-500 to-primary-600',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Лицензия и гарантии',
    description: 'Все врачи сертифицированы. Поликлиника имеет все необходимые лицензии и разрешения.',
    gradient: 'from-mint-500 to-mint-600',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    title: 'Современное оборудование',
    description: 'Передовое диагностическое оборудование ведущих мировых производителей.',
    gradient: 'from-accent-500 to-accent-600',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: 'Дружелюбная атмосфера',
    description: 'Яркий интерьер, игровая зона, добрые врачи — ребёнок не будет бояться визита.',
    gradient: 'from-peach-400 to-peach-500',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: 'Вызов врача на дом',
    description: 'Педиатр приедет на дом в удобное для вас время. Обслуживание по всему городу.',
    gradient: 'from-indigo-500 to-indigo-600',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
    title: 'Онлайн-результаты',
    description: 'Результаты анализов и заключения врачей в личном кабинете на сайте и в приложении.',
    gradient: 'from-teal-500 to-teal-600',
  },
];

export default function Advantages() {
  return (
    <section id="advantages" className="py-20 lg:py-28 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-mint-100 text-mint-600 text-sm font-bold rounded-full mb-4">
            Почему мы
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            Почему родители выбирают{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-mint-500">
              «Здоровёнок»
            </span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Мы создали пространство, где медицина сочетается с заботой и вниманием к каждому ребёнку
          </p>
        </div>

        {/* Advantages grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((adv, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${adv.gradient} text-white flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-lg`}>
                {adv.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{adv.title}</h3>
              <p className="text-gray-500 leading-relaxed">{adv.description}</p>
            </div>
          ))}
        </div>

        {/* Image band */}
        <div className="mt-16 rounded-3xl overflow-hidden shadow-2xl relative group">
          <img
            src="https://images.pexels.com/photos/8460033/pexels-photo-8460033.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=1200"
            alt="Интерьер детской поликлиники"
            className="w-full h-64 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/60 to-transparent flex items-center">
            <div className="px-8 sm:px-12">
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-2">Уютная атмосфера</h3>
              <p className="text-white/80 max-w-md">Наша поликлиника оборудована с заботой о комфорте маленьких пациентов и их родителей</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
