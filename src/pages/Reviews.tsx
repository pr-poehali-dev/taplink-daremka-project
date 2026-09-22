import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const reviews = [
  { name: "Виктор Д.", role: "Менеджер по продажам", text: "Дарья помогла мне раскрыть внутренний потенциал и улучшить личные отношения. Рекомендую!" },
  { name: "Алиса С.", role: "SMM-менеджер", text: "Коучинг и мак-терапия с вами — настоящее открытие. Ваш профессионализм, чуткость и умение направить помогли обрести уверенность и внутренний баланс. Спасибо за вдохновляющую поддержку и ценные инструменты для личного развития! Рекомендую всем, кто стремится к гармонии и росту." },
  { name: "Игорь Н.", role: "Ведущий", text: "Прошёл курс тренингов, чувствую уверенность и гармонию. Благодарен за поддержку!" },
  { name: "Альберт Г.", role: "Предприниматель", text: "Отличный коуч с профессиональным подходом. Работа с картами помогла многое понять." },
  { name: "Мария Е.", role: "Бизнес-аналитик", text: "Хочется выразить огромную благодарность Дарье за компетентную помощь 🌺 За время работы мне удалось: снизить уровень тревожности; разобраться в причинах повторяющихся сценариев; выработать стратегии поведения в стрессовых ситуациях. На самих консультациях очень комфортно, а рекомендации — практичные и применимые. Результат заметен уже после нескольких встреч. Однозначно буду рекомендовать Дарью как специалиста высокого класса!" },
];

export default function Reviews() {
  return (
    <div className="font-rubik bg-[#faf7f4] text-[#2c2420] min-h-screen overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <Link
          to="/"
          className="inline-flex items-center text-[#b07d62] hover:text-[#8a6049] text-sm mb-8 transition-colors"
        >
          ← Вернуться на главную
        </Link>

        <div className="text-center mb-14">
          <div className="text-[#b07d62] text-xs font-medium uppercase tracking-widest mb-4">Отзывы</div>
          <h1 className="font-cormorant text-5xl lg:text-6xl font-light text-[#2c2420]">Что говорят клиенты</h1>
        </div>

        <div className="grid md:grid-cols-2 gap-6 pb-16">
          {reviews.map((r, i) => (
            <div key={i} className="bg-[#f5ede6] rounded-2xl p-8 border border-[#e8ddd5] flex flex-col gap-4">
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
    </div>
  );
}
