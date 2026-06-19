import Button from '../components/Button'

export default function Screen07Superlike({ onNext }) {
  return (
    <div className="screen">
      <div>
        <div className="tag" style={{ background: '#FFF0F8', color: '#C06080' }}>⭐ Суперлайк</div>
        <h1 className="screen-title" style={{ marginTop: 'var(--space-sm)' }}>
          У вас новый суперлайк.
        </h1>
      </div>

      <div className="card" style={{ textAlign: 'center', border: '1.5px solid var(--color-blush)' }}>
        <div className="image-placeholder" style={{ height: 200, marginBottom: 'var(--space-md)' }} data-image-id="misha-peonies" />
        <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.85rem', color: 'var(--color-muted)', marginBottom: 'var(--space-xs)' }}>
          Отправитель:
        </p>
        <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.4rem', color: 'var(--color-deep)', marginBottom: 'var(--space-md)' }}>
          Миша
        </p>
        <div className="divider" style={{ marginBottom: 'var(--space-md)' }} />
        <p style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: '1.05rem', lineHeight: 1.6, color: 'var(--color-deep)' }}>
          «Мама, я тебя люблю.<br />У меня для тебя пионы.»
        </p>
      </div>

      <div className="screen-body">
        <p>Вероятность растрогаться: <strong>99,9%</strong>.</p>
        <p>Вероятность, что Паша тоже будет делать вид, что у него просто что-то в глаз попало: <strong>высокая</strong>.</p>
      </div>

      <div className="screen-cta">
        <Button onClick={onNext}>Принять пионы 🌸</Button>
      </div>
    </div>
  )
}
