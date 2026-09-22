import { forwardRef, useImperativeHandle, useState } from "react";
import Icon from "@/components/ui/icon";
import { SEND_APPLICATION_URL } from "./constants";

export interface ContactsEthicsFooterHandle {
  setMessagePreset: (preset: string) => void;
}

const ContactsEthicsFooter = forwardRef<ContactsEthicsFooterHandle>((_, ref) => {
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
                  <label className="block text-[#9c7b6e] text-xs font-medium uppercase tracking-widest mb-2">Имя *</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    className="w-full bg-[#faf7f4] border border-[#e8ddd5] rounded-xl px-4 py-3 text-[#2c2420] text-base placeholder-[#c4a99a] focus:outline-none focus:border-[#b07d62] transition-colors duration-200"
                    placeholder="Как к вам обращаться"
                  />
                </div>
                <div>
                  <label className="block text-[#9c7b6e] text-xs font-medium uppercase tracking-widest mb-2">Телефон или мессенджер *</label>
                  <input
                    type="text"
                    value={form.contact}
                    onChange={e => setForm(f => ({ ...f, contact: e.target.value }))}
                    className="w-full bg-[#faf7f4] border border-[#e8ddd5] rounded-xl px-4 py-3 text-[#2c2420] text-base placeholder-[#c4a99a] focus:outline-none focus:border-[#b07d62] transition-colors duration-200"
                    placeholder="+7 999 000-00-00"
                  />
                </div>
                <div>
                  <label className="block text-[#9c7b6e] text-xs font-medium uppercase tracking-widest mb-2">Сообщение</label>
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
        </div>
      </footer>
    </>
  );
});

ContactsEthicsFooter.displayName = "ContactsEthicsFooter";

export default ContactsEthicsFooter;
