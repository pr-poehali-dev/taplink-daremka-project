import { useState, useRef } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/01f169e7-c520-4152-96e2-336496512915/files/17cfd4d4-3b71-432c-9c2e-565eed3530ca.jpg";

const approaches = [
  { icon: "Brain", title: "МАК-терапия", desc: "Один из инструментов в работе: метафорические ассоциативные карты помогают образно исследовать внутренний мир, страхи и скрытые ресурсы." },
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
    price: "2 500",
    period: "₽ / чел.",
    desc: "Пакет 5 сессий — 8 500 ₽",
    features: ["Работа в группе", "МАК и коучинговые техники", "Поддержка участников", "Онлайн или очно"],
    highlight: false,
    cta: "Записаться в группу",
  },
  {
    name: "Индивидуальный коучинг",
    price: "5 500",
    period: "₽ / сессия",
    desc: "Пакет 10 сессий — 50 000 ₽",
    features: ["Коучинг ICF + авторские методики", "Личностный и карьерный рост", "Чёткие цели и стратегия", "Приоритетная запись"],
    highlight: true,
    cta: "Начать коучинг",
  },
  {
    name: "Психологическая сессия",
    price: "4 000",
    period: "₽ / сессия",
    desc: "Пакет 10 сессий — 35 000 ₽",
    features: ["Психологическое консультирование", "Индивидуальный подбор методов", "Глубинная проработка", "Конфиденциально"],
    highlight: false,
    cta: "Записаться",
  },
];

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const ethicsChapters = [
  {
    title: "Преамбула",
    content: `Этический кодекс психолога Российского психологического общества составлен в соответствии с Конституцией Российской Федерации, Федеральным законом РФ № 152-ФЗ «О персональных данных», Уставом РПО, Всеобщей декларацией прав человека, Хельсинкской декларацией ВМА и международной Универсальной декларацией этических принципов для психологов.

Консультативным и регулирующим органом РПО по вопросам профессиональной этики является Этический комитет РПО.

Термин «Психолог» относится к лицу, имеющему высшее психологическое образование. Термин «Клиент» — к лицу, группе лиц или организации, которые согласились быть объектом психологических исследований или обратились за психологической помощью.

Действие кодекса распространяется на все виды деятельности психологов, включая дистанционные форматы и работу через интернет.`,
  },
  {
    title: "I. Этические принципы психолога",
    content: `Этика работы психолога основывается на общечеловеческих моральных ценностях. Этические принципы формулируют условия, при которых сохраняются профессионализм, гуманность действий и уважение людей, с которыми работает психолог.

**1. Принцип уважения**
Психолог исходит из уважения личного достоинства, прав и свобод человека. С равным уважением относится к людям вне зависимости от возраста, пола, сексуальной ориентации, национальности, вероисповедания, социально-экономического статуса и других оснований.

Конфиденциальность: информация, полученная в процессе работы с клиентом, не подлежит намеренному или случайному разглашению вне согласованных условий. Клиент имеет право на консультацию без присутствия третьих лиц.

Осведомлённость и добровольное согласие: клиент должен быть извещён о цели работы, методах и способах использования информации. Работа допускается только после информированного согласия.

**2. Принцип компетентности**
Психолог должен обеспечивать и поддерживать высокий уровень компетентности, признавать границы своего опыта и предоставлять только те услуги, которым обучался. Психолог обязан постоянно повышать уровень профессиональной компетентности.

**3. Принцип ответственности**
Психолог несёт профессиональные и научные обязательства перед клиентами, профессиональным сообществом и обществом в целом. Должен стремиться избегать причинения вреда и гарантировать, что его услуги не являются злоупотреблением.

**4. Принцип честности**
Психолог должен содействовать открытости науки и практики, быть честным и справедливым. Психологу запрещается преувеличивать эффективность своих услуг, делать заявлений о превосходстве своих методик или давать гарантии результативности. Психолог не должен использовать профессиональные отношения в личных, религиозных, политических или идеологических интересах и не должен вступать в личные отношения со своими клиентами.`,
  },
  {
    title: "II. Нарушение Этического кодекса",
    content: `Нарушение Этического кодекса включает игнорирование его положений, неверное толкование или намеренное нарушение.

Жалоба на нарушение может быть подана в Этический комитет Российского психологического общества в письменном виде любым физическим или юридическим лицом.

В качестве санкций могут выступать: предупреждение от имени РПО (общественное порицание), приостановление членства в РПО с широким информированием общественности. В случае серьёзных нарушений РПО может ходатайствовать о привлечении психолога к суду.

Настоящий Этический кодекс принят 14 февраля 2012 года V съездом Российского психологического общества.`,
  },
];

