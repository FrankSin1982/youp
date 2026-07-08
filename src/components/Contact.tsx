import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    parentName: '',
    childName: '',
    phone: '',
    service: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
    setFormData({ parentName: '', childName: '', phone: '', service: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-gradient-to-b from-white to-primary-50 relative overflow-hidden">
      {/* Decorations */}
      <div className="absolute top-20 right-0 w-80 h-80 bg-primary-100 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-100 rounded-full blur-3xl opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 text-sm font-bold rounded-full mb-4">
            Запись на приём
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            Запишитесь на{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-700">
              приём онлайн
            </span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Заполните форму, и мы перезвоним вам в течение 15 минут для подтверждения записи
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-gray-100">
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-12">
                <div className="w-20 h-20 bg-mint-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-10 h-10 text-mint-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Заявка отправлена!</h3>
                <p className="text-gray-500">Мы перезвоним вам в течение 15 минут</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Ваше имя *</label>
                    <input
                      type="text"
                      required
                      value={formData.parentName}
                      onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                      placeholder="Анна Иванова"
                      className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none transition-all text-sm bg-gray-50 focus:bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Имя ребёнка *</label>
                    <input
                      type="text"
                      required
                      value={formData.childName}
                      onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
                      placeholder="Алиса"
                      className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none transition-all text-sm bg-gray-50 focus:bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Телефон *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+7 (999) 123-45-67"
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none transition-all text-sm bg-gray-50 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Направление</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none transition-all text-sm bg-gray-50 focus:bg-white appearance-none"
                  >
                    <option value="">Выберите направление</option>
                    <option value="pediatrics">Педиатрия</option>
                    <option value="ophthalmology">Офтальмология</option>
                    <option value="dentistry">Стоматология</option>
                    <option value="neurology">Неврология</option>
                    <option value="cardiology">Кардиология</option>
                    <option value="lab">Лаборатория</option>
                    <option value="vaccination">Вакцинация</option>
                    <option value="orthopedics">Ортопедия</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Комментарий</label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Опишите симптомы или пожелания"
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none transition-all text-sm bg-gray-50 focus:bg-white resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary-500 to-primary-600 text-white py-4 rounded-xl font-bold text-base hover:from-primary-600 hover:to-primary-700 transition-all shadow-lg hover:shadow-xl shadow-primary-200 transform hover:-translate-y-0.5"
                >
                  Записаться на приём
                </button>

                <p className="text-xs text-gray-400 text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных
                </p>
              </form>
            )}
          </div>

          {/* Contact info */}
          <div className="space-y-6">
            {/* Contact cards */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex items-start gap-4">
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Адрес</h4>
                <p className="text-gray-500 text-sm">г. Москва, ул. Детская, д. 12</p>
                <p className="text-gray-400 text-xs mt-1">5 минут от метро «Парк Культуры»</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex items-start gap-4">
              <div className="w-12 h-12 bg-mint-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-mint-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Часы работы</h4>
                <p className="text-gray-500 text-sm">Ежедневно: 8:00 — 20:00</p>
                <p className="text-gray-400 text-xs mt-1">Без перерывов и выходных</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex items-start gap-4">
              <div className="w-12 h-12 bg-peach-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-peach-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Телефоны</h4>
                <a href="tel:+78001234567" className="text-primary-600 font-bold text-sm hover:text-primary-700 transition-colors block">8 (800) 123-45-67</a>
                <a href="tel:+74951234567" className="text-gray-500 text-sm hover:text-primary-600 transition-colors block">+7 (495) 123-45-67</a>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex items-start gap-4">
              <div className="w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Email</h4>
                <a href="mailto:info@zdorovenok.ru" className="text-primary-600 text-sm hover:text-primary-700 transition-colors">info@zdorovenok.ru</a>
              </div>
            </div>

            {/* Emergency banner */}
            <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-2xl p-6 text-white shadow-lg">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">🚑</span>
                <h4 className="font-bold text-lg">Экстренная помощь</h4>
              </div>
              <p className="text-sm text-red-100 mb-3">Круглосуточная линия для экстренных случаев</p>
              <a href="tel:+78001234500" className="inline-flex items-center gap-2 bg-white text-red-600 px-5 py-2.5 rounded-full font-bold text-sm hover:bg-red-50 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                8 (800) 123-45-00
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
