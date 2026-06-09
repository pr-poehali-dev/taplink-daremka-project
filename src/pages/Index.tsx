import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/01f169e7-c520-4152-96e2-336496512915/files/17cfd4d4-3b71-432c-9c2e-565eed3530ca.jpg";

const approaches = [
  { icon: "Brain", title: "Когнитивно-поведенческая терапия", desc: "Работа с мыслями и поведением, которые создают тревогу, страхи и депрессию." },
  { icon: "Heart", title: "Гештальт-терапия", desc: "Осознание чувств здесь и сейчас, завершение незакрытых ситуаций из прошлого." },
  { icon: "Users", title: "Семейная терапия", desc: "Работа с парами и семьями: конфликты, кризисы, выстраивание границ." },
  { icon: "Compass", title: "Экзистенциальный подход", desc: "Поиск смысла, работа с одиночеством, тревогой о будущем и важными выборами." },
  { icon: "Leaf", title: "Телесно-ориентированная работа", desc: "Связь между телесными ощущениями и эмоциональными состояниями." },
  { icon: "Moon", title: "Работа с травмой", desc: "Безопасное проживание и интеграция сложного опыта в вашу историю жизни." },
];

const steps = [
  { num: "01", title: "Первичная консультация", desc: "Знакомство, обозначение запроса. Вы поймёте, комфортно ли нам работать вместе. 60 минут." },
  { num: "02", title: "Контракт и цели", desc: "Формулируем конкретные цели терапии и договариваемся о частоте встреч." },
  { num: "03", title: "Регулярные сессии", desc: "Еженедельные встречи по 50 минут — очно в кабинете или онлайн." },
  { num: "04", title: "Результат и завершение", desc: "Оцениваем изменения и завершаем работу, когда вы почувствуете готовность." },
];

const plans = [
  {
    name: "Разовая сессия",
    price: "4 500",
    period: "₽ / сессия",
    desc: "Первичная или разовая консультация",
    features: ["50 минут работы", "Очно или онлайн", "Без предоплаты", "Конфиденциально"],
    highlight: false,
    cta: "Записаться",
  },
  {
    name: "Блок 4 сессии",
    price: "15 000",
    period: "₽ / блок",
    desc: "Для системной работы над запросом",
    features: ["4 × 50 минут", "Экономия 3 000 ₽", "Удобное расписание", "Приоритетная запись"],
    highlight: true,
    cta: "Выбрать блок",
  },
  {
    name: "Долгосрочная терапия",
    price: "По договорённости",
    period: "",
    desc: "Индивидуальный формат",
    features: ["Неограниченный срок", "Гибкая частота встреч", "Корпоративный договор", "Отчётные документы"],
    highlight: false,
    cta: "Обсудить условия",
  },
];

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

