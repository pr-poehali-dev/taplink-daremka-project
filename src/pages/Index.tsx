import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/01f169e7-c520-4152-96e2-336496512915/files/3f85559b-d449-487d-a68e-2bae1004bbc8.jpg";

const features = [
  {
    icon: "Layers",
    title: "Интеграция без кода",
    desc: "Подключается к любой ERP, CRM и 1С через готовые коннекторы за 2 рабочих дня.",
  },
  {
    icon: "BarChart3",
    title: "Аналитика в реальном времени",
    desc: "Дашборды с KPI, воронки продаж и P&L — все данные в одном окне.",
  },
  {
    icon: "Users",
    title: "Ролевой доступ",
    desc: "Гибкая система прав: от топ-менеджмента до рядового сотрудника.",
  },
  {
    icon: "Zap",
    title: "Высокая производительность",
    desc: "Обрабатывает более 10 000 транзакций в секунду без деградации.",
  },
  {
    icon: "Globe",
    title: "Мультиязычность",
    desc: "Русский, English, Deutsch — переключение интерфейса в один клик.",
  },
  {
    icon: "Headphones",
    title: "Поддержка 24/7",
    desc: "Выделенный менеджер и SLA до 4 часов на критические инциденты.",
  },
];

const benefits = [
  { value: "38%", label: "снижение операционных издержек" },
  { value: "3×", label: "ускорение принятия решений" },
  { value: "99.9%", label: "гарантированный аптайм" },
  { value: "14 дн.", label: "до первого результата" },
];

const certs = [
  { icon: "ShieldCheck", label: "ISO 27001" },
  { icon: "Lock", label: "ГОСТ Р 57580" },
  { icon: "FileCheck", label: "152-ФЗ" },
  { icon: "Award", label: "SOC 2 Type II" },
  { icon: "Server", label: "Данные в РФ" },
];

const plans = [
  {
    name: "Старт",
    price: "49 000",
    period: "/ месяц",
    desc: "Для малого бизнеса и стартапов",
    features: [
      "До 25 пользователей",
      "5 интеграций",
      "Базовая аналитика",
      "Email-поддержка",
      "SLA 48 часов",
    ],
    highlight: false,
  },
  {
    name: "Бизнес",
    price: "129 000",
    period: "/ месяц",
    desc: "Оптимально для среднего бизнеса",
    features: [
      "До 200 пользователей",
      "Неограниченные интеграции",
      "Расширенная аналитика + BI",
      "Телефон + чат",
      "SLA 8 часов",
    ],
    highlight: true,
  },
  {
    name: "Энтерпрайз",
    price: "По запросу",
    period: "",
    desc: "Индивидуальное решение",
    features: [
      "Неограниченно пользователей",
      "On-premise / Private Cloud",
      "Кастомные модули",
      "Выделенный менеджер",
      "SLA 4 часа",
    ],
    highlight: false,
  },
];

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

