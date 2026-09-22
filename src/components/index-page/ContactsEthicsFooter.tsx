import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import Icon from "@/components/ui/icon";
import { SEND_APPLICATION_URL } from "./constants";

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

export interface ContactsEthicsFooterHandle {
  setMessagePreset: (preset: string) => void;
}

const ContactsEthicsFooter = forwardRef<ContactsEthicsFooterHandle>((_, ref) => {
  const [openEthics, setOpenEthics] = useState<number | null>(null);
  const [showEthics, setShowEthics] = useState(false);
  const ethicsRef = useRef<HTMLDivElement>(null);

  const [form, setForm] = useState({ name: '', phone: '', contact: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  useImperativeHandle(ref, () => ({
    setMessagePreset: (preset: string) => {
      setForm(f => ({ ...f, message: preset }));
    },
  }));

  const handleFormSubmit = async () => {
    if (!form.name.trim() || !form.contact.trim()) return;
    setFormStatus('loading');
    try {
      const res = await fetch(SEND_APPLICATION_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setFormStatus('success');
        setForm({ name: '', phone: '', contact: '', email: '', message: '' });
      } else {
        setFormStatus('error');
      }
    } catch {
      setFormStatus('error');
    }
  };

  return (
    <>
      {/* CONTACTS */}
      <section id="contacts" className="py-24 max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="text-[#b07d62] text-xs font-medium uppercase tracking-widest mb-4">Запись</div>
            <h2 className="font-cormorant text-5xl lg:text-6xl font-light text-[#2c2420] mb-6">Начнём разговор?</h2>
            <p className="text-[#9c7b6e] leading-relaxed mb-6 font-light text-base">
              Напишите мне — расскажите о своём запросе, и я предложу подходящий формат работы. Отвечаю в течение нескольких часов.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mb-3">
              <a
                href="https://t.me/kadari_psy"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-[#2AABEE] text-white font-medium py-3.5 rounded-full hover:opacity-90 transition-opacity duration-200 text-sm"
              >
                <Icon name="Send" size={17} />
                Написать в Telegram
              </a>
              <a
                href="https://wa.me/79185379305"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white font-medium py-3.5 rounded-full hover:opacity-90 transition-opacity duration-200 text-sm"
              >
                <Icon name="MessageCircle" size={17} />
                Написать в WhatsApp
              </a>
            </div>
            <p className="text-[#b07d62] text-sm font-medium mb-10">
              Получить скидку 20% на первую сессию
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
            {formStatus === 'success' ? (
              <div className="text-center py-8">
                <div className="text-[#b07d62] text-5xl mb-4">✓</div>
                <div className="font-cormorant text-2xl text-[#2c2420] mb-2">Заявка отправлена!</div>
                <p className="text-[#9c7b6e] text-sm">Дарья свяжется с вами в ближайшее время.</p>
                <button onClick={() => setFormStatus('idle')} className="mt-6 text-[#b07d62] text-sm underline">Отправить ещё раз</button>
              </div>
            ) : (
              <div className="space-y-4">
                <div>
                  <label className="block text-[#9c7b6e] text-sm font-medium mb-2">Ваше имя</label>
                  <input
                    type="text"
                    placeholder="Как вас зовут?"
                    value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    className="w-full bg-[#faf7f4] border border-[#e8ddd5] rounded-xl px-4 py-3 text-[#2c2420] text-base placeholder-[#c4a99a] focus:outline-none focus:border-[#b07d62] transition-colors duration-200"
                  />
                </div>
                <div>
                  <label className="block text-[#9c7b6e] text-sm font-medium mb-2">Номер телефона</label>
                  <input
                    type="tel"
                    autoComplete="tel"
                    placeholder="+7 (___) ___-__-__"
                    value={form.phone}
                    onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                    className="w-full bg-[#faf7f4] border border-[#e8ddd5] rounded-xl px-4 py-3 text-[#2c2420] text-base placeholder-[#c4a99a] focus:outline-none focus:border-[#b07d62] transition-colors duration-200"
                  />
                </div>
                <div>
                  <label className="block text-[#9c7b6e] text-sm font-medium mb-2">Ник в Telegram</label>
                  <input
                    type="text"
                    autoComplete="username"
                    placeholder="@username"
                    value={form.contact}
                    onChange={e => setForm(f => ({ ...f, contact: e.target.value }))}
                    className="w-full bg-[#faf7f4] border border-[#e8ddd5] rounded-xl px-4 py-3 text-[#2c2420] text-base placeholder-[#c4a99a] focus:outline-none focus:border-[#b07d62] transition-colors duration-200"
                  />
                </div>
                <div>
                  <label className="block text-[#9c7b6e] text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    className="w-full bg-[#faf7f4] border border-[#e8ddd5] rounded-xl px-4 py-3 text-[#2c2420] text-base placeholder-[#c4a99a] focus:outline-none focus:border-[#b07d62] transition-colors duration-200"
                  />
                </div>
                <div>
                  <label className="block text-[#9c7b6e] text-sm font-medium mb-2">С чем хотите поработать?</label>
                  <textarea
                    rows={3}
                    placeholder="Необязательно, но поможет подготовиться к встрече..."
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    className="w-full bg-[#faf7f4] border border-[#e8ddd5] rounded-xl px-4 py-3 text-[#2c2420] text-base placeholder-[#c4a99a] focus:outline-none focus:border-[#b07d62] transition-colors duration-200 resize-none"
                  />
                </div>
                {formStatus === 'error' && (
                  <p className="text-red-500 text-sm text-center">Что-то пошло не так. Попробуйте ещё раз.</p>
                )}
                <button
                  onClick={handleFormSubmit}
                  disabled={formStatus === 'loading' || !form.name.trim() || !form.contact.trim()}
                  className="w-full bg-[#b07d62] text-[#faf7f4] font-medium py-4 rounded-full hover:bg-[#9c6b51] transition-colors duration-200 mt-2 text-base disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {formStatus === 'loading' ? 'Отправляем...' : 'Записаться на сессию'}
                </button>
                <p className="text-[#9c7b6e] text-sm text-center font-light">
                  Конфиденциальность гарантирована. Данные не передаются третьим лицам.
                </p>
              </div>
            )}
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
            <span className="font-cormorant text-[#faf7f4] font-medium tracking-wide">Альвинцева Дарья · провокативный психолог · сексолог · стратегический бизнес-коуч</span>
          </div>
          <div className="text-[#c4a99a]/40 text-xs font-light">
            © 2023–2026 · Все встречи конфиденциальны ·{" "}
            <a href="/privacy" className="hover:text-[#b07d62] transition-colors duration-200 underline underline-offset-2">
              Политика конфиденциальности
            </a>
          </div>
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
    </>
  );
});

ContactsEthicsFooter.displayName = "ContactsEthicsFooter";

export default ContactsEthicsFooter;