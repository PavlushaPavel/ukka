import Button from '../components/Button'

export default function Screen08Invite({ onNext }) {
  return (
    <div className="screen">
      <div className="image-placeholder" style={{ height: 200 }} data-image-id="house-invite" />

      <div>
        <div className="tag">Приглашение</div>
        <h1 className="screen-title" style={{ marginTop: 'var(--space-sm)' }}>
          Юля, ты приглашена в маленькое летнее путешествие.
        </h1>
      </div>

      <div className="screen-body">
        <p>Мы сняли домик, чтобы у тебя был день без суеты, дел и забот.</p>

        <div className="card" style={{ marginTop: 'var(--space-md)', display: 'flex', flexWrap: 'wrap', gap: 'var(--space-sm)' }}>
          {['Только лето.', 'Дорога.', 'Отдых.', 'Мы рядом.', 'И ты — самая главная.'].map(item => (
            <span key={item} className="tag">{item}</span>
          ))}
        </div>

        <p style={{ marginTop: 'var(--space-md)', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.05rem' }}>
          Тебе 32.
        </p>
        <p style={{ marginTop: 'var(--space-sm)' }}>
          Ты добрая, красивая, любимая, настоящая, наша. Ты умеешь создавать тепло вокруг себя — дома, в семье, в новой квартире, в обычных днях и в самых важных моментах.
        </p>
        <p style={{ marginTop: 'var(--space-sm)' }}>
          И мы с Мишей очень хотим, чтобы ты почувствовала это не на словах, а целым днём.
        </p>
      </div>

      <div className="screen-cta">
        <Button onClick={onNext}>Открыть подарок 🎁</Button>
      </div>
    </div>
  )
}
