import Button from '../components/Button'

export default function Screen02NatalMap({ onNext }) {
  return (
    <div className="screen">
      <div className="image-placeholder" style={{ height: 200 }} data-image-id="natal-map" />

      <div>
        <div className="tag">Натальная карта</div>
        <h1 className="screen-title" style={{ marginTop: 'var(--space-sm)' }}>
          Мы построили твою натальную карту на ближайшие дни.
        </h1>
        <p className="screen-subtitle" style={{ marginTop: 'var(--space-xs)' }}>Результат необычный.</p>
      </div>

      <div className="card screen-body">
        <ul>
          <li>Солнце — в доме путешествий.</li>
          <li>Венера — в доме пионов.</li>
          <li>Миша — в доме любви.</li>
          <li>Паша — в доме «я всё придумал».</li>
        </ul>
      </div>

      <div className="screen-body">
        <p>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}>Прогноз: </span>
          Юле срочно нужен красивый день без забот, суеты и фразы «давай потом».
        </p>
      </div>

      <div className="screen-cta">
        <Button onClick={onNext}>Что говорят звёзды? ✨</Button>
      </div>
    </div>
  )
}
