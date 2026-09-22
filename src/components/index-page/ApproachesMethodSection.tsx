import Icon from "@/components/ui/icon";
import { scrollTo } from "./constants";

const approaches = [
  { icon: "Brain", title: "МАК-терапия", desc: "Один из инструментов в работе: метафорические ассоциативные карты помогают образно исследовать внутренний мир, страхи и скрытые ресурсы." },
  { icon: "TrendingUp", title: "Коучинг ICF и личностный рост", desc: "Профессиональный коучинг по стандартам ICF: раскрываю потенциал, помогаю найти ресурсы и достичь целей в жизни и карьере." },
  { icon: "Briefcase", title: "Системное бизнес-консультирование", desc: "Корпоративные и групповые программы для развития команд, лидерства и управленческих компетенций." },
  { icon: "Compass", title: "Психологическое консультирование", desc: "Работа с тревогой, самооценкой, кризисами идентичности и жизненными переходами." },
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
    name: "Индивидуальная сессия",
    price: "6 500",
    period: "₽ / сессия",
    desc: "Пакет 10 сессий — 60 000 ₽",
    features: ["Психология, коучинг ICF и бизнес-консультирование в одном формате", "Индивидуальный подбор методов под ваш запрос", "МАК-карты и авторские методики", "Конфиденциально"],
    highlight: true,
    cta: "Записаться",
  },
];

interface ApproachesMethodSectionProps {
  onScrollToContacts: (preset?: string) => void;
}

export default function ApproachesMethodSection({ onScrollToContacts }: ApproachesMethodSectionProps) {
  return (
    <>
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
          <div className="rounded-3xl p-12 text-center relative overflow-hidden mb-16" style={{background: "linear-gradient(135deg, #f5ede6 0%, #faf7f4 50%, #f0e6de 100%)"}}>
            <div className="absolute inset-0 pointer-events-none" style={{background: "radial-gradient(ellipse at 70% 20%, rgba(176,125,98,0.10) 0%, transparent 60%), radial-gradient(ellipse at 20% 80%, rgba(176,125,98,0.07) 0%, transparent 50%)"}} />
            <div className="relative">
              <p className="font-cormorant text-4xl lg:text-5xl font-light text-[#2c2420] leading-tight mb-6" style={{fontStyle: "italic", letterSpacing: "-0.01em"}}>
                Я помогу вам нарисовать<br />это дерево<br />
                <span className="text-[#b07d62]">и прочитать его карту</span>
              </p>
              <p className="text-[#9c7b6e] text-base font-light max-w-lg mx-auto leading-relaxed">
                Вы перестанете бороться с симптомами и начнёте работать с причинами. Хотите узнать, как выглядит ваше дерево?
              </p>
            </div>
          </div>

          {/* Анкеты */}
          <div className="mb-16">
            <div className="text-[#c4a99a]/60 text-xs uppercase tracking-widest text-center mb-8">Инструменты методики</div>
            <div className="grid md:grid-cols-3 gap-5">
              {[
                {
                  icon: "User",
                  tag: "Самоанализ",
                  title: "Архитектура личности",
                  for: "Для тех, кто хочет лучше понять себя",
                  desc: "Помогает проанализировать свои ценности (Корни), характер (Ствол) и внешнее поведение (Крона).",
                  goal: "Найти источник личных проблем и определить зоны роста",
                  preset: "Интересует анкета «Архитектура личности» (Самоанализ)",
                },
                {
                  icon: "Heart",
                  tag: "Поиск пары",
                  title: "Портрет потенциального партнёра",
                  for: "Для тех, кто ищет серьёзные отношения",
                  desc: "Описать идеального партнёра через его фундаментальные ценности, характер и повседневные привычки по модели дерева.",
                  goal: "Перейти от поверхностных требований к глубокому пониманию совместимости",
                  preset: "Интересует анкета «Портрет потенциального партнёра» (Поиск пары)",
                },
                {
                  icon: "Briefcase",
                  tag: "Корпоративное дерево",
                  title: "Диагностика бизнес-структуры",
                  for: "Для руководителей, владельцев бизнеса и HR",
                  desc: "Анализирует миссию и культуру (Корни), управленческую структуру и финансы (Ствол), продукты и маркетинг (Крона).",
                  goal: "Выявить скрытые конфликты в бизнесе и найти точки роста",
                  preset: "Интересует анкета «Диагностика бизнес-структуры» (Корпоративное дерево)",
                },
              ].map((item, i) => (
                <div key={i} className="bg-[#3d302b] rounded-2xl p-6 border border-[#5a3f35] hover:border-[#b07d62]/40 transition-colors duration-300 flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#b07d62]/20 flex items-center justify-center flex-shrink-0">
                      <Icon name={item.icon} size={18} className="text-[#b07d62]" />
                    </div>
                    <span className="text-[#b07d62] text-xs font-medium uppercase tracking-widest">{item.tag}</span>
                  </div>
                  <div>
                    <h3 className="font-cormorant text-xl font-light text-[#faf7f4] mb-1 leading-snug">{item.title}</h3>
                    <p className="text-[#c4a99a]/60 text-xs font-light">{item.for}</p>
                  </div>
                  <p className="text-[#c4a99a] text-sm font-light leading-relaxed flex-1">{item.desc}</p>
                  <div className="border-t border-[#5a3f35] pt-4 flex items-start gap-2">
                    <Icon name="Target" size={14} className="text-[#b07d62] flex-shrink-0 mt-0.5" />
                    <p className="text-[#c4a99a]/80 text-xs font-light leading-relaxed">{item.goal}</p>
                  </div>
                  <button
                    onClick={() => onScrollToContacts(item.preset)}
                    className="w-full mt-1 border border-[#b07d62]/50 text-[#b07d62] text-sm font-medium py-2.5 rounded-full hover:bg-[#b07d62] hover:text-[#faf7f4] transition-all duration-200"
                  >
                    Записаться
                  </button>
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
              <div className="font-cormorant text-6xl font-light text-[#d4b8ac] group-hover:text-[#b07d62] transition-colors duration-200 mb-4 leading-none">{s.num}</div>
              <h3 className="font-semibold text-[#2c2420] mb-3 text-lg">{s.title}</h3>
              <p className="text-[#7a5f54] text-base leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-24 max-w-6xl mx-auto px-6">
        <div className="mb-16 text-center">
          <div className="text-[#b07d62] text-xs font-medium uppercase tracking-widest mb-4">Стоимость</div>
          <h2 className="font-cormorant text-4xl lg:text-5xl font-light text-[#2c2420]">Прозрачные условия</h2>
          <p className="text-[#9c7b6e] mt-4 font-light max-w-lg mx-auto">Никаких скрытых платежей и обязательных пакетов.</p>
          <div className="mt-5 inline-flex items-center gap-2 bg-[#b07d62]/10 text-[#9c6b51] text-sm font-medium px-4 py-2 rounded-full">
            <Icon name="Sparkles" size={16} />
            Первая индивидуальная сессия — всегда со скидкой 20%
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
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
                    {f === "Конфиденциально" ? (
                      <a href="/privacy" className="underline underline-offset-2 hover:opacity-70 transition-opacity">{f}</a>
                    ) : f}
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
    </>
  );
}