import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/01f169e7-c520-4152-96e2-336496512915/files/17cfd4d4-3b71-432c-9c2e-565eed3530ca.jpg";

const approaches = [
  { icon: "Brain", title: "МАК-терапия", desc: "Метафорические ассоциативные карты — мягкий и глубокий инструмент для работы с подсознанием, страхами и внутренними блоками." },
  { icon: "TrendingUp", title: "Коучинг ICF", desc: "Профессиональный коучинг по стандартам ICF для достижения целей в жизни и карьере." },
  { icon: "Briefcase", title: "Бизнес-тренинги", desc: "Корпоративные и групповые программы для развития команд, лидерства и управленческих компетенций." },
  { icon: "Compass", title: "Психологическое консультирование", desc: "Работа с тревогой, самооценкой, кризисами идентичности и жизненными переходами." },
  { icon: "Star", title: "Личностный рост", desc: "Помогаю раскрыть потенциал, найти ресурсы и выстроить жизнь в соответствии с ценностями." },
  { icon: "Users", title: "Групповые сессии", desc: "Работа в группе — уникальная возможность получить поддержку, обратную связь и новый опыт." },
  { icon: "HeartHandshake", title: "Сексология", desc: "Работа с интимностью, сексуальной идентичностью, отношениями и сексуальными дисфункциями в безопасном пространстве." },
];

const steps = [
  { num: "01", title: "Первый контакт", desc: "Напишите мне — мы коротко обсудим ваш запрос и выберем подходящий формат: коучинг, психологию или группу." },
  { num: "02", title: "Пробная сессия", desc: "Знакомимся в работе. Вы почувствуете методику и поймёте, резонирует ли вам такой подход." },
  { num: "03", title: "Регулярные встречи", desc: "Индивидуально или в группе, онлайн или очно — в ритме, который подходит именно вам." },
  { num: "04", title: "Фиксируем результат", desc: "Отмечаем изменения, закрепляем новые паттерны и строим план дальнейшего развития." },
];

const plans = [
  {
    name: "Групповая сессия",
    price: "2 000",
    period: "₽ / чел.",
    desc: "Разовая или пакет 5 сессий — 8 500 ₽",
    features: ["Работа в группе", "МАК и коучинговые техники", "Поддержка участников", "Онлайн или очно"],
    highlight: false,
    cta: "Записаться в группу",
  },
  {
    name: "Индивидуальный коучинг",
    price: "3 500",
    period: "₽ / сессия",
    desc: "Пакет 10 сессий — 30 000 ₽",
    features: ["Коучинг ICF + МАК-терапия", "Личностный и карьерный рост", "Чёткие цели и стратегия", "Приоритетная запись"],
    highlight: true,
    cta: "Начать коучинг",
  },
  {
    name: "Психологическая сессия",
    price: "5 000",
    period: "₽ / сессия",
    desc: "Пакет 10 сессий — 45 000 ₽",
    features: ["Психологическое консультирование", "МАК-терапия", "Глубинная проработка", "Конфиденциально"],
    highlight: false,
    cta: "Записаться",
  },
];

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

