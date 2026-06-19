import Button from '../components/Button'

export default function Screen05Dating2({ onNext }) {
  return (
    <div className="screen">
      <div className="card">
        <div className="image-placeholder" style={{ height: 140, marginBottom: 'var(--space-md)' }} data-image-id="candidate-2" />
        <div className="tag" style={{ marginBottom: 'var(--space-sm)' }}>Кандидат №2</div>
        <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.15rem', marginBottom: 'var(--space-md)' }}>
          «Просто куда-нибудь сходить»
        </p>
        <div className="divider" style={{ marginBottom: 'var(--space-md)' }} />
        <div className="screen-body">
          <p style={{ fontWeight: 700, marginBottom: 'var(--space-xs)' }}>О себе:</p>
          <p>нормальный вариант, приличный, местами даже симпатичный.</p>
          <p style={{ fontWeight: 700, marginTop: 'var(--space-sm)', marginBottom: 'var(--space-xs)' }}>Но есть проблема:</p>
          <ul>
            <li>без домика;</li>
            <li>без маршрута;</li>
            <li>без ощущения «вау, это всё для меня»;</li>
            <li>без маленького человека с пионами.</li>
          </ul>
          <p style={{ marginTop: 'var(--space-sm)', fontStyle: 'italic', color: 'var(--color-muted)' }}>
            Вывод: неплохо, но не дотягивает до дня рождения Юли.
          </p>
        </div>
      </div>

      <div className="screen-cta">
        <Button onClick={onNext}>Тоже не то</Button>
      </div>
    </div>
  )
}
