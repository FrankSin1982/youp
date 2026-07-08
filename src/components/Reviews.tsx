const reviews = [
  {
    name: 'Мария К.',
    child: 'Мама Алисы, 4 года',
    text: 'Замечательная поликлиника! Дочка раньше боялась врачей, а теперь сама просится «к доктору». Спасибо за тёплое отношение и профессионализм!',
    rating: 5,
    avatar: '👩',
    color: 'from-primary-400 to-primary-600',
  },
  {
    name: 'Дмитрий С.',
    child: 'Папа Артёма, 7 лет',
    text: 'Наблюдаемся здесь с рождения сына. Отличные врачи, современное оборудование. Очень удобно, что все специалисты в одном месте.',
    rating: 5,
    avatar: '👨',
    color: 'from-mint-400 to-mint-600',
  },
  {
    name: 'Елена В.',
    child: 'Мама Софии и Максима',
    text: 'Двое детей — двойная нагрузка. Но в «Здоровёнке» всё организовано идеально: быстрая запись, нет очередей, результаты анализов приходят онлайн.',
    rating: 5,
    avatar: '👩‍🦰',
    color: 'from-accent-400 to-accent-600',
  },
  {
    name: 'Анна П.',
    child: 'Мама Даниила, 2 года',
    text: 'Нашли отличного невролога для сыночка. Врач Козлов — настоящий профессионал, объясняет всё понятно и подробно. Рекомендую!',
    rating: 5,
    avatar: '👱‍♀️',
    color: 'from-peach-400 to-peach-500',
  },
  {
    name: 'Ольга М.',
    child: 'Мама Кати, 5 лет',
    text: 'Прекрасная детская стоматология! Дочка даже не поняла, что ей лечили зубик. Теперь чистит зубы с удовольствием 😄',
    rating: 5,
    avatar: '👩‍🦱',
    color: 'from-indigo-400 to-indigo-600',
  },
  {
    name: 'Игорь Т.',
    child: 'Папа Вани, 9 лет',
    text: 'Лаборатория — на высшем уровне. Результаты анализов уже через 2 часа. А медсестра берёт кровь так, что сын даже не заплакал!',
    rating: 5,
    avatar: '👨‍🦲',
    color: 'from-teal-400 to-teal-600',
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-200'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 lg:py-28 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-peach-100 text-peach-500 text-sm font-bold rounded-full mb-4">
            Отзывы
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            Что говорят{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-peach-400 to-peach-500">
              родители
            </span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Более 1200 положительных отзывов — лучшее доказательство качества нашей работы
          </p>
        </div>

        {/* Reviews grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 relative"
            >
              {/* Quote icon */}
              <div className="absolute top-4 right-4 text-4xl text-gray-100 font-serif">"</div>

              <div className="flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${review.color} flex items-center justify-center text-xl shadow-sm`}>
                  {review.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{review.name}</h4>
                  <p className="text-xs text-gray-400">{review.child}</p>
                </div>
              </div>

              <StarRating rating={review.rating} />

              <p className="mt-4 text-gray-600 leading-relaxed text-sm">{review.text}</p>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6">
          {[
            { number: '4.9', label: 'Средний рейтинг', icon: '⭐' },
            { number: '1200+', label: 'Отзывов', icon: '💬' },
            { number: '98%', label: 'Рекомендуют', icon: '👍' },
            { number: '15', label: 'Лет на рынке', icon: '🏆' },
          ].map((badge) => (
            <div key={badge.label} className="text-center bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <span className="text-3xl mb-2 block">{badge.icon}</span>
              <div className="text-2xl font-black text-gray-900">{badge.number}</div>
              <p className="text-sm text-gray-400 font-medium">{badge.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
