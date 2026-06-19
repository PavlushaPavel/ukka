export default function Button({ children, onClick, variant = 'primary' }) {
  const base = {
    display: 'block',
    width: '100%',
    padding: '15px var(--space-lg)',
    borderRadius: 'var(--radius-md)',
    fontFamily: 'var(--font-body)',
    fontSize: '0.95rem',
    fontWeight: 700,
    cursor: 'pointer',
    transition: 'transform 120ms ease, opacity 120ms ease',
    border: 'none',
    lineHeight: 1.3,
  }

  const variants = {
    primary: {
      background: 'var(--color-rose)',
      color: '#fff',
    },
    secondary: {
      background: 'var(--color-surface)',
      color: 'var(--color-rose)',
      border: '1.5px solid var(--color-blush)',
    },
    ghost: {
      background: 'transparent',
      color: 'var(--color-muted)',
      border: '1.5px solid var(--color-divider)',
    },
  }

  return (
    <button
      style={{ ...base, ...variants[variant] }}
      onClick={onClick}
      onMouseDown={e => { e.currentTarget.style.transform = 'scale(0.97)'; e.currentTarget.style.opacity = '0.9' }}
      onMouseUp={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.opacity = '1' }}
      onTouchStart={e => { e.currentTarget.style.transform = 'scale(0.97)'; e.currentTarget.style.opacity = '0.9' }}
      onTouchEnd={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.opacity = '1' }}
    >
      {children}
    </button>
  )
}