export default function Index() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [openEthics, setOpenEthics] = useState<number | null>(null);
  const [showEthics, setShowEthics] = useState(false);
  const ethicsRef = useRef<HTMLDivElement>(null);

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
            {[["approaches", "Подходы"], ["method", "Методика"], ["pricing", "Стоимость"], ["reviews", "Отзывы"], ["contacts", "Контакты"]].map(([id, label]) => (
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
        <div className="relative max-w-6xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center w-full">
          {/* Text */}
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
              Психолог-консультант, сексолог, коуч ICF и бизнес-тренер. Помогаю людям расти и меняться, используя широкий арсенал методов — от МАК-терапии до авторских методик.
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
          {/* Photo */}
          <div className="hidden lg:flex justify-end items-end h-full">
            <div className="relative">
              <div className="absolute -bottom-4 -left-4 w-full h-full rounded-[2.5rem] bg-[#f0e6de]" />
              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-[#b07d62]/10" />
              <img
                src="https://cdn.poehali.dev/projects/01f169e7-c520-4152-96e2-336496512915/bucket/1b0c4769-73cb-4344-8c7b-732d028fb491.jpg"
                alt="Дарья Емикеева"
                className="relative rounded-[2.5rem] w-[520px] h-[680px] object-cover object-top shadow-xl"
              />
              <div className="absolute bottom-8 -left-8 bg-[#faf7f4] rounded-2xl px-6 py-4 shadow-lg border border-[#e8ddd5]">
                <div className="font-cormorant text-2xl font-semibold text-[#2c2420]">Дарья Емикеева</div>
                <div className="text-sm text-[#9c7b6e] mt-1">психолог · сексолог · коуч ICF</div>
              </div>
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
          {/* Intro */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-cormorant text-4xl lg:text-5xl font-light text-[#faf7f4] mb-6 leading-tight">
              Что, если ваша жизнь —<br />
              <em className="text-[#b07d62] not-italic font-semibold">это дерево?</em>
            </h2>
            <p className="text-[#c4a99a] leading-relaxed font-light mb-4">
              Представьте: у вас есть <strong className="text-[#faf7f4] font-normal">корни</strong> (ценности и убеждения), <strong className="text-[#faf7f4] font-normal">ствол</strong> (характер и стержень) и <strong className="text-[#faf7f4] font-normal">крона</strong> (поведение и то, как вы проявляете себя в мире).
            </p>
            <p className="text-[#c4a99a] leading-relaxed font-light">
              Когда все части в гармонии — дерево растёт сильным. Но что, если корни не питают ствол? Или крона растёт в другую сторону? Любой дисбаланс — это сигнал.
            </p>
          </div>

          {/* Tree cards */}
          <div className="grid md:grid-cols-3 gap-5 mb-16">
            {[
              { icon: "Sprout", num: "01", title: "Корни — ваши ценности", desc: "Семья, воспитание, убеждения. Формируют глубинные представления о мире и о себе. Именно здесь — фундамент всей личности." },
              { icon: "TreePine", num: "02", title: "Ствол — ваш характер", desc: "Темперамент, мотивация, эмоции. Кажется неизменным, но адаптируется под влиянием опыта и жизненных обстоятельств." },
              { icon: "Leaf", num: "03", title: "Крона — ваше поведение", desc: "Мысли, чувства, поступки в повседневной жизни. Наиболее изменчива, но её потенциал задают корни и ствол." },
            ].map((el, i) => (
              <div key={i} className="bg-[#3d302b] rounded-2xl p-6 border border-[#5a3f35] hover:border-[#b07d62]/40 transition-colors duration-300 text-center">
                <div className="w-12 h-12 rounded-full bg-[#b07d62]/20 flex items-center justify-center mx-auto mb-4">
                  <Icon name={el.icon} size={20} className="text-[#b07d62]" />
                </div>
                <div className="text-[#b07d62]/50 text-xs font-medium mb-2">{el.num}</div>
                <h3 className="font-medium text-[#faf7f4] text-sm mb-3">{el.title}</h3>
                <p className="text-[#c4a99a] text-sm font-light leading-relaxed">{el.desc}</p>
              </div>
            ))}
          </div>

          {/* Areas */}
          <div className="mb-16">
            <div className="text-[#c4a99a]/60 text-xs uppercase tracking-widest text-center mb-8">Где методика меняет взгляд на ситуацию</div>
            <div className="grid md:grid-cols-2 gap-5">
              {[
                { icon: "Heart", title: "Личная жизнь", desc: "Понять, почему вы выбираете «не тех» или наступаете на одни и те же грабли. Конфликт между ценностями (корни) и поведением (крона) — часто главная причина неудач в отношениях." },
                { icon: "Briefcase", title: "Карьера и бизнес", desc: "Найти ответ: «Почему я выгорел?» или «Почему бизнес не растёт?» Амбиции (крона) без нужных навыков (ствол) и расхождение с ценностями (корни) — типичная причина." },
                { icon: "Users", title: "Отношения в паре", desc: "Нарисовать деревья — своё и партнёра — и наглядно увидеть точки соприкосновения и причины конфликтов. Часто мы боремся с «ветками», когда проблема в «корнях»." },
                { icon: "Star", title: "Саморазвитие", desc: "Увидеть личность как целостную систему. Понять, какие качества — фундамент, а какие — надстройка. Перестать бороться с симптомами и начать работать с причинами." },
              ].map((area, i) => (
                <div key={i} className="bg-[#3d302b] rounded-2xl p-6 border border-[#5a3f35] hover:border-[#b07d62]/40 transition-colors duration-300 flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#b07d62]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name={area.icon} size={18} className="text-[#b07d62]" />
                  </div>
                  <div>
                    <h3 className="font-medium text-[#faf7f4] text-sm mb-2">{area.title}</h3>
                    <p className="text-[#c4a99a] text-sm font-light leading-relaxed">{area.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-[#faf7f4] border border-[#e8ddd5] rounded-2xl p-10 text-center">
            <p className="font-cormorant text-2xl lg:text-3xl font-light text-[#2c2420] mb-4 leading-snug">
              Я помогу вам нарисовать это дерево<br />и прочитать его карту
            </p>
            <p className="text-[#9c7b6e] text-sm font-light mb-8 max-w-lg mx-auto leading-relaxed">
              Вы перестанете бороться с симптомами и начнёте работать с причинами. Хотите узнать, как выглядит ваше дерево?
            </p>
            <button onClick={() => scrollTo("contacts")} className="bg-[#b07d62] text-[#faf7f4] font-medium px-10 py-4 rounded-full hover:bg-[#9c6b51] transition-all duration-200 inline-flex items-center gap-2">
              <Icon name="TreePine" size={16} />
              Записаться на консультацию по методике
            </button>
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
              <div className="font-cormorant text-6xl font-light text-[#d4b8ac] group-hover:text-[#b07d62] transition-colors duration-200 mb-4 leading-none">{s.num}</div>
              <h3 className="font-semibold text-[#2c2420] mb-3 text-base">{s.title}</h3>
              <p className="text-[#7a5f54] text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-24 bg-[#2c2420] text-[#faf7f4]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1.2fr_1fr_1fr] gap-12 items-center">
            {/* Room photo */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative w-80 lg:w-full max-w-sm">
                <div className="absolute inset-0 rounded-3xl bg-[#b07d62]/10 translate-x-3 translate-y-3" />
                <img
                  src="https://cdn.poehali.dev/projects/01f169e7-c520-4152-96e2-336496512915/bucket/abf4aa60-0b3b-41b8-bf07-4684fa25d168.jpg"
                  alt="Дарья Емикеева"
                  className="relative rounded-3xl w-full object-cover object-top"
                  style={{ background: "#faf7f4" }}
                />
              </div>
            </div>
            {/* Text */}
            <div>
              <div className="text-[#b07d62] text-xs font-medium uppercase tracking-widest mb-4">Об авторе</div>
              <h2 className="font-cormorant text-5xl lg:text-6xl font-light mb-6">Дарья Емикеева</h2>
              <p className="text-[#c4a99a] leading-relaxed mb-8 font-light text-base">
                Психолог-консультант, сексолог, коуч ICF и бизнес-тренер. Помогаю людям раскрыть потенциал и преодолеть внутренние барьеры — через индивидуальный подбор методов: МАК-терапию, коучинг, авторские методики и другие инструменты.
              </p>
              <div className="space-y-4">
                {[
                  ["GraduationCap", "Профессиональное психологическое образование"],
                  ["Award", "Сертификация ICF — международный стандарт коучинга"],
                  ["Layers", "Специализация: МАК-терапия и бизнес-тренинги"],
                  ["Users", "Работаю индивидуально и в группах"],
                ].map(([icon, text], i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Icon name={icon as string} size={17} className="text-[#b07d62] flex-shrink-0" />
                    <span className="text-[#c4a99a] text-base font-light">{text}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Tags */}
            <div>
              <div className="text-[#c4a99a]/60 text-xs uppercase tracking-widest mb-6">С чем работаю</div>
              <div className="flex flex-wrap gap-2">
                {["Личностный рост", "Карьерные цели", "Самооценка", "Выгорание", "Прокрастинация", "Страх перемен", "Внутренние блоки", "Лидерство", "Отношения", "Поиск смысла", "Управление стрессом", "Развитие потенциала", "Профессиональный рост"].map((tag, i) => (
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

      {/* REVIEWS */}
      <section id="reviews" className="py-24 bg-[#f5ede6]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="text-[#b07d62] text-xs font-medium uppercase tracking-widest mb-4">Отзывы</div>
            <h2 className="font-cormorant text-5xl lg:text-6xl font-light text-[#2c2420]">Что говорят клиенты</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { name: "Виктор Д.", role: "Менеджер по продажам", text: "Дарья помогла мне раскрыть внутренний потенциал и улучшить личные отношения. Рекомендую!" },
              { name: "Алиса С.", role: "SMM-менеджер", text: "Коучинг и мак-терапия с вами — настоящее открытие. Ваш профессионализм, чуткость и умение направить помогли обрести уверенность и внутренний баланс. Спасибо за вдохновляющую поддержку и ценные инструменты для личного развития! Рекомендую всем, кто стремится к гармонии и росту." },
              { name: "Игорь Н.", role: "Ведущий", text: "Прошёл курс тренингов, чувствую уверенность и гармонию. Благодарен за поддержку!" },
              { name: "Альберт Г.", role: "Предприниматель", text: "Отличный коуч с профессиональным подходом. Работа с картами помогла многое понять." },
            ].map((r, i) => (
              <div key={i} className="bg-[#faf7f4] rounded-2xl p-8 border border-[#e8ddd5] flex flex-col gap-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, s) => (
                    <Icon key={s} name="Star" size={14} className="text-[#b07d62] fill-[#b07d62]" />
                  ))}
                </div>
                <p className="text-[#5c4a42] leading-relaxed font-light text-base">«{r.text}»</p>
                <div className="mt-auto pt-2 border-t border-[#e8ddd5]">
                  <div className="text-[#2c2420] font-medium text-sm">{r.name}</div>
                  <div className="text-[#9c7b6e] text-xs">{r.role}</div>
                </div>
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
            <h2 className="font-cormorant text-5xl lg:text-6xl font-light text-[#2c2420] mb-6">Начнём разговор?</h2>
            <p className="text-[#9c7b6e] leading-relaxed mb-10 font-light text-base">
              Напишите мне — расскажите о своём запросе, и я предложу подходящий формат работы. Отвечаю в течение нескольких часов.
            </p>
            <div className="space-y-5 mb-10">
              {[
                ["Phone", "+7 (918) 537-93-05", "Телефон · WhatsApp", "tel:+79185379305"],
                ["Mail", "daremka-5@mail.ru", "Email", "https://e.mail.ru/inbox/?back=1"],
                ["MapPin", "Москва, очно по договорённости", "Очные встречи", null],
                ["Video", "Яндекс Телемост", "Онлайн-сессии", null],
              ].map(([icon, val, label, href], i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#f0e6de] flex items-center justify-center flex-shrink-0">
                    <Icon name={icon as string} size={18} className="text-[#b07d62]" />
                  </div>
                  <div>
                    {href ? (
                      <a href={href as string} target="_blank" rel="noopener noreferrer" className="text-[#2c2420] text-base font-medium hover:text-[#b07d62] transition-colors duration-200">{val}</a>
                    ) : (
                      <div className="text-[#2c2420] text-base font-medium">{val}</div>
                    )}
                    <div className="text-[#9c7b6e] text-sm">{label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-[#f5ede6] rounded-2xl p-8 border border-[#e8ddd5]">
            <div className="font-cormorant text-3xl font-light text-[#2c2420] mb-6">Оставить заявку</div>
            <div className="space-y-4">
              {[
                ["text", "Ваше имя", "Как вас зовут?"],
                ["tel", "Телефон / Telegram", "+7 или @username"],
                ["email", "Email", "your@email.com"],
              ].map(([type, label, placeholder], i) => (
                <div key={i}>
                  <label className="block text-[#9c7b6e] text-sm font-medium mb-2">{label}</label>
                  <input
                    type={type as string}
                    placeholder={placeholder as string}
                    className="w-full bg-[#faf7f4] border border-[#e8ddd5] rounded-xl px-4 py-3 text-[#2c2420] text-base placeholder-[#c4a99a] focus:outline-none focus:border-[#b07d62] transition-colors duration-200"
                  />
                </div>
              ))}
              <div>
                <label className="block text-[#9c7b6e] text-sm font-medium mb-2">С чем хотите поработать?</label>
                <textarea
                  rows={3}
                  placeholder="Необязательно, но поможет подготовиться к встрече..."
                  className="w-full bg-[#faf7f4] border border-[#e8ddd5] rounded-xl px-4 py-3 text-[#2c2420] text-base placeholder-[#c4a99a] focus:outline-none focus:border-[#b07d62] transition-colors duration-200 resize-none"
                />
              </div>
              <button className="w-full bg-[#b07d62] text-[#faf7f4] font-medium py-4 rounded-full hover:bg-[#9c6b51] transition-colors duration-200 mt-2 text-base">
                Записаться на сессию
              </button>
              <p className="text-[#9c7b6e] text-sm text-center font-light">
                Конфиденциальность гарантирована. Данные не передаются третьим лицам.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ETHICS */}
      <div ref={ethicsRef} className={`bg-[#f5ede6] transition-all duration-500 overflow-hidden ${showEthics ? "max-h-[9999px] py-16" : "max-h-0"}`}>
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center justify-between mb-10">
            <div>
              <div className="text-[#b07d62] text-xs font-medium uppercase tracking-widest mb-2">Документ</div>
              <h2 className="font-cormorant text-3xl font-light text-[#2c2420]">Этический кодекс психолога</h2>
              <p className="text-[#9c7b6e] text-sm mt-1 font-light">Российское психологическое общество · 14 февраля 2012 года</p>
            </div>
            <button onClick={() => setShowEthics(false)} className="w-9 h-9 rounded-full bg-[#e8ddd5] flex items-center justify-center hover:bg-[#d4b8ac] transition-colors">
              <Icon name="X" size={16} className="text-[#7a5f54]" />
            </button>
          </div>
          <div className="space-y-4">
            {ethicsChapters.map((ch, i) => (
              <div key={i} className="bg-[#faf7f4] rounded-2xl overflow-hidden border border-[#e8ddd5]">
                <button onClick={() => setOpenEthics(openEthics === i ? null : i)} className="w-full flex items-center justify-between px-6 py-5 text-left">
                  <span className="font-medium text-[#2c2420] text-sm">{ch.title}</span>
                  <Icon name={openEthics === i ? "ChevronUp" : "ChevronDown"} size={16} className="text-[#b07d62] flex-shrink-0" />
                </button>
                {openEthics === i && (
                  <div className="px-6 pb-6">
                    {ch.content.split("\n\n").map((para, j) => (
                      <p key={j} className={`text-[#7a5f54] text-sm leading-relaxed font-light mb-3 ${para.startsWith("**") ? "font-medium text-[#2c2420]" : ""}`}>
                        {para.replace(/\*\*/g, "")}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

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
          <button
            onClick={() => {
              setShowEthics(true);
              setTimeout(() => ethicsRef.current?.scrollIntoView({ behavior: "smooth" }), 50);
            }}
            className="flex items-center gap-1 text-[#c4a99a]/60 text-xs font-light hover:text-[#b07d62] transition-colors duration-200"
          >
            <Icon name="Shield" size={12} className="text-[#b07d62]" />
            Этический кодекс психолога
          </button>
        </div>
      </footer>

    </div>
  );
}