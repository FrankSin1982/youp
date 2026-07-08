export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                <span className="text-xl">🏥</span>
              </div>
              <div>
                <span className="text-lg font-bold">Здоровёнок</span>
                <p className="text-[10px] text-gray-400 -mt-1 leading-none">детская поликлиника</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Современная детская поликлиника с 15-летним опытом заботы о здоровье ваших детей.
            </p>
            <div className="flex gap-3">
              {['VK', 'TG', 'OK'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-xl flex items-center justify-center text-sm font-bold text-gray-400 hover:text-white transition-all"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-gray-300 mb-4">Услуги</h4>
            <ul className="space-y-3">
              {['Педиатрия', 'Офтальмология', 'Стоматология', 'Неврология', 'Кардиология', 'Вакцинация'].map((item) => (
                <li key={item}>
                  <a href="#services" className="text-sm text-gray-400 hover:text-primary-400 transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-gray-300 mb-4">Информация</h4>
            <ul className="space-y-3">
              {['О клинике', 'Наши врачи', 'Цены', 'Отзывы', 'Лицензии', 'Политика конфиденциальности'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-gray-400 hover:text-primary-400 transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-gray-300 mb-4">Контакты</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-sm text-gray-400">г. Москва, ул. Детская, д. 12</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <a href="tel:+78001234567" className="text-sm text-gray-400 hover:text-primary-400 transition-colors block">8 (800) 123-45-67</a>
                  <a href="tel:+74951234567" className="text-sm text-gray-400 hover:text-primary-400 transition-colors block">+7 (495) 123-45-67</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm text-gray-400">Ежедневно 8:00 — 20:00</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-gray-500">
              © 2024 Детская поликлиника «Здоровёнок». Все права защищены. Лицензия №ЛО-77-01-019876
            </p>
            <p className="text-xs text-gray-600">
              Имеются противопоказания. Необходима консультация специалиста.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
