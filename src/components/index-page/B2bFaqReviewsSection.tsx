import { useState } from "react";
import Icon from "@/components/ui/icon";
import { SEND_APPLICATION_URL } from "./constants";

const faqs: [string, string][] = [
  ["Чем хороша методика «Дерево определения»?", "Методика хороша сразу в нескольких измерениях. Она наглядна: использует простую метафору дерева для анализа сложных систем — личности или бизнеса. Она системна: показывает причинно-следственные связи между ценностями (корни), характером и структурой (ствол) и поведением и результатами (крона). Она глубока: помогает найти истинный источник проблемы, а не бороться с её внешними проявлениями. И наконец, она практична: даёт конкретный план действий по укреплению слабых звеньев."],
  ["Что такое МАК-терапия?", "МАК (метафорические ассоциативные карты) — это инструмент для работы с подсознанием. Карты помогают мягко и образно исследовать внутренний мир, найти ресурсы и решения там, где слова не справляются."],
  ["Чем отличается коучинг от психологии?", "Коучинг фокусируется на целях и будущем — мы определяем, куда вы хотите прийти, и строим путь. Психологическое консультирование работает глубже с эмоциями, убеждениями и прошлым опытом. Часто я совмещаю оба подхода."],
  ["Как проходят групповые сессии?", "Группы — это безопасное пространство, где участники работают с МАК-картами, получают обратную связь и поддержку. Обычно 6–12 человек. Формат бережный и конфиденциальный."],
  ["Можно ли работать онлайн?", "Да, онлайн-формат полностью рабочий. Видеосвязь, удобное время, никуда ехать не нужно. Эффективность не уступает очным встречам."],
];

