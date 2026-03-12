import { useState } from "react";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", company: "", messenger: "" });
  const [submitted, setSubmitted] = useState(false);
  const [messengerError, setMessengerError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.messenger) {
      setMessengerError(true);
      return;
    }
    setMessengerError(false);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).ym?.(107193309, 'reachGoal', 'sessiya');
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* HERO */}
      <section className="relative min-h-screen flex flex-col justify-center grid-geo overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-[hsl(210,14%,5%)]" />

        <div className="absolute top-0 right-0 w-64 h-64 opacity-10 border-b border-l border-amber" style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' }} />
        <div className="absolute bottom-0 left-0 w-48 h-48 opacity-10 border-t border-r border-amber" style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }} />

        <div className="relative max-w-6xl mx-auto px-6 py-24 animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 clip-corner-sm" style={{ border: '1px solid hsla(38,95%,52%,0.4)' }}>
            <Icon name="Shield" size={14} className="text-amber" />
            <span className="text-amber text-xs font-medium tracking-[0.2em] uppercase font-sans">Протокол Анти-Блок</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight mb-6 uppercase tracking-tight">
            Ваша стройка<br />
            <span className="text-amber">работает</span><br />
            без остановки.
          </h1>
          <p className="text-2xl font-light text-amber tracking-wide mb-4 font-sans">Гарантируем.</p>

          <p className="max-w-2xl text-lg leading-relaxed mb-10 font-sans font-light" style={{ color: 'hsl(210,10%,65%)' }}>
            Мы внедряем проактивную систему защиты, которая делает блокировку вашего счета практически невозможной.
            Пока другие бухгалтеры разгребают последствия — мы устраняем их причины, чтобы вы могли спокойно строить
            и выигрывать тендеры.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#form" className="inline-flex items-center justify-center gap-3 bg-amber px-8 py-4 font-bold text-sm tracking-widest uppercase clip-corner hover:opacity-90 transition-opacity font-sans" style={{ color: 'hsl(210,15%,8%)' }}>
              <Icon name="Calendar" size={16} />
              Записаться на стратегическую сессию
            </a>
            <a href="#system" className="inline-flex items-center justify-center gap-3 border text-foreground px-8 py-4 font-medium text-sm tracking-widest uppercase clip-corner hover:text-amber transition-colors font-sans" style={{ borderColor: 'hsl(210,10%,30%)' }}>
              Узнать о системе
            </a>
          </div>
        </div>

      </section>

      {/* ЯДРО ОФФЕРА */}
      <section id="system" className="py-24" style={{ backgroundColor: 'hsl(210,14%,6%)' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="section-line">
            <p className="text-amber text-xs tracking-[0.3em] uppercase font-sans mb-2">Ядро оффера</p>
            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4">
              Внедрение системы<br />«Протокол Анти-Блок»
            </h2>
          </div>
          <p className="max-w-2xl mb-16 font-sans leading-relaxed" style={{ color: 'hsl(210,10%,60%)' }}>
            Вы получаете не просто бухгалтера, а внедрение нашей авторской системы финансовой защиты. Её главная цель —
            обеспечить бесперебойную работу вашего бизнеса и защитить вас от «Паралича Стройки».
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                level: "Уровень 1",
                icon: "ShieldAlert",
                title: "Ежедневный Мониторинг Рисков Блокировки",
                badge: "Главная Защита",
                text: "Это ядро нашей системы. Мы ежедневно отслеживаем ключевые «красные флаги», которые приводят к блокировке по 115-ФЗ и требованиям ФНС: уровень налоговой нагрузки, «подозрительные» операции, разрывы по НДС. Вы получаете не сухие отчеты, а конкретные, упреждающие рекомендации: «В этом месяце рекомендуем увеличить налоговый платеж на Х, чтобы избежать вопросов» или «Этот крупный платеж лучше разбить на два».",
              },
              {
                level: "Уровень 2",
                icon: "FileShield",
                title: "Щит для Ключевых Сделок",
                badge: "Второй Эшелон Защиты",
                text: "Мы знаем, что вы работаете с разными подрядчиками. Мы помогаем вам формировать «досье должной осмотрительности» по каждой важной сделке. Это гарантирует, что даже самый выгодный контракт не станет причиной для налоговых претензий или блокировки счета в будущем.",
              },
              {
                level: "Уровень 3",
                icon: "MonitorCheck",
                title: "Центр Управления «Спокойствие»",
                badge: "",
                text: "Вы получаете круглосуточный доступ к нашему «Контрольному Монитору» — живому облачному календарю с дедлайнами всех ваших отчетов. Вы всегда знаете, что вся отчетность будет сдана вовремя, не отвлекаясь от главных задач.",
              },
              {
                level: "Уровень 4",
                icon: "Radar",
                title: "Финансовый Периметр",
                badge: "",
                text: "Мы берем под контроль ваш информационный фон. Вы получаете мгновенные оповещения о любых критических изменениях по вашей компании (появление исков, начало проверок), которые требуют вашего внимания. Вы узнаете о потенциальной угрозе первым, получая драгоценное время на подготовку.",
              },
            ].map((item, i) => (
              <div key={i} className="shield-card p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center clip-corner-sm" style={{ backgroundColor: 'hsl(210,15%,8%)', border: '1px solid hsl(38,95%,52%)' }}>
                    <Icon name={item.icon} size={20} className="text-amber" fallback="Shield" />
                  </div>
                  <div>
                    <div className="text-amber text-xs tracking-[0.25em] uppercase font-sans mb-1">{item.level}</div>
                    <h3 className="text-lg font-bold uppercase leading-tight">{item.title}</h3>
                    {item.badge && (
                      <span className="text-xs font-sans" style={{ color: 'hsl(210,10%,50%)' }}>({item.badge})</span>
                    )}
                  </div>
                </div>
                <p className="text-sm leading-relaxed font-sans" style={{ color: 'hsl(210,10%,60%)' }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* БОНУСЫ */}
      <section className="py-24 bg-background grid-geo">
        <div className="max-w-6xl mx-auto px-6">
          <div className="section-line">
            <p className="text-amber text-xs tracking-[0.3em] uppercase font-sans mb-2">Дополнительно</p>
            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4">Бонусы</h2>
            <p className="max-w-xl mb-12 font-sans" style={{ color: 'hsl(210,10%,60%)' }}>Накопление ценности</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: "Scale",
                num: "Бонус №1",
                title: "Пакет «Юридический Щит»",
                text: "Доступ к нашему юридическому отделу для устных консультаций по договорам и претензиям, а также для оценки судебных перспектив.",
                value: "35 000 ₽/мес.",
              },
              {
                icon: "CheckCircle",
                num: "Бонус №2",
                title: "Сервис «Зеленый Свет для Этапа»",
                text: "Мы забираем вашу головную боль по контролю финансов. Перед началом работ по этапу мы проверяем поступление средств и даем официальное подтверждение: «Финансирование подтверждено. Можно начинать». Это прямая защита от кассовых разрывов и остановки работ.",
                value: "Гарантия вашего спокойствия",
              },
            ].map((item, i) => (
              <div key={i} className="perimeter-box p-8" style={{ backgroundColor: 'hsl(210,14%,10%)' }}>
                <div className="flex items-center gap-3 mb-6">
                  <Icon name={item.icon} size={24} className="text-amber" fallback="Shield" />
                  <span className="text-amber text-xs tracking-[0.25em] uppercase font-sans">{item.num}</span>
                </div>
                <h3 className="text-2xl font-bold uppercase mb-4">{item.title}</h3>
                <p className="text-sm leading-relaxed font-sans mb-6" style={{ color: 'hsl(210,10%,60%)' }}>{item.text}</p>
                <div className="pt-4" style={{ borderTop: '1px solid hsl(210,10%,20%)' }}>
                  <div className="text-xs font-sans uppercase tracking-widest mb-1" style={{ color: 'hsl(210,10%,45%)' }}>Рыночная ценность</div>
                  {i === 0 ? (
                    <>
                      <div className="text-2xl font-bold text-amber line-through opacity-60">{item.value}</div>
                      <div className="text-green-400 text-sm font-sans mt-1">Включено в пакет</div>
                    </>
                  ) : (
                    <div className="text-green-400 text-sm font-sans">{item.value}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ГАРАНТИЯ */}
      <section className="py-24" style={{ backgroundColor: 'hsl(210,14%,6%)' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="section-line">
            <p className="text-amber text-xs tracking-[0.3em] uppercase font-sans mb-2">Надёжность</p>
            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4">
              Тройная Железная Гарантия<br />
              <span className="text-amber">Бесперебойной Работы</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 mt-12">
            {[
              {
                num: "01",
                icon: "ShieldCheck",
                title: "Гарантия от Блокировки",
                text: "Если в течение нашей работы ваш счет будет заблокирован по нашей вине (из-за несданной отчетности или некорректного ответа на требование), следующий месяц обслуживания — полностью за наш счет.",
              },
              {
                num: "02",
                icon: "ClipboardCheck",
                title: "Гарантия «Чистый Старт»",
                text: "При переходе к нам мы проводим полный аудит учета за предыдущий год, чтобы выявить и нейтрализовать все «мины», оставленные прошлым бухгалтером. Мы берем на себя 100% общения с ним.",
              },
              {
                num: "03",
                icon: "UserCheck",
                title: "Гарантия «Личной Ответственности»",
                text: "Каждый наш бухгалтер несет личную финансовую ответственность за результат, закрепленную в трудовом договоре. Штрафы по нашей вине выплачиваются напрямую ответственным сотрудником.",
              },
            ].map((item, i) => (
              <div key={i} className="p-8 relative" style={{ borderTop: '2px solid hsl(38,95%,52%)', borderRight: i < 2 ? '1px solid hsl(210,10%,20%)' : 'none' }}>
                <div className="text-6xl font-bold absolute top-6 right-6 select-none" style={{ color: 'hsl(210,10%,18%)' }}>{item.num}</div>
                <div className="mb-4">
                  <Icon name={item.icon} size={32} className="text-amber" fallback="Shield" />
                </div>
                <h3 className="text-xl font-bold uppercase mb-4 pr-16">{item.title}</h3>
                <p className="text-sm leading-relaxed font-sans" style={{ color: 'hsl(210,10%,60%)' }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ЦЕНА */}
      <section className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="section-line">
            <p className="text-amber text-xs tracking-[0.3em] uppercase font-sans mb-2">Инвестиция</p>
            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-12">Цена и обоснование ценности</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="space-y-0">
                {[
                  { name: "Система «Протокол 'Анти-Блок'»", value: "25 000 ₽/мес." },
                  { name: "Бонус №1: Пакет «Юридический Щит»", value: "15 000 ₽/мес." },
                  { name: "Бонус №2: Сервис «Зеленый Свет для Этапа»", value: "15 000 ₽/мес." },
                ].map((row, i) => (
                  <div key={i} className="flex justify-between items-center py-5" style={{ borderBottom: '1px solid hsl(210,10%,18%)' }}>
                    <span className="font-sans text-sm" style={{ color: 'hsl(210,10%,70%)' }}>{row.name}</span>
                    <span className="font-sans text-sm line-through" style={{ color: 'hsl(210,10%,50%)' }}>{row.value}</span>
                  </div>
                ))}
                <div className="flex justify-between items-center py-5" style={{ borderBottom: '2px solid hsl(38,95%,52%)' }}>
                  <span className="text-foreground font-bold uppercase tracking-wide">Общая ценность, которую вы получаете</span>
                  <span className="font-bold line-through" style={{ color: 'hsl(210,10%,50%)' }}>55 000 ₽/мес.</span>
                </div>
              </div>
            </div>

            <div className="perimeter-box p-10 clip-corner-lg" style={{ backgroundColor: 'hsl(210,14%,10%)' }}>
              <div className="text-amber text-xs tracking-[0.3em] uppercase font-sans mb-4">Ваша инвестиция в спокойствие и рост</div>
              <div className="text-6xl font-bold text-foreground mb-2">25 000 ₽</div>
              <div className="font-sans mb-8" style={{ color: 'hsl(210,10%,50%)' }}>в месяц</div>

              <div className="p-4 mb-8 clip-corner-sm" style={{ backgroundColor: 'hsla(38,95%,52%,0.08)', border: '1px solid hsla(38,95%,52%,0.3)' }}>
                <div className="flex items-start gap-3">
                  <Icon name="AlertTriangle" size={16} className="text-amber flex-shrink-0 mt-0.5" />
                  <p className="text-amber text-xs font-sans leading-relaxed">
                    В этом месяце осталось <strong>1 место</strong> для нового клиента.
                    Процедура «Чистый Старт» требует привлечения лучших специалистов.
                    Наш отдел аудита может вести одновременно не более 3-х процедур перехода.
                  </p>
                </div>
              </div>

              <a href="#form" className="w-full inline-flex items-center justify-center gap-3 bg-amber px-6 py-4 font-bold text-sm tracking-widest uppercase clip-corner hover:opacity-90 transition-opacity font-sans" style={{ color: 'hsl(210,15%,8%)' }}>
                <Icon name="Calendar" size={16} />
                Записаться на сессию
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ФОРМА */}
      <section id="form" className="py-24 grid-geo" style={{ backgroundColor: 'hsl(210,14%,6%)' }}>
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 border border-amber flex items-center justify-center clip-corner" style={{ borderColor: 'hsl(38,95%,52%)' }}>
                <Icon name="Shield" size={28} className="text-amber" />
              </div>
            </div>
            <div className="section-line" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ width: 60, height: 3, backgroundColor: 'hsl(38,95%,52%)', marginBottom: '1.5rem' }} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-6">
              Записаться на<br />
              <span className="text-amber">стратегическую сессию</span>
            </h2>
            <p className="font-sans leading-relaxed" style={{ color: 'hsl(210,10%,60%)' }}>
              Готовы превратить бухгалтерию из источника проблем в систему защиты вашего бизнеса?
              Запишитесь на стратегическую сессию, чтобы получить план по защите ваших счетов от блокировок
              и обеспечить бесперебойную работу вашей компании.
            </p>
          </div>

          {submitted ? (
            <div className="perimeter-box p-12 text-center clip-corner-lg" style={{ backgroundColor: 'hsl(210,14%,10%)' }}>
              <Icon name="ShieldCheck" size={48} className="text-amber mx-auto mb-4" />
              <h3 className="text-2xl font-bold uppercase mb-3">Заявка получена</h3>
              <p className="font-sans" style={{ color: 'hsl(210,10%,60%)' }}>Мы свяжемся с вами в течение рабочего дня для подтверждения времени сессии.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="perimeter-box p-10 clip-corner-lg" style={{ backgroundColor: 'hsl(210,14%,10%)' }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-xs tracking-[0.2em] uppercase font-sans mb-2" style={{ color: 'hsl(210,10%,55%)' }}>Ваше имя</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    className="w-full text-foreground px-4 py-3 font-sans text-sm focus:outline-none transition-colors"
                    style={{ backgroundColor: 'hsl(210,15%,8%)', border: '1px solid hsl(210,10%,22%)' }}
                    placeholder="Иван Иванов"
                    onFocus={e => e.target.style.borderColor = 'hsl(38,95%,52%)'}
                    onBlur={e => e.target.style.borderColor = 'hsl(210,10%,22%)'}
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-[0.2em] uppercase font-sans mb-2" style={{ color: 'hsl(210,10%,55%)' }}>Телефон</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full text-foreground px-4 py-3 font-sans text-sm focus:outline-none transition-colors"
                    style={{ backgroundColor: 'hsl(210,15%,8%)', border: '1px solid hsl(210,10%,22%)' }}
                    placeholder="+7 (___) ___-__-__"
                    onFocus={e => e.target.style.borderColor = 'hsl(38,95%,52%)'}
                    onBlur={e => e.target.style.borderColor = 'hsl(210,10%,22%)'}
                  />
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-xs tracking-[0.2em] uppercase font-sans mb-3" style={{ color: messengerError ? 'hsl(0,70%,55%)' : 'hsl(210,10%,55%)' }}>
                  Удобный канал для связи{messengerError && <span className="ml-2 normal-case tracking-normal">— выберите один из вариантов</span>}
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    { id: "whatsapp", label: "WhatsApp", icon: "MessageCircle" },
                    { id: "telegram", label: "Telegram", icon: "Send" },
                    { id: "vkmax", label: "VK MAX", icon: "MessageSquare" },
                    { id: "phone", label: "Звонок", icon: "PhoneCall" },
                  ].map((m) => (
                    <button
                      key={m.id}
                      type="button"
                      onClick={() => { setFormData({ ...formData, messenger: m.id }); setMessengerError(false); }}
                      className="flex flex-col items-center gap-2 py-4 px-3 font-sans text-xs tracking-wide uppercase transition-all clip-corner-sm"
                      style={{
                        backgroundColor: formData.messenger === m.id ? 'hsla(38,95%,52%,0.12)' : 'hsl(210,15%,8%)',
                        border: formData.messenger === m.id ? '1px solid hsl(38,95%,52%)' : '1px solid hsl(210,10%,22%)',
                        color: formData.messenger === m.id ? 'hsl(38,95%,52%)' : 'hsl(210,10%,55%)',
                      }}
                    >
                      <Icon name={m.icon} size={20} fallback="MessageCircle" />
                      {m.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <label className="block text-xs tracking-[0.2em] uppercase font-sans mb-2" style={{ color: 'hsl(210,10%,55%)' }}>Название компании</label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={e => setFormData({ ...formData, company: e.target.value })}
                  className="w-full text-foreground px-4 py-3 font-sans text-sm focus:outline-none transition-colors"
                  style={{ backgroundColor: 'hsl(210,15%,8%)', border: '1px solid hsl(210,10%,22%)' }}
                  placeholder="ООО «Строительная компания»"
                  onFocus={e => e.target.style.borderColor = 'hsl(38,95%,52%)'}
                  onBlur={e => e.target.style.borderColor = 'hsl(210,10%,22%)'}
                />
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-3 bg-amber px-6 py-5 font-bold text-sm tracking-widest uppercase clip-corner hover:opacity-90 transition-opacity font-sans"
                style={{ color: 'hsl(210,15%,8%)' }}
              >
                <Icon name="Calendar" size={18} />
                Записаться на стратегическую сессию
              </button>
              <p className="text-center text-xs font-sans mt-4" style={{ color: 'hsl(210,10%,40%)' }}>
                Нажимая кнопку, вы соглашаетесь на обработку персональных данных
              </p>
            </form>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: '1px solid hsl(210,10%,16%)', backgroundColor: 'hsl(210,15%,5%)' }} className="py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <Icon name="Shield" size={20} className="text-amber" />
            <span className="font-bold uppercase tracking-widest text-sm">Протокол Анти-Блок</span>
          </div>
          <div className="text-xs font-sans" style={{ color: 'hsl(210,10%,40%)' }}>
            Профессиональная бухгалтерская защита для строительного бизнеса
          </div>
        </div>
      </footer>

    </div>
  );
};

export default Index;