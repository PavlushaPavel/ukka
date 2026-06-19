import Button from '../components/Button'

export default function Screen01Start({ onNext }) {
  return (
    <div className="screen">
      <div className="image-placeholder" style={{ height: 180 }} data-image-id="start-card" />

      <div>
        <div className="screen-emoji">🌸</div>
        <h1 className="screen-title" style={{ textAlign: 'center', marginTop: 'var(--space-sm)' }}>
          Юля, привет
        </h1>
      </div>

      <div className="screen-body">
        <p>Это не просто сообщение.</p>
        <p>Это официальный вход в твою летнюю миссию на 32 года.</p>

        <div className="card" style={{ marginTop: 'var(--space-md)' }}>
          <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, marginBottom: 'var(--space-sm)', fontSize: '0.9rem' }}>
            Участники миссии:
          </p>
          <ul>
            <li>Паша — организатор.</li>
            <li>Миша — главный специалист по обнимашкам.</li>
            <li>Юля — главная героиня.</li>
          </ul>
        </div>

        <div style={{ marginTop: 'var(--space-md)' }}>
          <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, marginBottom: 'var(--space-sm)', fontSize: '0.9rem' }}>
            Цель миссии:
          </p>
          <p>проверить, что приготовила для тебя судьба, Паша и один маленький человек с очень важным заданием.</p>
        </div>
      </div>

      <div className="screen-cta">
        <Button onClick={onNext}>Начать 🌸</Button>
      </div>
    </div>
  )
}