export default function B2bFaqReviewsSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const [b2bForm, setB2bForm] = useState({ name: '', company: '', contact: '', employees: '', request: '' });
  const [b2bStatus, setB2bStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleB2bSubmit = async () => {
    if (!b2bForm.name.trim() || !b2bForm.company.trim() || !b2bForm.contact.trim()) return;
    setB2bStatus('loading');
    try {
      const res = await fetch(SEND_APPLICATION_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...b2bForm, type: 'b2b' }),
      });
      if (res.ok) {
        setB2bStatus('success');
        setB2bForm({ name: '', company: '', contact: '', employees: '', request: '' });
      } else {
        setB2bStatus('error');
      }
    } catch {
      setB2bStatus('error');
    }
  };

  return (
    <>
      {/* B2B */}
      <section id="b2b" className="py-24 bg-[#faf7f4]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-12 text-center">
            <div className="text-[#b07d62] text-xs font-medium uppercase tracking-widest mb-4">Для бизнеса</div>
            <h2 className="font-cormorant text-4xl lg:text-5xl font-light text-[#2c2420] mb-4">Сотрудничество с компаниями</h2>
            <p className="text-[#9c7b6e] font-light text-base max-w-2xl mx-auto leading-relaxed">
              Работаю как внешний консультант по бизнес-процессам, управленческой структуре и корпоративной культуре. Помогаю компаниям выстраивать здоровую среду и повышать эффективность команд.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-5 mb-14">
            {[
              { icon: "GitBranch", title: "Бизнес-процессы", desc: "Анализ и оптимизация рабочих процессов, выявление узких мест и точек роста." },
              { icon: "Network", title: "Управленческая структура", desc: "Аудит управления, работа с руководителями, развитие лидерских компетенций." },
              { icon: "HeartHandshake", title: "Корпоративная культура", desc: "Формирование ценностей, снижение конфликтности, укрепление сплочённости команды." },
            ].map((item, i) => (
              <div key={i} className="bg-[#f5ede6] rounded-2xl p-6 border border-[#e8ddd5]">
                <div className="w-10 h-10 rounded-full bg-[#f0e6de] flex items-center justify-center mb-4">
                  <Icon name={item.icon} size={18} className="text-[#b07d62]" />
                </div>
                <h3 className="font-medium text-[#2c2420] mb-2">{item.title}</h3>
                <p className="text-[#9c7b6e] text-sm leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mb-6 px-1">
            <p className="text-[#9c7b6e] font-light text-sm leading-relaxed mb-3">
              * Стоимость консультационных услуг для бизнеса варьируется индивидуально и обсуждается после первичного запроса. На итоговую цену влияет ряд факторов:
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-1">
              {["Объём работ и масштаб компании", "Регион и формат предоставления услуг"].map((text, i) => (
                <span key={i} className="text-[#9c7b6e] text-sm font-light">· {text}</span>
              ))}
            </div>
          </div>

          <div className="bg-[#f5ede6] rounded-2xl p-8 md:p-10 border border-[#e8ddd5]">
            <h3 className="font-cormorant text-2xl font-light text-[#2c2420] mb-7">Оставьте заявку на сотрудничество</h3>
            {b2bStatus === 'success' ? (
              <div className="text-center py-10">
                <div className="w-12 h-12 rounded-full bg-[#b07d62]/20 flex items-center justify-center mx-auto mb-4">
                  <Icon name="Check" size={22} className="text-[#b07d62]" />
                </div>
                <p className="text-[#2c2420] font-medium mb-1">Заявка отправлена</p>
                <p className="text-[#9c7b6e] text-sm font-light">Свяжусь с вами в ближайшее время</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  value={b2bForm.name}
                  onChange={e => setB2bForm(f => ({ ...f, name: e.target.value }))}
                  placeholder="Имя и должность *"
                  className="bg-[#faf7f4] border border-[#e8ddd5] rounded-xl px-5 py-4 text-sm text-[#2c2420] placeholder:text-[#c4a99e] focus:outline-none focus:border-[#b07d62] transition-colors"
                />
                <input
                  value={b2bForm.company}
                  onChange={e => setB2bForm(f => ({ ...f, company: e.target.value }))}
                  placeholder="Название компании *"
                  className="bg-[#faf7f4] border border-[#e8ddd5] rounded-xl px-5 py-4 text-sm text-[#2c2420] placeholder:text-[#c4a99e] focus:outline-none focus:border-[#b07d62] transition-colors"
                />
                <input
                  value={b2bForm.contact}
                  onChange={e => setB2bForm(f => ({ ...f, contact: e.target.value }))}
                  placeholder="Телефон или Email *"
                  className="bg-[#faf7f4] border border-[#e8ddd5] rounded-xl px-5 py-4 text-sm text-[#2c2420] placeholder:text-[#c4a99e] focus:outline-none focus:border-[#b07d62] transition-colors"
                />
                <input
                  value={b2bForm.employees}
                  onChange={e => setB2bForm(f => ({ ...f, employees: e.target.value }))}
                  placeholder="Количество сотрудников"
                  className="bg-[#faf7f4] border border-[#e8ddd5] rounded-xl px-5 py-4 text-sm text-[#2c2420] placeholder:text-[#c4a99e] focus:outline-none focus:border-[#b07d62] transition-colors"
                />
                <textarea
                  value={b2bForm.request}
                  onChange={e => setB2bForm(f => ({ ...f, request: e.target.value }))}
                  placeholder="Опишите запрос или задачу"
                  rows={3}
                  className="bg-[#faf7f4] border border-[#e8ddd5] rounded-xl px-5 py-4 text-sm text-[#2c2420] placeholder:text-[#c4a99e] focus:outline-none focus:border-[#b07d62] transition-colors resize-none md:col-span-2"
                />
                <div className="md:col-span-2">
                  <button
                    onClick={handleB2bSubmit}
                    disabled={b2bStatus === 'loading'}
                    className="bg-[#b07d62] text-[#faf7f4] px-8 py-4 rounded-full font-medium text-sm hover:bg-[#9a6d54] transition-colors disabled:opacity-60"
                  >
                    {b2bStatus === 'loading' ? 'Отправляю...' : 'Отправить заявку'}
                  </button>
                  {b2bStatus === 'error' && (
                    <p className="text-red-400 text-sm mt-3">Ошибка отправки. Попробуйте ещё раз.</p>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 bg-[#f5ede6]">
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
                  className="w-full flex items-center justify-between px-8 py-6 text-left"
                >
                  <span className="font-medium text-[#2c2420] text-base pr-4">{q}</span>
                  <Icon name={openFaq === i ? "ChevronUp" : "ChevronDown"} size={18} className="text-[#b07d62] flex-shrink-0" />
                </button>
                {openFaq === i && (
                  <div className="px-8 pb-7">
                    <p className="text-[#9c7b6e] text-base leading-relaxed font-light">{a}</p>
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
              { name: "Мария Е.", role: "Бизнес-аналитик", text: "Хочется выразить огромную благодарность Дарье за компетентную помощь 🌺 За время работы мне удалось: снизить уровень тревожности; разобраться в причинах повторяющихся сценариев; выработать стратегии поведения в стрессовых ситуациях. На самих консультациях очень комфортно, а рекомендации — практичные и применимые. Результат заметен уже после нескольких встреч. Однозначно буду рекомендовать Дарью как специалиста высокого класса!" },
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
    </>
  );
}
