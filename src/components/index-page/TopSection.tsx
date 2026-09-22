import { useState } from "react";
import Icon from "@/components/ui/icon";
import { scrollTo } from "./constants";

export default function TopSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#faf7f4]/95 backdrop-blur-sm border-b border-[#e8ddd5]">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#b07d62] flex items-center justify-center">
              <Icon name="Sprout" size={15} className="text-[#faf7f4]" />
            </div>
            <div>
              <span className="font-cormorant text-lg font-semibold text-[#2c2420] tracking-wide">Альвинцева Дарья</span>
              <span className="hidden sm:inline text-xs text-[#9c7b6e] ml-2">провокативный психолог · сексолог · стратегический бизнес-коуч</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-7 text-sm text-[#7a5f54]">
            {[["approaches", "Подходы"], ["method", "Методика"], ["pricing", "Стоимость"], ["b2b", "Для бизнеса"], ["reviews", "Отзывы"], ["faq", "FAQ"], ["contacts", "Контакты"]].map(([id, label]) => (
              <button key={id} onClick={() => scrollTo(id)} className="hover:text-[#b07d62] transition-colors duration-200">
                {label}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <button onClick={() => scrollTo("contacts")} className="bg-[#b07d62] text-[#faf7f4] text-sm font-medium px-5 py-2.5 rounded-full hover:bg-[#9c6b51] transition-colors duration-200">
              Записаться
            </button>
            <button
              onClick={() => setMobileMenuOpen(o => !o)}
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-full border border-[#e8ddd5] text-[#7a5f54]"
            >
              <Icon name={mobileMenuOpen ? "X" : "Menu"} size={18} />
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#faf7f4] border-t border-[#e8ddd5] px-6 py-4 flex flex-col gap-1">
            {[["approaches", "Подходы"], ["method", "Методика"], ["pricing", "Стоимость"], ["b2b", "Для бизнеса"], ["reviews", "Отзывы"], ["faq", "FAQ"], ["contacts", "Контакты"]].map(([id, label]) => (
              <button
                key={id}
                onClick={() => { scrollTo(id); setMobileMenuOpen(false); }}
                className="text-left py-3 text-[#7a5f54] text-sm border-b border-[#f0e6de] last:border-0 hover:text-[#b07d62] transition-colors"
              >
                {label}
              </button>
            ))}
          </div>
        )}
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
              <span className="bg-[#c49880]/15 text-[#2c2420] px-5 py-3 rounded-3xl inline-block" style={{backdropFilter: "blur(2px)", boxShadow: "0 0 32px 12px rgba(196,152,128,0.13)"}}>Расти. Меняться.<br />Становиться<br />
              <em className="font-semibold not-italic text-7xl lg:text-8xl text-[#b07d62] uppercase tracking-wide">собой</em></span>
            </h1>
            <p className="text-[#7a5f54] text-lg leading-relaxed mb-6 max-w-md font-light">
              Провокативный психолог, сексолог, стратегический бизнес-коуч. Помогаю людям расти и меняться, используя широкий арсенал методов — от МАК-терапии до авторских методик.
            </p>
            <p className="text-[#2c2420] text-lg font-medium mb-4 max-w-md">
              Помогаю выйти из тупика в личной жизни и карьере
            </p>
            <ul className="space-y-2 mb-6 max-w-md">
              {[
                "Наладить отношения и вернуть близость",
                "Избавиться от выгорания и страхов",
                "Найти свое дело и пробить финансовый потолок",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-[#7a5f54] font-light">
                  <Icon name="Check" size={18} className="text-[#b07d62] mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-[#b07d62] font-cormorant text-2xl font-semibold mb-10">
              Бережно. Глубоко. До результата.
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
          <div className="flex justify-center lg:justify-end items-center h-full order-first lg:order-last">
            <div className="relative">
              <div className="absolute -bottom-4 -left-4 w-full h-full rounded-[2.5rem] bg-[#f0e6de]" />
              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-[#b07d62]/10" />
              <img
                src="https://cdn.poehali.dev/projects/01f169e7-c520-4152-96e2-336496512915/bucket/1b0c4769-73cb-4344-8c7b-732d028fb491.jpg"
                alt="Альвинцева Дарья"
                className="relative rounded-[2.5rem] w-[320px] h-[420px] lg:w-[520px] lg:h-[680px] object-cover object-top shadow-xl"
              />
              <div className="absolute bottom-8 -left-8 bg-[#faf7f4] rounded-2xl px-6 py-4 shadow-lg border border-[#e8ddd5]">
                <div className="font-cormorant text-2xl font-semibold text-[#2c2420]">Альвинцева Дарья</div>
                <div className="text-sm text-[#9c7b6e] mt-1">провокативный психолог · сексолог · бизнес-коуч</div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-12 left-6 w-32 h-32 rounded-full border border-[#d4b8ac]/40 pointer-events-none" />
        <div className="absolute bottom-8 left-10 w-20 h-20 rounded-full border border-[#d4b8ac]/20 pointer-events-none" />
      </section>

      {/* ABOUT */}
      <section className="py-24 bg-[#2c2420] text-[#faf7f4]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_1.2fr_1fr] gap-10 items-center">
            {/* Photo */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative w-72 lg:w-full max-w-xs">
                <div className="absolute -bottom-4 -left-4 w-full h-full rounded-xl bg-[#b07d62]/20" />
                <img
                  src="https://cdn.poehali.dev/projects/01f169e7-c520-4152-96e2-336496512915/bucket/91b23862-17a6-4e51-bf34-8778cbfc4cff.jpg"
                  alt="Альвинцева Дарья"
                  className="w-full object-cover object-top"
                  style={{ borderRadius: "12px", boxShadow: "0 25px 60px rgba(0,0,0,0.6), 0 0 40px rgba(0,0,0,0.4)", maskImage: "linear-gradient(to bottom, black 75%, transparent 100%), linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)", WebkitMaskImage: "linear-gradient(to bottom, black 75%, transparent 100%), linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)", maskComposite: "intersect", WebkitMaskComposite: "source-in" }}
                />
              </div>
            </div>
            {/* Text */}
            <div>
              <div className="text-[#b07d62] text-sm font-medium uppercase tracking-widest mb-4">Об авторе</div>
              <h2 className="font-cormorant text-5xl lg:text-6xl font-light mb-6">Альвинцева Дарья</h2>
              <p className="text-[#faf7f4] leading-relaxed mb-4 font-light text-lg">
                Помогаю взрослым и парам выйти из тупика в отношениях, состоянии и карьере. Компаниям — выстроить процессы, команду и управление.
              </p>
              <p className="text-[#c4a99a] leading-relaxed mb-4 font-light text-base">
                Провокативный психолог, сексолог, стратегический бизнес-коуч.
              </p>
              <p className="text-[#b07d62] font-cormorant text-2xl font-semibold mb-8">
                Бережно. Глубоко. До результата.
              </p>
              <div className="flex items-center gap-8 mb-8">
                {[["7 лет", "практики"], ["1000+", "часов консультаций"]].map(([val, label], i) => (
                  <div key={i}>
                    <div className="font-cormorant text-3xl font-semibold text-[#b07d62]">{val}</div>
                    <div className="text-xs text-[#9c7b6e] mt-0.5">{label}</div>
                  </div>
                ))}
              </div>
              <div className="space-y-4 mb-10">
                {[
                  ["GraduationCap", "Психологическое образование: МГППУ, МИП"],
                  ["Award", "Сертификация ICF — международный стандарт коучинга"],
                  ["Briefcase", "50+ тренингов и программ для компаний"],
                  ["Layers", "Специализация: МАК-терапия (мягкая работа с подсознанием через метафорические карты) и системное бизнес-консультирование"],
                ].map(([icon, text], i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Icon name={icon as string} size={17} className="text-[#b07d62] flex-shrink-0 mt-0.5" />
                    <span className="text-[#c4a99a] text-base font-light">{text}</span>
                  </div>
                ))}
              </div>
              <button onClick={() => scrollTo("contacts")} className="bg-[#b07d62] text-[#faf7f4] font-medium px-8 py-4 rounded-full hover:bg-[#9c6b51] transition-all duration-200">
                Познакомиться — диагностическая встреча
              </button>
              <p className="text-[#9c7b6e] text-sm font-light mt-3 max-w-sm">
                Бесплатная 20-минутная сессия-знакомство. Мы созвонимся, обсудим ваш запрос и поймём, сможем ли мы быть полезны друг другу. Без продаж и давления.
              </p>
            </div>
            {/* Tags */}
            <div>
              <div className="text-[#c4a99a]/60 text-sm uppercase tracking-widest mb-6">С чем работаю</div>
              <div className="space-y-5">
                {[
                  ["Личное", "самооценка • выгорание • страхи и блоки • стресс • смыслы"],
                  ["Пары", "отношения • близость • интимность"],
                  ["Карьера и бизнес", "цели • лидерство • рост"],
                ].map(([title, tags], i) => (
                  <div key={i}>
                    <div className="text-[#b07d62] text-sm font-medium mb-2">{title}</div>
                    <div className="text-[#c4a99a] text-base font-light leading-relaxed">{tags}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}