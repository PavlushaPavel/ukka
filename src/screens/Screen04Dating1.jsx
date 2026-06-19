import Button from '../components/Button'

export default function Screen04Dating1({ onNext }) {
  return (
    <div className="screen">
      <div>
        <div className="tag">💘 Быстрые свидания</div>
        <h1 className="screen-title" style={{ marginTop: 'var(--space-sm)' }}>
          Добро пожаловать на быстрые свидания с вариантами праздника
        </h1>
      </div>

      <div className="card">
        <div className="image-placeholder" style={{ height: 140, marginBottom: 'var(--space-md)' }} data-image-id="candidate-1" />
        <div className="tag" style={{ marginBottom: 'var(--space-sm)' }}>Кандидат №1</div>
        <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.15rem', marginBottom: 'var(--space-md)' }}>
          «Просто посидеть дома»
        </p>
        <div className="divider" style={{ marginBottom: 'var(--space-md)' }} />
        <div className="screen-body">
          <p style={{ fontWeight: 700, marginBottom: 'var(--space-xs)' }}>О себе:</p>
          <p>стабильный, привычный, без сюрпризов.</p>
          <p style={{ fontWeight: 700, marginTop: 'var(--space-sm)', marginBottom: 'var(--space-xs)' }}>Плюсы:</p>
          <p>никуда не надо ехать.</p>
          <p style={{ fontWeight: 700, marginTop: 'var(--space-sm)', marginBottom: 'var(--space-xs)' }}>Минусы:</p>
          <p>слишком мало магии для Юли. И вообще, Юля — летний человек. Её нельзя держать дома в такой день.</p>
        </div>
      </div>

      <div className="screen-cta">
        <Button onClick={onNext}>Не подходит</Button>
      </div>
    </div>
  )
}