export default function Index() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs: [string, string][] = [
    ["Как проходит первая встреча?", "Первая сессия — это знакомство. Я задам несколько вопросов о вашем запросе и жизненной ситуации, расскажу о своём подходе. Вы сможете понять, комфортно ли вам работать именно со мной."],
    ["Можно ли работать онлайн?", "Да, онлайн-формат работает так же эффективно, как и очный. Мы используем видеосвязь в удобное для вас время — без необходимости приезжать в кабинет."],
    ["Сколько сессий нужно?", "Краткосрочная работа с конкретным запросом — 8–16 сессий. Глубокие изменения характера и паттернов — от полугода. Мы будем регулярно оценивать прогресс вместе."],
    ["Всё строго конфиденциально?", "Абсолютно. Всё сказанное на сессии остаётся между нами. Единственное исключение — угроза жизни, что предусмотрено этическим кодексом психолога."],
  ];

  return (
    <div className="font-rubik bg-[#faf7f4] text-[#2c2420] min-h-screen overflow-x-hidden">

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#faf7f4]/95 backdrop-blur-sm border-b border-[#e8ddd5]">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#b07d62] flex items-center justify-center">
              <Icon name="Sprout" size={15} className="text-[#faf7f4]" />
            </div>
            <div>
              <span className="font-cormorant text-lg font-semibold text-[#2c2420] tracking-wide">Анна Соколова</span>
              <span className="hidden sm:inline text-xs text-[#9c7b6e] ml-2">психолог</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-7 text-sm text-[#7a5f54]">
            {[["approaches", "Подходы"], ["steps", "Процесс"], ["pricing", "Стоимость"], ["contacts", "Контакты"]].map(([id, label]) => (
              <button key={id} onClick={() => scrollTo(id)} className="hover:text-[#b07d62] transition-colors duration-200">
                {label}
              </button>
            ))}
          </div>
          <button onClick={() => scrollTo("contacts")} className="bg-[#b07d62] text-[#faf7f4] text-sm font-medium px-5 py-2.5 rounded-full hover:bg-[#9c6b51] transition-colors duration-200">
            Записаться
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full hidden lg:block">
          <img src={HERO_IMAGE} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#faf7f4] via-[#faf7f4]/50 to-transparent" />
        </div>
        <div className="relative max-w-6xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#f0e6de] text-[#b07d62] text-xs font-medium px-4 py-2 rounded-full mb-8">
              <Icon name="MapPin" size={12} />
              Москва · Онлайн по всему миру
            </div>
            <h1 className="font-cormorant text-5xl lg:text-6xl font-light leading-snug mb-6 text-[#2c2420]">
              Пространство,<br />где можно быть<br />
              <em className="font-semibold text-[#b07d62] not-italic">собой</em>
            </h1>
            <p className="text-[#7a5f54] text-lg leading-relaxed mb-10 max-w-md font-light">
              Индивидуальные психологические сессии для тех, кто хочет разобраться в себе, справиться с тревогой и построить жизнь, которая по-настоящему нравится.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={() => scrollTo("contacts")} className="bg-[#b07d62] text-[#faf7f4] font-medium px-8 py-4 rounded-full hover:bg-[#9c6b51] transition-all duration-200">
                Записаться на первую сессию
              </button>
              <button onClick={() => scrollTo("approaches")} className="border border-[#d4b8ac] text-[#7a5f54] px-8 py-4 rounded-full hover:border-[#b07d62] hover:text-[#b07d62] transition-all duration-200">
                Узнать подробнее
              </button>
            </div>
            <div className="mt-12 flex items-center gap-8">
              {[["8+", "лет практики"], ["400+", "клиентов"], ["97%", "рекомендуют"]].map(([val, label], i) => (
                <div key={i}>
                  <div className="font-cormorant text-3xl font-semibold text-[#b07d62]">{val}</div>
                  <div className="text-xs text-[#9c7b6e] mt-0.5">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute bottom-12 left-6 w-32 h-32 rounded-full border border-[#d4b8ac]/40 pointer-events-none" />
        <div className="absolute bottom-8 left-10 w-20 h-20 rounded-full border border-[#d4b8ac]/20 pointer-events-none" />
      </section>

      {/* APPROACHES */}
      <section id="approaches" className="py-24 bg-[#f5ede6]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <div className="text-[#b07d62] text-xs font-medium uppercase tracking-widest mb-4">Методы работы</div>
            <h2 className="font-cormorant text-4xl lg:text-5xl font-light text-[#2c2420]">Подходы и направления</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {approaches.map((a, i) => (
              <div key={i} className="bg-[#faf7f4] rounded-2xl p-7 hover:shadow-md hover:shadow-[#b07d62]/10 transition-all duration-300 group border border-transparent hover:border-[#e8ddd5]">
                <div className="w-10 h-10 rounded-full bg-[#f0e6de] flex items-center justify-center mb-5 group-hover:bg-[#b07d62]/20 transition-colors duration-200">
                  <Icon name={a.icon} size={18} className="text-[#b07d62]" />
                </div>
                <h3 className="font-medium text-[#2c2420] mb-3 leading-snug">{a.title}</h3>
                <p className="text-[#9c7b6e] text-sm leading-relaxed font-light">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STEPS */}
      <section id="steps" className="py-24 max-w-6xl mx-auto px-6">
        <div className="mb-16 text-center">
          <div className="text-[#b07d62] text-xs font-medium uppercase tracking-widest mb-4">Как это работает</div>
          <h2 className="font-cormorant text-4xl lg:text-5xl font-light text-[#2c2420]">Путь от первого шага до результата</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#e8ddd5] rounded-2xl overflow-hidden">
          {steps.map((s, i) => (
            <div key={i} className="bg-[#faf7f4] p-8 group hover:bg-[#f5ede6] transition-colors duration-200">
              <div className="font-cormorant text-5xl font-light text-[#e8ddd5] group-hover:text-[#d4b8ac] transition-colors duration-200 mb-4 leading-none">{s.num}</div>
              <h3 className="font-medium text-[#2c2420] mb-3 text-sm">{s.title}</h3>
              <p className="text-[#9c7b6e] text-xs leading-relaxed font-light">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-24 bg-[#2c2420] text-[#faf7f4]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-[#b07d62] text-xs font-medium uppercase tracking-widest mb-4">Об авторе</div>
              <h2 className="font-cormorant text-4xl lg:text-5xl font-light mb-6">Анна Соколова</h2>
              <p className="text-[#c4a99a] leading-relaxed mb-8 font-light">
                Клинический психолог, гештальт-терапевт. Работаю с тревогой, депрессией, кризисами идентичности, отношениями и последствиями травматичного опыта.
              </p>
              <div className="space-y-4">
                {[
                  ["GraduationCap", "МГУ им. Ломоносова, факультет психологии"],
                  ["Award", "Сертификат МГИ по гештальт-терапии (5 лет обучения)"],
                  ["BookOpen", "Личная терапия и регулярная супервизия"],
                  ["Shield", "Член Российского психологического общества"],
                ].map(([icon, text], i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Icon name={icon as string} size={16} className="text-[#b07d62] flex-shrink-0" />
                    <span className="text-[#c4a99a] text-sm font-light">{text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="text-[#c4a99a]/60 text-xs uppercase tracking-widest mb-6">С чем обращаются</div>
              <div className="flex flex-wrap gap-2">
                {["Тревога и панические атаки", "Депрессия", "Отношения и границы", "Самооценка", "Одиночество", "Горе и потери", "Выгорание", "Страх перемен", "Кризис среднего возраста", "Психосоматика", "Прокрастинация", "Конфликты в семье"].map((tag, i) => (
                  <span key={i} className="border border-[#5a3f35] text-[#c4a99a] text-xs px-3 py-1.5 rounded-full font-light hover:border-[#b07d62] hover:text-[#b07d62] transition-colors duration-200 cursor-default">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-24 max-w-6xl mx-auto px-6">
        <div className="mb-16 text-center">
          <div className="text-[#b07d62] text-xs font-medium uppercase tracking-widest mb-4">Стоимость</div>
          <h2 className="font-cormorant text-4xl lg:text-5xl font-light text-[#2c2420]">Прозрачные условия</h2>
          <p className="text-[#9c7b6e] mt-4 font-light max-w-lg mx-auto">Первая встреча — по обычной цене. Никаких скрытых платежей и обязательных пакетов.</p>
        </div>
        <div className="grid lg:grid-cols-3 gap-6">
          {plans.map((p, i) => (
            <div key={i} className={`relative rounded-2xl p-8 flex flex-col ${p.highlight ? "bg-[#b07d62]" : "bg-[#f5ede6] border border-[#e8ddd5]"}`}>
              {p.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#2c2420] text-[#b07d62] text-xs font-medium uppercase tracking-widest px-4 py-1 rounded-full">
                  Популярно
                </div>
              )}
              <div className="mb-4">
                <div className={`text-xs font-medium uppercase tracking-widest mb-2 ${p.highlight ? "text-[#faf7f4]/60" : "text-[#9c7b6e]"}`}>{p.desc}</div>
                <div className={`font-semibold ${p.highlight ? "text-[#faf7f4]" : "text-[#2c2420]"}`}>{p.name}</div>
              </div>
              <div className="mb-8">
                <span className={`font-cormorant text-4xl font-light ${p.highlight ? "text-[#faf7f4]" : "text-[#2c2420]"}`}>{p.price}</span>
                {p.period && <span className={`text-sm ml-1 ${p.highlight ? "text-[#faf7f4]/60" : "text-[#9c7b6e]"}`}>{p.period}</span>}
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {p.features.map((f, fi) => (
                  <li key={fi} className={`flex items-center gap-2 text-sm font-light ${p.highlight ? "text-[#faf7f4]" : "text-[#7a5f54]"}`}>
                    <Icon name="Check" size={14} className={p.highlight ? "text-[#faf7f4]" : "text-[#b07d62]"} />
                    {f}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => scrollTo("contacts")}
                className={`w-full py-3 rounded-full font-medium text-sm transition-all duration-200 ${p.highlight ? "bg-[#faf7f4] text-[#b07d62] hover:bg-[#f0e6de]" : "border border-[#d4b8ac] text-[#7a5f54] hover:border-[#b07d62] hover:text-[#b07d62]"}`}
              >
                {p.cta}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-[#f5ede6]">
        <div className="max-w-3xl mx-auto px-6">
          <div className="mb-12 text-center">
            <div className="text-[#b07d62] text-xs font-medium uppercase tracking-widest mb-4">Вопросы и ответы</div>
            <h2 className="font-cormorant text-4xl font-light text-[#2c2420]">Часто спрашивают</h2>
          </div>
          <div className="space-y-2">
            {faqs.map(([q, a], i) => (
              <div key={i} className="bg-[#faf7f4] rounded-xl overflow-hidden border border-[#e8ddd5]">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                >
                  <span className="font-medium text-[#2c2420] text-sm pr-4">{q}</span>
                  <Icon name={openFaq === i ? "ChevronUp" : "ChevronDown"} size={16} className="text-[#b07d62] flex-shrink-0" />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5">
                    <p className="text-[#9c7b6e] text-sm leading-relaxed font-light">{a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-24 max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="text-[#b07d62] text-xs font-medium uppercase tracking-widest mb-4">Запись</div>
            <h2 className="font-cormorant text-4xl lg:text-5xl font-light text-[#2c2420] mb-6">Начнём разговор?</h2>
            <p className="text-[#9c7b6e] leading-relaxed mb-10 font-light">
              Напишите мне — я отвечу в течение нескольких часов и мы договоримся о времени первой встречи.
            </p>
            <div className="space-y-5 mb-10">
              {[
                ["Phone", "+7 (916) 123-45-67", "Telegram · WhatsApp"],
                ["Mail", "anna@sokolova-psy.ru", "Email"],
                ["MapPin", "Москва, Чистые Пруды", "Очные встречи"],
                ["Video", "Zoom · Google Meet", "Онлайн-сессии"],
              ].map(([icon, val, label], i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#f0e6de] flex items-center justify-center flex-shrink-0">
                    <Icon name={icon as string} size={16} className="text-[#b07d62]" />
                  </div>
                  <div>
                    <div className="text-[#2c2420] text-sm font-medium">{val}</div>
                    <div className="text-[#9c7b6e] text-xs">{label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-[#f5ede6] rounded-2xl p-8 border border-[#e8ddd5]">
            <div className="font-cormorant text-2xl font-light text-[#2c2420] mb-6">Оставить заявку</div>
            <div className="space-y-4">
              {[
                ["text", "Ваше имя", "Как вас зовут?"],
                ["tel", "Телефон / Telegram", "+7 или @username"],
                ["email", "Email", "your@email.com"],
              ].map(([type, label, placeholder], i) => (
                <div key={i}>
                  <label className="block text-[#9c7b6e] text-xs font-medium mb-2">{label}</label>
                  <input
                    type={type as string}
                    placeholder={placeholder as string}
                    className="w-full bg-[#faf7f4] border border-[#e8ddd5] rounded-xl px-4 py-3 text-[#2c2420] text-sm placeholder-[#c4a99a] focus:outline-none focus:border-[#b07d62] transition-colors duration-200"
                  />
                </div>
              ))}
              <div>
                <label className="block text-[#9c7b6e] text-xs font-medium mb-2">С чем хотите поработать?</label>
                <textarea
                  rows={3}
                  placeholder="Необязательно, но поможет подготовиться к встрече..."
                  className="w-full bg-[#faf7f4] border border-[#e8ddd5] rounded-xl px-4 py-3 text-[#2c2420] text-sm placeholder-[#c4a99a] focus:outline-none focus:border-[#b07d62] transition-colors duration-200 resize-none"
                />
              </div>
              <button className="w-full bg-[#b07d62] text-[#faf7f4] font-medium py-4 rounded-full hover:bg-[#9c6b51] transition-colors duration-200 mt-2">
                Записаться на сессию
              </button>
              <p className="text-[#9c7b6e] text-xs text-center font-light">
                Конфиденциальность гарантирована. Данные не передаются третьим лицам.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#2c2420] py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-full bg-[#b07d62] flex items-center justify-center">
              <Icon name="Sprout" size={13} className="text-[#faf7f4]" />
            </div>
            <span className="font-cormorant text-[#faf7f4] font-medium tracking-wide">Анна Соколова · психолог</span>
          </div>
          <div className="text-[#c4a99a]/40 text-xs font-light">© 2024 · Все встречи конфиденциальны</div>
          <div className="flex items-center gap-1 text-[#c4a99a]/40 text-xs font-light">
            <Icon name="Shield" size={12} className="text-[#b07d62]" />
            Этический кодекс психолога
          </div>
        </div>
      </footer>

    </div>
  );
}
