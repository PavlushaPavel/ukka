import Button from '../components/Button'

export default function Screen03Forecast({ onNext }) {
  return (
    <div className="screen">
      <div className="image-placeholder" style={{ height: 180 }} data-image-id="forecast-map" />

      <div>
        <div className="tag">Прогноз судьбы</div>
        <h1 className="screen-title" style={{ marginTop: 'var(--space-sm)' }}>
          Звёзды говорят: обычный день рождения не подходит.
        </h1>
      </div>

      <div className="screen-body">
        <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, marginBottom: 'var(--space-sm)' }}>Нужны:</p>
        <ul>
          <li>дорога;</li>
          <li>лето;</li>
          <li>домик;</li>
          <li>пионы;</li>
          <li>Миша рядом;</li>
          <li>Паша, который всё организовал;</li>
          <li>и Юля, которая ничего не должна решать.</li>
        </ul>
        <p style={{ marginTop: 'var(--space-md)' }}>Кроме одного:</p>
        <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.1rem', color: 'var(--color-rose)', marginTop: 'var(--space-xs)' }}>
          наслаждаться.
        </p>
      </div>

      <div className="screen-cta">
        <Button onClick={onNext}>Подобрать идеальный формат</Button>
      </div>
    </div>
  )
}