export default function Index() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs: [string, string][] = [
    ["Что такое МАК-терапия?", "МАК (метафорические ассоциативные карты) — это инструмент для работы с подсознанием. Карты помогают мягко и образно исследовать внутренний мир, найти ресурсы и решения там, где слова не справляются."],
    ["Чем отличается коучинг от психологии?", "Коучинг фокусируется на целях и будущем — мы определяем, куда вы хотите прийти, и строим путь. Психологическое консультирование работает глубже с эмоциями, убеждениями и прошлым опытом. Часто я совмещаю оба подхода."],
    ["Как проходят групповые сессии?", "Группы — это безопасное пространство, где участники работают с МАК-картами, получают обратную связь и поддержку. Обычно 6–12 человек. Формат бережный и конфиденциальный."],
    ["Можно ли работать онлайн?", "Да, онлайн-формат полностью рабочий. Видеосвязь, удобное время, никуда ехать не нужно. Эффективность не уступает очным встречам."],
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
              <span className="font-cormorant text-lg font-semibold text-[#2c2420] tracking-wide">Дарья Емикеева</span>
              <span className="hidden sm:inline text-xs text-[#9c7b6e] ml-2">психолог · сексолог · коуч</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-7 text-sm text-[#7a5f54]">
            {[["approaches", "Подходы"], ["method", "Методика"], ["pricing", "Стоимость"], ["contacts", "Контакты"]].map(([id, label]) => (
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
              Москва · Онлайн через Яндекс Телемост
            </div>
            <h1 className="font-cormorant text-5xl lg:text-6xl font-light leading-snug mb-6 text-[#2c2420]">
              Расти. Меняться.<br />Становиться<br />
              <em className="font-semibold text-[#b07d62] not-italic">собой</em>
            </h1>
            <p className="text-[#7a5f54] text-lg leading-relaxed mb-10 max-w-md font-light">
              Психолог-консультант, сексолог, коуч ICF и бизнес-тренер. Специализируюсь на МАК-терапии для личностного и профессионального роста.
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
              {[["5+", "лет практики"], ["200+", "клиентов"], ["ICF", "сертификация"]].map(([val, label], i) => (
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

      {/* METHOD */}
      <section id="method" className="py-24 bg-[#2c2420] overflow-hidden relative">
        <div className="absolute right-0 top-0 w-64 h-64 rounded-full bg-[#b07d62]/5 -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute left-0 bottom-0 w-96 h-96 rounded-full bg-[#b07d62]/5 translate-y-1/2 -translate-x-1/2 pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="mb-4 flex items-center gap-3">
            <div className="text-[#b07d62] text-xs font-medium uppercase tracking-widest">Авторская методика</div>
            <div className="h-px flex-1 bg-[#b07d62]/20 max-w-[80px]" />
          </div>
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-cormorant text-4xl lg:text-5xl font-light text-[#faf7f4] mb-6 leading-tight">
                Методика<br />
                <em className="text-[#b07d62] not-italic font-semibold">«Дерево определения»</em>
              </h2>
              <p className="text-[#c4a99a] leading-relaxed mb-8 font-light">
                Статистика разводов пугает, но ещё больше — ощущение замкнутого круга в отношениях. Мы ищем «своего человека», но часто не знаем, кто мы сами. Методика «Дерево определения» — это метафорический инструмент для глубокой диагностики личности, разработанный Дарьей Емикеевой.
              </p>
              <p className="text-[#c4a99a] leading-relaxed mb-10 font-light">
                Мы оцениваем партнёра по его поведению (кроне), не понимая его ценностей (корней) и характера (ствола). Эта методика помогает выйти из этого круга.
              </p>
              <div className="space-y-3 mb-10">
                <div className="text-[#c4a99a]/60 text-xs uppercase tracking-widest mb-4">Что вы получите</div>
                {[
                  "Чёткое понимание своих сильных сторон и зон роста",
                  "Инструмент для анализа совместимости с партнёром",
                  "Стратегию для построения гармоничных отношений",
                  "Осознание, как ваш характер влияет на конфликты",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#b07d62]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon name="Check" size={11} className="text-[#b07d62]" />
                    </div>
                    <span className="text-[#c4a99a] text-sm font-light leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
              <button onClick={() => scrollTo("contacts")} className="bg-[#b07d62] text-[#faf7f4] font-medium px-8 py-4 rounded-full hover:bg-[#9c6b51] transition-all duration-200">
                Записаться на практикум
              </button>
            </div>
            <div className="space-y-5">
              {[
                {
                  icon: "Sprout",
                  title: "Корни — ваши ценности",
                  desc: "Фундамент личности: семья, воспитание, культурные нормы, убеждения. Именно корни обеспечивают устойчивость и формируют глубинные представления о мире и о себе.",
                  num: "01",
                },
                {
                  icon: "TreePine",
                  title: "Ствол — ваш характер",
                  desc: "Устойчивые черты личности: темперамент, эмоции, мотивация. Хотя ствол кажется неизменным, он способен адаптироваться под влиянием опыта и обстоятельств.",
                  num: "02",
                },
                {
                  icon: "Leaf",
                  title: "Крона — ваше поведение",
                  desc: "Повседневные мысли, чувства и поступки. Крона наиболее изменчива, но определяется корнями и стволом — именно они задают потенциал её развития.",
                  num: "03",
                },
              ].map((el, i) => (
                <div key={i} className="bg-[#3d302b] rounded-2xl p-6 border border-[#5a3f35] hover:border-[#b07d62]/40 transition-colors duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#b07d62]/20 flex items-center justify-center flex-shrink-0">
                      <Icon name={el.icon} size={18} className="text-[#b07d62]" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-[#b07d62]/50 text-xs font-medium">{el.num}</span>
                        <h3 className="font-medium text-[#faf7f4] text-sm">{el.title}</h3>
                      </div>
                      <p className="text-[#c4a99a] text-sm font-light leading-relaxed">{el.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
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
              <h2 className="font-cormorant text-4xl lg:text-5xl font-light mb-6">Дарья Емикеева</h2>
              <p className="text-[#c4a99a] leading-relaxed mb-8 font-light">
                Психолог-консультант, сексолог, коуч ICF и бизнес-тренер. Помогаю людям раскрыть потенциал, преодолеть внутренние барьеры и выстроить путь к личностному и профессиональному росту через МАК-терапию.
              </p>
              <div className="space-y-4">
                {[
                  ["GraduationCap", "Профессиональное психологическое образование"],
                  ["Award", "Сертификация ICF — международный стандарт коучинга"],
                  ["Layers", "Специализация: МАК-терапия и бизнес-тренинги"],
                  ["Users", "Работаю индивидуально и в группах"],
                ].map(([icon, text], i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Icon name={icon as string} size={16} className="text-[#b07d62] flex-shrink-0" />
                    <span className="text-[#c4a99a] text-sm font-light">{text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="text-[#c4a99a]/60 text-xs uppercase tracking-widest mb-6">С чем работаю</div>
              <div className="flex flex-wrap gap-2">
                {["Личностный рост", "Карьерные цели", "Самооценка", "Выгорание", "Прокрастинация", "Страх перемен", "Внутренние блоки", "Лидерство", "Отношения", "Поиск смысла", "Управление стрессом", "Развитие потенциала", "Профессиональный рост", "МАК-терапия"].map((tag, i) => (
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
              Напишите мне — расскажите о своём запросе, и я предложу подходящий формат работы. Отвечаю в течение нескольких часов.
            </p>
            <div className="space-y-5 mb-10">
              {[
                ["Phone", "+7 (918) 537-93-05", "Телефон · WhatsApp"],
                ["Mail", "daremka-5@mail.ru", "Email"],
                ["MapPin", "Москва, очно по договорённости", "Очные встречи"],
                ["Video", "Яндекс Телемост", "Онлайн-сессии"],
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
            <span className="font-cormorant text-[#faf7f4] font-medium tracking-wide">Дарья Емикеева · психолог · сексолог · коуч</span>
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