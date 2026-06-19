import Button from '../components/Button'

export default function Screen09Gift({ onGiftChoice }) {
  return (
    <div className="screen">
      <div className="image-placeholder" style={{ height: 180 }} data-image-id="gift-certificate" />

      <div>
        <div className="tag">🎁 Финальный выбор героини</div>
        <h1 className="screen-title" style={{ marginTop: 'var(--space-sm)' }}>
          Юля, у тебя есть официальный сертификат на подарок.
        </h1>
      </div>

      <div className="card" style={{ border: '1.5px solid var(--color-blush)' }}>
        <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.85rem', color: 'var(--color-muted)', marginBottom: 'var(--space-sm)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          Сертификат героини
        </p>
        <p style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', lineHeight: 1.6 }}>
          Даёт право Юле выбрать подарок на день рождения:
        </p>
        <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.2rem', color: 'var(--color-rose)', margin: 'var(--space-sm) 0' }}>
          iPhone 17 или iPhone 18
        </p>
        <div className="divider" style={{ margin: 'var(--space-sm) 0' }} />
        <div style={{ fontSize: '0.8rem', color: 'var(--color-muted)', lineHeight: 1.6 }}>
          <p>Срок действия: до исполнения желания.</p>
          <p>Ответственный за исполнение: Паша.</p>
          <p>Моральная поддержка: Миша.</p>
          <p>Цветочное сопровождение: пионы.</p>
        </div>
      </div>

      <div className="screen-body">
        <p>Можно выбрать сразу. Можно подумать. Можно сначала обнять нас.</p>
        <p style={{ marginTop: 'var(--space-sm)', fontFamily: 'var(--font-display)', fontStyle: 'italic' }}>
          Но вообще лучше сначала обнять нас. А потом выбрать iPhone.
        </p>
      </div>

      <div className="screen-cta">
        <Button onClick={() => onGiftChoice('iphone17')}>Выбираю iPhone 17</Button>
        <Button onClick={() => onGiftChoice('iphone18')} variant="secondary">Выбираю iPhone 18</Button>
        <Button onClick={() => onGiftChoice('hug')} variant="ghost">Сначала обниму вас</Button>
      </div>
    </div>
  )
}
