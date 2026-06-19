import Button from '../components/Button'

export default function Screen06Dating3({ onNext }) {
  return (
    <div className="screen">
      <div className="card" style={{ border: '1.5px solid var(--color-blush)' }}>
        <div className="image-placeholder" style={{ height: 160, marginBottom: 'var(--space-md)' }} data-image-id="candidate-3-match" />
        <div className="tag" style={{ marginBottom: 'var(--space-sm)', background: 'var(--color-blush)', color: 'var(--color-deep)' }}>Кандидат №3</div>
        <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.15rem', marginBottom: 'var(--space-md)' }}>
          «Домик, лето, дорога и любовь»
        </p>
        <div className="divider" style={{ marginBottom: 'var(--space-md)' }} />
        <div className="screen-body">
          <p style={{ fontWeight: 700, marginBottom: 'var(--space-xs)' }}>О себе:</p>
          <p>люблю путешествия, уют, красивые моменты, семейные обнимашки и дни, которые потом хочется вспоминать.</p>
          <p style={{ fontWeight: 700, marginTop: 'var(--space-sm)', marginBottom: 'var(--space-xs)' }}>В комплекте:</p>
          <ul>
            <li>Паша — организовал.</li>
            <li>Миша — участвует.</li>
            <li>Пионы — будут.</li>
            <li>Домик — снят.</li>
            <li>Юля — главная.</li>
          </ul>
        </div>
      </div>

      <div className="screen-body" style={{ textAlign: 'center' }}>
        <p>Кажется, это не просто кандидат.</p>
        <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.1rem', color: 'var(--color-rose)', marginTop: 'var(--space-xs)' }}>
          Кажется, это мэтч.
        </p>
      </div>

      <div className="screen-cta">
        <Button onClick={onNext}>Это мэтч 💘</Button>
      </div>
    </div>
  )
}
