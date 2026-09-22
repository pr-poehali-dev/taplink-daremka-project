import Icon from "@/components/ui/icon";

const results = [
  { icon: "Heart", title: "В отношениях", desc: "Вернёте близость, перестанете наступать на одни и те же грабли и научитесь говорить «нет» без чувства вины." },
  { icon: "BatteryCharging", title: "В себе", desc: "Избавитесь от выгорания и тревоги, начнёте опираться на факты, а не на страхи и чужие ожидания." },
  { icon: "TrendingUp", title: "В карьере и бизнесе", desc: "Найдёте своё дело, пробьёте финансовый потолок и получите чёткую стратегию вместо хаотичных попыток." },
];

const plans = [
  {
    name: "Индивидуальная сессия",
    price: "7 500",
    period: "₽ / сессия",
    desc: "Личная встреча",
    features: ["Психология, коучинг ICF и бизнес-консультирование в одном формате", "Индивидуальный подбор методов под ваш запрос", "МАК-карты и авторские методики", "Конфиденциально"],
    highlight: true,
    cta: "Записаться",
    preset: "Хочу записаться на индивидуальную сессию",
  },
  {
    name: "Работа с компаниями",
    price: "По запросу",
    period: "",
    desc: "Для бизнеса",
    features: ["Диагностика бизнес-структуры и команды", "Системное консультирование и коучинг руководителей", "Формат и объём — под задачу компании", "Индивидуальный расчёт стоимости"],
    highlight: false,
    cta: "Обсудить задачу",
    preset: "Интересует работа с компанией",
  },
  {
    name: "Клуб «Калибр»",
    price: "от 7 000",
    period: "₽ / мес",
    desc: "3-месячный трансформационный клуб",
    features: ["Для руководителей и предпринимателей", "12 недель: еженедельные созвоны + практика", "6 рабочих артефактов на выходе", "3 тарифа — от наблюдателя до VIP"],
    highlight: false,
    cta: "Узнать о клубе",
    preset: "Интересует клуб «Калибр»",
  },
];

interface ApproachesMethodSectionProps {
  onScrollToContacts: (preset?: string) => void;
}

export default function ApproachesMethodSection({ onScrollToContacts }: ApproachesMethodSectionProps) {
  return (
    <>
      {/* RESULTS */}
      <section id="results" className="py-24 bg-[#f5ede6]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16 text-center">
            <div className="text-[#b07d62] text-xs font-medium uppercase tracking-widest mb-4">Что по итогу</div>
            <h2 className="font-cormorant text-4xl lg:text-5xl font-light text-[#2c2420]">Что изменится после работы со мной</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {results.map((r, i) => (
              <div key={i} className="bg-[#faf7f4] rounded-2xl p-8 hover:shadow-md hover:shadow-[#b07d62]/10 transition-all duration-300 border border-transparent hover:border-[#e8ddd5]">
                <div className="w-12 h-12 rounded-full bg-[#f0e6de] flex items-center justify-center mb-5">
                  <Icon name={r.icon} size={20} className="text-[#b07d62]" />
                </div>
                <h3 className="font-medium text-[#2c2420] mb-3 text-lg leading-snug">{r.title}</h3>
                <p className="text-[#9c7b6e] text-sm leading-relaxed font-light">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-24 max-w-6xl mx-auto px-6">
        <div className="mb-16 text-center">
          <div className="text-[#b07d62] text-xs font-medium uppercase tracking-widest mb-4">Стоимость</div>
          <h2 className="font-cormorant text-4xl lg:text-5xl font-light text-[#2c2420]">Прозрачные условия</h2>
          <p className="text-[#9c7b6e] mt-4 font-light max-w-lg mx-auto">Никаких скрытых платежей и обязательных пакетов.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
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
                onClick={() => onScrollToContacts(p.preset)}
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
