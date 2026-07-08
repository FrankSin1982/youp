const doctors = [
  {
    name: 'Елена Петрова',
    role: 'Педиатр',
    experience: 'Стаж 18 лет',
    image: 'https://images.pexels.com/photos/6749778/pexels-photo-6749778.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=350',
    desc: 'Врач высшей категории, к.м.н.',
  },
  {
    name: 'Михаил Козлов',
    role: 'Детский невролог',
    experience: 'Стаж 15 лет',
    image: 'https://images.pexels.com/photos/5867737/pexels-photo-5867737.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=350',
    desc: 'Эксперт по детской неврологии',
  },
  {
    name: 'Анна Смирнова',
    role: 'Детский офтальмолог',
    experience: 'Стаж 12 лет',
    image: 'https://images.pexels.com/photos/5998457/pexels-photo-5998457.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=350',
    desc: 'Специалист по детскому зрению',
  },
  {
    name: 'Ольга Иванова',
    role: 'Детский кардиолог',
    experience: 'Стаж 20 лет',
    image: 'https://images.pexels.com/photos/8376144/pexels-photo-8376144.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=350',
    desc: 'Д.м.н., профессор',
  },
];

export default function Doctors() {
  return (
    <section id="doctors" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent-50 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-50 rounded-full blur-3xl opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-accent-100 text-accent-700 text-sm font-bold rounded-full mb-4">
            Наша команда
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            Лучшие{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-500 to-primary-500">
              детские врачи
            </span>{' '}
            города
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Наши специалисты — это опытные врачи, которые любят детей и находят подход к каждому маленькому пациенту
          </p>
        </div>

        {/* Doctors grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doctor) => (
            <div
              key={doctor.name}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>

              {/* Info */}
              <div className="p-5">
                <div className="inline-block px-3 py-1 bg-primary-50 text-primary-700 text-xs font-bold rounded-full mb-2">
                  {doctor.role}
                </div>
                <h3 className="text-lg font-bold text-gray-900">{doctor.name}</h3>
                <p className="text-sm text-gray-500 mt-1">{doctor.desc}</p>
                <div className="flex items-center gap-1 mt-3">
                  <svg className="w-4 h-4 text-peach-400" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" /></svg>
                  <span className="text-xs text-gray-400 font-medium">{doctor.experience}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* All doctors link */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-accent-500 to-primary-500 text-white px-8 py-4 rounded-full font-bold hover:from-accent-600 hover:to-primary-600 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Записаться к специалисту
          </a>
        </div>
      </div>
    </section>
  );
}
