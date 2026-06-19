const RESULTS = {
  iphone17: {
    emoji: '📱',
    title: 'Выбор принят.',
    body: [
      'Паша сейчас делает вид, что был к этому полностью готов.',
      'Хотя, конечно, был.',
      'Осталось главное: приехать, получить пионы от Миши и начать свой день рождения красиво.',
    ],
  },
  iphone18: {
    emoji: '✨',
    title: 'Выбор принят.',
    body: [
      'Уровень подарка: героиня заслужила.',
      'Уровень Паши: старается соответствовать.',
      'Осталось главное: приехать, получить пионы от Миши и начать свой день рождения красиво.',
    ],
  },
  hug: {
    emoji: '🫂',
    title: 'Это правильный ответ.',
    body: [
      'Но iPhone всё равно будет.',
      'Миша отвечает за пионы.',
      'Паша отвечает за сюрприз.',
      'Юля отвечает только за то, чтобы быть счастливой.',
    ],
  },
}

export default function Screen10Result({ gameState }) {
  const result = RESULTS[gameState.giftChoice] || RESULTS.hug

  return (
    <div className="screen" style={{ justifyContent: 'center', textAlign: 'center' }}>
      <div style={{ animation: 'fadeUp 400ms ease-out 100ms both' }}>
        <p style={{ fontSize: '4rem', marginBottom: 'var(--space-md)' }}>{result.emoji}</p>
        <h1 className="screen-title" style={{ textAlign: 'center' }}>{result.title}</h1>
      </div>

      <div className="screen-body" style={{ animation: 'fadeUp 400ms ease-out 300ms both' }}>
        {result.body.map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </div>

      <div style={{ animation: 'fadeUp 400ms ease-out 500ms both', marginTop: 'var(--space-xl)' }}>
        <p style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: '1.2rem', color: 'var(--color-rose)' }}>
          С днём рождения, Юля 🌸
        </p>
        <p style={{ color: 'var(--color-muted)', fontSize: '0.85rem', marginTop: 'var(--space-sm)' }}>
          С любовью, Паша и Миша
        </p>
      </div>
    </div>
  )
}
