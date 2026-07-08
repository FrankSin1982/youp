const services = [
  {
    icon: '🩺',
    title: 'Педиатрия',
    description: 'Профилактические осмотры, диагностика и лечение заболеваний у детей от 0 до 18 лет.',
    color: 'from-primary-400 to-primary-600',
    bg: 'bg-primary-50',
    iconBg: 'bg-primary-100',
  },
  {
    icon: '👁️',
    title: 'Офтальмология',
    description: 'Проверка зрения, лечение близорукости и дальнозоркости у детей любого возраста.',
    color: 'from-accent-400 to-accent-600',
    bg: 'bg-accent-50',
    iconBg: 'bg-accent-100',
  },
  {
    icon: '🦷',
    title: 'Стоматология',
    description: 'Бережное лечение зубов без боли и страха. Профилактика кариеса и ортодонтия.',
    color: 'from-mint-400 to-mint-600',
    bg: 'bg-mint-50',
    iconBg: 'bg-mint-100',
  },
  {
    icon: '🧠',
    title: 'Неврология',
    description: 'Диагностика и лечение неврологических заболеваний. ЭЭГ и нейросонография.',
    color: 'from-peach-400 to-peach-500',
    bg: 'bg-peach-50',
    iconBg: 'bg-peach-100',
  },
  {
    icon: '🫀',
    title: 'Кардиология',
    description: 'УЗИ сердца, ЭКГ, холтеровское мониторирование. Детские кардиологи с опытом.',
    color: 'from-red-400 to-red-600',
    bg: 'bg-red-50',
    iconBg: 'bg-red-100',
  },
  {
    icon: '🔬',
    title: 'Лаборатория',
    description: 'Все виды анализов с результатами от 2 часов. Безболезненный забор крови.',
    color: 'from-indigo-400 to-indigo-600',
    bg: 'bg-indigo-50',
    iconBg: 'bg-indigo-100',
  },
  {
    icon: '💉',
    title: 'Вакцинация',
    description: 'Прививки по национальному календарю и индивидуальному графику. Импортные вакцины.',
    color: 'from-teal-400 to-teal-600',
    bg: 'bg-teal-50',
    iconBg: 'bg-teal-100',
  },
  {
    icon: '🏃',
    title: 'Ортопедия',
    description: 'Профилактика и лечение нарушений осанки, плоскостопия. Массаж и ЛФК.',
    color: 'from-amber-400 to-amber-600',
    bg: 'bg-amber-50',
    iconBg: 'bg-amber-100',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-primary-50 rounded-full blur-3xl opacity-60"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent-50 rounded-full blur-3xl opacity-60"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 text-sm font-bold rounded-full mb-4">
            Наши услуги
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            Полный спектр{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-accent-500">
              медицинских услуг
            </span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Более 20 направлений детской медицины под одной крышей. Комплексный подход к здоровью вашего ребёнка.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className={`group relative ${service.bg} rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border border-transparent hover:border-gray-100 hover:bg-white`}
            >
              <div className={`w-14 h-14 ${service.iconBg} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <span className="text-2xl">{service.icon}</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{service.description}</p>
              <div className={`absolute bottom-0 left-6 right-6 h-1 bg-gradient-to-r ${service.color} rounded-full opacity-0 group-hover:opacity-100 transition-opacity`}></div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-primary-600 font-bold hover:text-primary-700 transition-colors group"
          >
            Посмотреть все услуги
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
