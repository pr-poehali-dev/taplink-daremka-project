import Icon from "@/components/ui/icon";

const before = [
  "Снаружи успешный, внутри выгоревший и пустой",
  "Деньги есть, а радости нет — или денег нет из-за подавленной энергии",
  "Размытые границы: спасаете всех и предаёте себя",
  "В бизнесе хаос, саботаж команды и потолок, который пробивается головой",
];

const after = [
  ["Eye", "Ясность вместо тумана", "Видите свои истинные ценности и понимаете, где именно предавали себя — с помощью «Дерева идентификации»."],
  ["Flame", "Восстановленная витальность", "Возвращаются энергия, здоровая агрессия и либидо — теперь они работают на заработок и созидание."],
  ["ShieldCheck", "Здоровые границы", "Говорите «нет» без вины и «да» только тому, что действительно вас масштабирует."],
  ["RefreshCw", "Синхронизация", "Бизнес-процессы работают на вас, а не вы на износ ради бизнеса."],
];

const difference = [
  ["Layers", "Триада в одних руках", "Глубинная психология (работа с самообманом), сексология (телесная энергия и витальность) и бизнес-стратегия (цифры, процессы, фасилитация). Заблокированные деньги часто оказываются заблокированной жизненной энергией."],
  ["Scissors", "Средняя жёсткость", "Работаю скальпелем, а не топором и не пером. Не глажу по головке тех, кто пришёл ныть: сразу вскрываю вторичные выгоды и возвращаю авторство вашей жизни."],
  ["TreeDeciduous", "Авторские инструменты", "«Дерево идентификации» и «Бизнес-Дерево» делают работу осязаемой, а не абстрактно-духовной."],
];

const payFor = {
  private: {
    title: "Частные клиенты: эксперты и управленцы",
    items: [
      "Пробить финансовый потолок, который держится на психологических блоках и страхе собственной силы",
      "Вернуть вкус к жизни: выйти из «зомби-успеха» и снова получать удовольствие от заработанных денег",
      "Выйти из абьюзивных сценариев — в бизнесе или личной жизни — без потери ресурсов и с сохранением достоинства",
    ],
  },
  company: {
    title: "Компании",
    items: [
      "Диагностика скрытых конфликтов: настоящая причина текучки, саботажа или падения продаж — обычно это токсичная коммуникация и нарушенные границы, а не «плохие скрипты»",
      "Рестарт команды: стратегическая сессия, после которой люди перестают играть в игры и работают на общий результат",
    ],
  },
};

const steps = [
  {
    level: "1",
    tag: "Знакомство · бесплатно",
    name: "Гайды и чек-листы",
    offer: "«Переводчик с токсичного на человеческий» и чек-лист «Индикаторы моего предательства себя» — мгновенный инсайт и знакомство с моим стилем.",
    preset: "Хочу получить бесплатный гайд",
    cta: "Получить гайд",
  },
  {
    level: "2",
    tag: "Диагностика · 1–2 встречи",
    name: "Экспресс-аудит",
    offer: "«Диагностика связки Деньги–Тело–Границы» для частных клиентов или «Бизнес-Дерево» для компаний. За 90 минут найду 3 скрытые дыры, через которые вы теряете деньги и энергию, и дам план их закрытия.",
    preset: "Хочу экспресс-аудит",
    cta: "Записаться на аудит",
  },
  {
    level: "3",
    tag: "Трансформация · 2–3 месяца",
    name: "Стратегический коучинг",
    offer: "Помогаю лидерам и экспертам перестать предавать себя, выстроить здоровые границы и соединить психику, тело и финансы в работающую систему — без выгорания и «успешного успеха». Внутри: регулярные сессии, «Дерево идентификации», телесные практики, корректировка бизнес-стратегии.",
    preset: "Интересует индивидуальный стратегический коучинг на 2–3 месяца",
    cta: "Обсудить работу",
  },
  {
    level: "4",
    tag: "Сообщество · подписка",
    name: "Закрытый клуб «Калибр»",
    offer: "Среда для тех, кто выбирает жизнь, а не фасад: бизнес, жёсткие границы и физическая витальность. Без нытья — только точки А, Б и ресурсы.",
    preset: "Интересует клуб «Калибр»",
    cta: "Узнать о клубе",
  },
];

interface ValueSectionProps {
  onScrollToContacts: (preset?: string) => void;
}

