export const A = '/ukka/assets/'

export function Photo({ src, alt = '', className = '', position }) {
  return <img className={`photo ${className}`} src={`${A}${src}`} alt={alt} style={{ objectPosition: position }} />
}

export function Polaroid({ src, label, className = '', position }) {
  return (
    <figure className={`polaroid ${className}`}>
      <Photo src={src} alt={label} position={position} />
      <figcaption>{label} <span>♡</span></figcaption>
    </figure>
  )
}

export function Peony({ className = '' }) {
  return <span className={`peony ${className}`} aria-hidden="true">🌸</span>
}

export function StartCollage() {
  return (
    <div className="start-collage scrapbook-panel">
      <p className="hero-kicker">Мини-эп в Telegram</p>
      <h1><span>Юля 32:</span><br />мэтч со счастьем</h1>
      <Polaroid src="yulia-field.webp" label="Юля" className="portrait-yulia" position="50% 42%" />
      <Polaroid src="pasha-portrait.webp" label="Паша" className="portrait-pasha" />
      <Polaroid src="misha-original.webp" label="Миша" className="portrait-misha" position="50% 35%" />
      <Peony className="peony-left" /><span className="doodle-heart">♡</span>
    </div>
  )
}

export function NatalWheel() {
  const signs = ['☀','☾','♎','♏','♐','♑','♒','♓','♈','♉','♊','♋']
  return (
    <div className="natal-wrap">
      <div className="natal-wheel">
        {signs.map((s, i) => <span key={s} style={{ transform: `rotate(${i * 30}deg) translateY(-78px) rotate(${-i * 30}deg)` }}>{s}</span>)}
        <div className="natal-flower">🌸</div>
      </div>
      <span className="orbit-note note-sun">☀ дорога</span>
      <span className="orbit-note note-love">♡ любовь</span>
      <span className="orbit-note note-home">⌂ дом</span>
    </div>
  )
}

export function RouteMap() {
  return (
    <div className="route-map" aria-label="Карта маршрута">
      <svg viewBox="0 0 320 170" role="img">
        <path className="map-road" d="M-10 42 C55 55 72 18 138 44 S230 70 330 32 M20 155 C66 110 122 136 164 92 S245 74 320 126 M88 -10 C103 47 80 85 112 180" />
        <path className="route-line" d="M46 132 C74 94 112 116 144 78 S214 44 267 64" />
        <circle cx="45" cy="132" r="5"/><circle cx="267" cy="64" r="5"/>
        <path className="route-heart" d="M257 50c-8-10-23 2 0 18 23-16 8-28 0-18z"/>
      </svg>
      <span className="map-label from">мы</span><span className="map-label to">сюрприз</span>
    </div>
  )
}

export function GiftPhones() {
  return (
    <div className="gift-phones" aria-label="iPhone 17 или iPhone 18">
      <div><span className="phone pink"><i/><b></b></span><em>iPhone 17</em></div>
      <span className="gift-or">или<br/>♡</span>
      <div><span className="phone sage"><i/><b></b></span><em>iPhone 18</em></div>
    </div>
  )
}