export default function Index() {
  return (
    <div className="font-golos bg-[#0b0f1a] text-white min-h-screen overflow-x-hidden">

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0b0f1a]/90 backdrop-blur-sm border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-[#c9a84c] rounded-sm flex items-center justify-center">
              <Icon name="Hexagon" size={16} className="text-[#0b0f1a]" />
            </div>
            <span className="font-semibold text-lg tracking-tight">КОРПУС</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-white/60">
            {(["features", "benefits", "pricing", "contacts"] as const).map((id, i) => {
              const labels: Record<string, string> = { features: "Возможности", benefits: "Преимущества", pricing: "Тарифы", contacts: "Контакты" };
              return (
                <button key={id} onClick={() => scrollTo(id)} className="hover:text-white transition-colors duration-200">
                  {labels[id]}
                </button>
              );
            })}
          </div>
          <button onClick={() => scrollTo("contacts")} className="bg-[#c9a84c] text-[#0b0f1a] text-sm font-semibold px-5 py-2 rounded hover:bg-[#e0bf6a] transition-colors duration-200">
            Связаться
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 overflow-hidden">
          <img src={HERO_IMAGE} alt="" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b0f1a] via-[#0b0f1a]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f1a] via-transparent to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 border border-[#c9a84c]/40 text-[#c9a84c] text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-8">
              <Icon name="TrendingUp" size={12} />
              B2B платформа нового поколения
            </div>
            <h1 className="font-cormorant text-5xl lg:text-7xl font-semibold leading-tight mb-6">
              Управляйте бизнесом{" "}
              <em className="not-italic text-[#c9a84c]">без компромиссов</em>
            </h1>
            <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-lg">
              Единая платформа для автоматизации, аналитики и контроля бизнес-процессов. Сертифицирована по международным стандартам безопасности.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={() => scrollTo("contacts")} className="bg-[#c9a84c] text-[#0b0f1a] font-semibold px-8 py-4 rounded hover:bg-[#e0bf6a] transition-all duration-200 hover:shadow-lg hover:shadow-[#c9a84c]/20">
                Получить демо
              </button>
              <button onClick={() => scrollTo("pricing")} className="border border-white/20 text-white px-8 py-4 rounded hover:border-white/40 hover:bg-white/5 transition-all duration-200">
                Смотреть тарифы
              </button>
            </div>
          </div>

          <div className="hidden lg:grid grid-cols-2 gap-4">
            {benefits.map((b, i) => (
              <div key={i} className="border border-white/10 rounded-xl p-6 bg-white/5 backdrop-blur-sm hover:border-[#c9a84c]/30 transition-colors duration-300">
                <div className="font-cormorant text-4xl font-semibold text-[#c9a84c] mb-2">{b.value}</div>
                <div className="text-white/60 text-sm leading-snug">{b.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECURITY BANNER */}
      <div className="bg-[#111625] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-wrap items-center justify-center gap-8">
          {certs.map((c, i) => (
            <div key={i} className="flex items-center gap-2 text-white/50 hover:text-[#c9a84c] transition-colors duration-200">
              <Icon name={c.icon} size={16} />
              <span className="text-xs font-semibold uppercase tracking-widest">{c.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* FEATURES */}
      <section id="features" className="py-24 max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <div className="text-[#c9a84c] text-xs font-semibold uppercase tracking-widest mb-4">Ключевые особенности</div>
          <h2 className="font-cormorant text-4xl lg:text-5xl font-semibold">
            Всё что нужно корпоративному<br />
            <span className="text-white/50">клиенту в одном решении</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 rounded-2xl overflow-hidden">
          {features.map((f, i) => (
            <div key={i} className="bg-[#0b0f1a] p-8 hover:bg-[#111625] transition-colors duration-200 group">
              <div className="w-10 h-10 rounded-lg bg-[#c9a84c]/10 flex items-center justify-center mb-5 group-hover:bg-[#c9a84c]/20 transition-colors duration-200">
                <Icon name={f.icon} size={20} className="text-[#c9a84c]" />
              </div>
              <h3 className="font-semibold text-white mb-3">{f.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BENEFITS */}
      <section id="benefits" className="py-24 bg-[#111625]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-[#c9a84c] text-xs font-semibold uppercase tracking-widest mb-4">Преимущества и выгоды</div>
              <h2 className="font-cormorant text-4xl lg:text-5xl font-semibold mb-8">
                Почему выбирают нас
              </h2>
              <div className="space-y-6">
                {[
                  ["ShieldCheck", "Защита корпоративных данных", "Шифрование AES-256, изолированные контуры данных, аудит всех действий пользователей."],
                  ["GitBranch", "Гибкая архитектура", "Модульная система позволяет подключать только нужные блоки — вы платите за то, что используете."],
                  ["Clock", "Быстрый старт", "Проектная команда, готовые шаблоны и база знаний ускоряют внедрение в 3 раза по сравнению с конкурентами."],
                  ["TrendingUp", "Измеримый ROI", "Средний срок окупаемости — 8 месяцев. Гарантия результата закреплена в договоре."],
                ].map(([icon, title, desc], i) => (
                  <div key={i} className="flex gap-4 group">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center group-hover:border-[#c9a84c]/40 transition-colors duration-200">
                      <Icon name={icon as string} size={18} className="text-white/40 group-hover:text-[#c9a84c] transition-colors duration-200" />
                    </div>
                    <div>
                      <div className="font-semibold text-white mb-1">{title}</div>
                      <div className="text-white/50 text-sm leading-relaxed">{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-[#c9a84c]/5 rounded-3xl blur-2xl" />
              <div className="relative border border-white/10 rounded-2xl p-8 bg-[#0b0f1a]">
                <div className="text-white/40 text-sm mb-6 uppercase tracking-widest font-semibold">Сертификаты и соответствие</div>
                <div className="space-y-4">
                  {[
                    ["ISO 27001:2022", "Система управления информационной безопасностью", true],
                    ["ГОСТ Р 57580", "Защита финансовых организаций в РФ", true],
                    ["152-ФЗ", "Соответствие требованиям по обработке персональных данных", true],
                    ["SOC 2 Type II", "Подтверждённая безопасность и доступность сервисов", true],
                    ["PCI DSS Level 1", "Стандарт безопасности платёжных данных", false],
                  ].map(([name, desc, done], i) => (
                    <div key={i} className="flex items-start gap-3 pb-4 border-b border-white/5 last:border-0 last:pb-0">
                      <div className={`flex-shrink-0 mt-0.5 w-5 h-5 rounded-full flex items-center justify-center ${done ? "bg-[#c9a84c]/20 text-[#c9a84c]" : "bg-white/5 text-white/20"}`}>
                        <Icon name={done ? "Check" : "Clock"} size={11} />
                      </div>
                      <div>
                        <div className="font-semibold text-white text-sm">{name as string}</div>
                        <div className="text-white/40 text-xs mt-0.5">{desc as string}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-24 max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <div className="text-[#c9a84c] text-xs font-semibold uppercase tracking-widest mb-4">Тарифы</div>
          <h2 className="font-cormorant text-4xl lg:text-5xl font-semibold">
            Прозрачное ценообразование
          </h2>
          <p className="text-white/50 mt-4 max-w-xl mx-auto">Все тарифы включают базовую техническую поддержку, обновления и защищённое хранилище данных на серверах в РФ.</p>
        </div>
        <div className="grid lg:grid-cols-3 gap-6">
          {plans.map((p, i) => (
            <div key={i} className={`relative rounded-2xl p-8 flex flex-col ${p.highlight ? "bg-[#c9a84c]" : "bg-[#111625] border border-white/10"}`}>
              {p.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0b0f1a] text-[#c9a84c] text-xs font-bold uppercase tracking-widest px-4 py-1 rounded-full border border-[#c9a84c]/30">
                  Популярный
                </div>
              )}
              <div className="mb-6">
                <div className={`text-xs font-semibold uppercase tracking-widest mb-2 ${p.highlight ? "text-[#0b0f1a]/60" : "text-white/40"}`}>{p.desc}</div>
                <div className={`font-semibold text-lg ${p.highlight ? "text-[#0b0f1a]" : "text-white"}`}>{p.name}</div>
              </div>
              <div className="mb-8">
                <span className={`font-cormorant text-5xl font-semibold ${p.highlight ? "text-[#0b0f1a]" : "text-white"}`}>{p.price}</span>
                {p.period && <span className={`text-sm ml-1 ${p.highlight ? "text-[#0b0f1a]/60" : "text-white/40"}`}>{p.period}</span>}
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {p.features.map((f, fi) => (
                  <li key={fi} className={`flex items-center gap-2 text-sm ${p.highlight ? "text-[#0b0f1a]" : "text-white/70"}`}>
                    <Icon name="Check" size={14} className={p.highlight ? "text-[#0b0f1a]" : "text-[#c9a84c]"} />
                    {f}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => scrollTo("contacts")}
                className={`w-full py-3 rounded-lg font-semibold text-sm transition-all duration-200 ${p.highlight ? "bg-[#0b0f1a] text-white hover:bg-[#1a2235]" : "border border-white/20 text-white hover:border-[#c9a84c]/50 hover:bg-[#c9a84c]/5"}`}
              >
                {p.name === "Энтерпрайз" ? "Обсудить условия" : "Начать бесплатно"}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-24 bg-[#111625] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <div className="text-[#c9a84c] text-xs font-semibold uppercase tracking-widest mb-4">Контакты</div>
              <h2 className="font-cormorant text-4xl lg:text-5xl font-semibold mb-6">
                Готовы обсудить<br />ваш проект?
              </h2>
              <p className="text-white/50 mb-10 leading-relaxed">
                Оставьте заявку — наш менеджер свяжется в течение одного рабочего часа, проведёт демонстрацию и подготовит персональное коммерческое предложение.
              </p>

              <div className="space-y-5">
                {[
                  ["MapPin", "Адрес", "123056, Москва, ул. 2-я Брестская, д. 8, стр. 1"],
                  ["Phone", "Телефон", "+7 (495) 123-45-67"],
                  ["Mail", "Email", "b2b@corpusplatform.ru"],
                  ["Clock", "Режим работы", "Пн–Пт, 9:00–19:00 МСК"],
                ].map(([icon, label, value], i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center">
                      <Icon name={icon as string} size={16} className="text-[#c9a84c]" />
                    </div>
                    <div>
                      <div className="text-white/40 text-xs uppercase tracking-wider mb-0.5">{label}</div>
                      <div className="text-white text-sm">{value as string}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 pt-8 border-t border-white/5">
                <div className="text-white/30 text-xs uppercase tracking-widest mb-3">Реквизиты</div>
                <div className="text-white/50 text-sm space-y-1">
                  <div>ООО «Корпус Технологии»</div>
                  <div>ИНН 7701234567 / КПП 770101001</div>
                  <div>ОГРН 1187746000001</div>
                  <div>р/с 40702810000000000001</div>
                  <div>АО «Альфа-Банк», БИК 044525593</div>
                </div>
              </div>
            </div>

            <div className="border border-white/10 rounded-2xl p-8 bg-[#0b0f1a]">
              <div className="font-semibold text-white text-lg mb-6">Оставить заявку</div>
              <div className="space-y-4">
                {[
                  ["text", "Ваше имя", "Иван Петров"],
                  ["text", "Компания", "ООО Пример"],
                  ["email", "Email", "ivan@company.ru"],
                  ["tel", "Телефон", "+7 (___) ___-__-__"],
                ].map(([type, label, placeholder], i) => (
                  <div key={i}>
                    <label className="block text-white/40 text-xs uppercase tracking-wider mb-2">{label}</label>
                    <input
                      type={type as string}
                      placeholder={placeholder as string}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-[#c9a84c]/40 transition-colors duration-200"
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-white/40 text-xs uppercase tracking-wider mb-2">Комментарий</label>
                  <textarea
                    rows={3}
                    placeholder="Расскажите о вашем проекте..."
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-[#c9a84c]/40 transition-colors duration-200 resize-none"
                  />
                </div>
                <button className="w-full bg-[#c9a84c] text-[#0b0f1a] font-semibold py-4 rounded-lg hover:bg-[#e0bf6a] transition-colors duration-200 mt-2">
                  Отправить заявку
                </button>
                <p className="text-white/30 text-xs text-center">
                  Нажимая кнопку, вы соглашаетесь с обработкой персональных данных согласно 152-ФЗ
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0b0f1a] border-t border-white/5 py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-[#c9a84c] rounded-sm flex items-center justify-center">
              <Icon name="Hexagon" size={12} className="text-[#0b0f1a]" />
            </div>
            <span className="font-semibold text-sm tracking-tight">КОРПУС</span>
          </div>
          <div className="text-white/30 text-xs">
            © 2024 ООО «Корпус Технологии». Все права защищены.
          </div>
          <div className="flex items-center gap-1 text-white/30 text-xs">
            <Icon name="ShieldCheck" size={12} className="text-[#c9a84c]" />
            Данные хранятся в РФ
          </div>
        </div>
      </footer>

    </div>
  );
}