export default function ValueSection({ onScrollToContacts }: ValueSectionProps) {
  return (
    <>
      <section id="approach" className="py-24 max-w-6xl mx-auto px-6">
        <div className="mb-16 text-center">
          <div className="text-[#b07d62] text-xs font-medium uppercase tracking-widest mb-4">Перепрошивка</div>
          <h2 className="font-cormorant text-4xl lg:text-5xl font-light text-[#2c2420]">Что меняется в вашей жизни</h2>
          <p className="text-[#9c7b6e] mt-4 font-light max-w-xl mx-auto">Я не просто слушаю и не раздаю техники. Я провожу системную перепрошивку: психика, тело и деньги.</p>
        </div>
        <div className="grid lg:grid-cols-5 gap-6">
          <div className="lg:col-span-2 bg-[#2c2420] rounded-2xl p-8">
            <div className="text-[#b07d62] text-xs font-medium uppercase tracking-widest mb-6">До работы</div>
            <ul className="space-y-4">
              {before.map((t, i) => (
                <li key={i} className="flex items-start gap-3 text-[#c4a99a] text-sm font-light leading-relaxed">
                  <Icon name="X" size={16} className="text-[#b07d62] flex-shrink-0 mt-0.5" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4">
            {after.map(([icon, title, desc], i) => (
              <div key={i} className="bg-[#f5ede6] rounded-2xl p-6 border border-[#e8ddd5]">
                <div className="w-10 h-10 rounded-full bg-[#f0e6de] flex items-center justify-center mb-4">
                  <Icon name={icon} size={18} className="text-[#b07d62]" />
                </div>
                <h3 className="font-medium text-[#2c2420] mb-2">{title}</h3>
                <p className="text-[#9c7b6e] text-sm font-light leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="difference" className="py-24 bg-[#f5ede6]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16 text-center">
            <div className="text-[#b07d62] text-xs font-medium uppercase tracking-widest mb-4">Почему я</div>
            <h2 className="font-cormorant text-4xl lg:text-5xl font-light text-[#2c2420]">Другая операционная система</h2>
            <p className="text-[#9c7b6e] mt-4 font-light max-w-2xl mx-auto">Одни специалисты работают только с головой, другие учат «успешному успеху», третьи бесконечно жалеют без реальных действий. Я соединяю то, что обычно разделено.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {difference.map(([icon, title, desc], i) => (
              <div key={i} className="bg-[#faf7f4] rounded-2xl p-8 border border-transparent hover:border-[#e8ddd5] hover:shadow-md hover:shadow-[#b07d62]/10 transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-[#f0e6de] flex items-center justify-center mb-5">
                  <Icon name={icon} size={20} className="text-[#b07d62]" />
                </div>
                <h3 className="font-medium text-[#2c2420] mb-3 text-lg">{title}</h3>
                <p className="text-[#9c7b6e] text-sm font-light leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-[#7a5f54] font-light mt-10 max-w-2xl mx-auto">Мой стиль — сильный фильтр: он отсеивает «туристов» и привлекает тех, кто готов к реальной трансформации.</p>
        </div>
      </section>

      <section id="requests" className="py-24 max-w-6xl mx-auto px-6">
        <div className="mb-16 text-center">
          <div className="text-[#b07d62] text-xs font-medium uppercase tracking-widest mb-4">Запросы</div>
          <h2 className="font-cormorant text-4xl lg:text-5xl font-light text-[#2c2420]">С чем приходят и что получают</h2>
          <p className="text-[#9c7b6e] mt-4 font-light max-w-xl mx-auto">Не «сессии» и «поддержку», а избавление от конкретной дорогой боли и возвращение контроля.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {[payFor.private, payFor.company].map((g, gi) => (
            <div key={gi} className="bg-[#f5ede6] border border-[#e8ddd5] rounded-2xl p-8">
              <div className="font-cormorant text-2xl font-semibold text-[#2c2420] mb-6">{g.title}</div>
              <ul className="space-y-4">
                {g.items.map((t, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#7a5f54] text-sm font-light leading-relaxed">
                    <Icon name="Check" size={16} className="text-[#b07d62] flex-shrink-0 mt-0.5" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="path" className="py-24 bg-[#2c2420]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16 text-center">
            <div className="text-[#b07d62] text-xs font-medium uppercase tracking-widest mb-4">Путь работы</div>
            <h2 className="font-cormorant text-4xl lg:text-5xl font-light text-[#faf7f4]">От диагностики к глубинной работе</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s) => (
              <div key={s.level} className="bg-[#3a302b] rounded-2xl p-7 flex flex-col border border-[#4a3d36]">
                <div className="font-cormorant text-5xl font-light text-[#b07d62] mb-3">{s.level}</div>
                <div className="text-[#c4a99a]/70 text-xs uppercase tracking-widest mb-2">{s.tag}</div>
                <h3 className="text-[#faf7f4] font-medium text-lg mb-3">{s.name}</h3>
                <p className="text-[#c4a99a] text-sm font-light leading-relaxed flex-1 mb-6">{s.offer}</p>
                <button
                  onClick={() => onScrollToContacts(s.preset)}
                  className="w-full py-3 rounded-full text-sm font-medium bg-[#b07d62] text-[#faf7f4] hover:bg-[#9c6b51] transition-colors duration-200"
                >
                  {s.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
