import { useState } from "react";
import Icon from "@/components/ui/icon";

const faqs: [string, string][] = [
  ["Чем отличается коучинг от психологии?", "Коучинг фокусируется на целях и будущем — мы определяем, куда вы хотите прийти, и строим путь. Психологическое консультирование работает глубже с эмоциями, убеждениями и прошлым опытом. Часто я совмещаю оба подхода."],
  ["Что такое МАК-терапия?", "МАК (метафорические ассоциативные карты) — это инструмент для работы с подсознанием. Карты помогают мягко и образно исследовать внутренний мир, найти ресурсы и решения там, где слова не справляются."],
  ["Можно ли работать онлайн?", "Да, онлайн-формат полностью рабочий. Видеосвязь, удобное время, никуда ехать не нужно. Эффективность не уступает очным встречам."],
  ["Как понять, что мне подойдёт: сессия или клуб «Калибр»?", "Если нужен разовый разбор конкретной ситуации — подойдёт индивидуальная сессия. Если хотите системную трёхмесячную работу с командой единомышленников — клуб «Калибр». Расскажите о своём запросе, и я предложу формат."],
  ["Гарантирована ли конфиденциальность?", "Да. Всё, что происходит на встречах, не разглашается третьим лицам ни при каких условиях."],
];

export default function B2bFaqReviewsSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
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
    </>
  );
}