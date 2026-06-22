import { Link } from "react-router-dom";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-[#faf7f4] py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center text-[#b07d62] hover:text-[#8a6049] text-sm mb-8 transition-colors"
        >
          ← Вернуться на главную
        </Link>

        <h1 className="text-3xl font-bold text-[#2c2420] mb-2">
          Политика конфиденциальности
        </h1>
        <p className="text-[#9c7b6e] text-sm mb-8">Дата вступления в силу: 22 июня 2026 г.</p>

        <div className="space-y-6 text-[#4a3a34] text-base leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-[#2c2420] mb-2">1. Общие положения</h2>
            <p>
              Настоящая Политика конфиденциальности определяет порядок обработки и защиты
              персональных данных пользователей сайта. Оператором персональных данных является{" "}
              <strong>Емикеева Дарья Юрьевна</strong>.
            </p>
            <p className="mt-2">
              Обработка данных осуществляется в соответствии с Федеральным законом №&nbsp;152-ФЗ
              «О персональных данных».
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#2c2420] mb-2">2. Какие данные собираются</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Имя и фамилия</li>
              <li>Номер телефона</li>
              <li>Адрес электронной почты</li>
              <li>Ник в Telegram</li>
              <li>Сообщение, оставленное в форме обратной связи</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#2c2420] mb-2">3. Цели обработки данных</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Обработка заявок и запись на консультацию</li>
              <li>Связь с пользователем для уточнения деталей</li>
              <li>Информирование об услугах и акциях (с согласия пользователя)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#2c2420] mb-2">4. Хранение и защита данных</h2>
            <p>
              Данные хранятся в защищённых системах и не передаются третьим лицам без согласия
              пользователя, за исключением случаев, предусмотренных законодательством РФ.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#2c2420] mb-2">5. Права пользователя</h2>
            <p>Вы вправе в любой момент:</p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>Запросить информацию о хранящихся данных</li>
              <li>Потребовать исправления или удаления своих данных</li>
              <li>Отозвать согласие на обработку данных</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#2c2420] mb-2">6. Контакты оператора</h2>
            <p>По вопросам обработки персональных данных обращайтесь:</p>
            <ul className="list-none space-y-1 mt-2">
              <li>
                <span className="text-[#9c7b6e]">Email:</span>{" "}
                <a
                  href="mailto:daria.alvinceva1@yandex.ru"
                  className="text-[#b07d62] hover:underline"
                >
                  daria.alvinceva1@yandex.ru
                </a>
              </li>
              <li>
                <span className="text-[#9c7b6e]">Телефон:</span>{" "}
                <a href="tel:+79185379305" className="text-[#b07d62] hover:underline">
                  +7 918 537-93-05
                </a>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
