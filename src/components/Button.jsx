export default function Button({ children, onClick, variant = 'primary' }) {
  const base = {
    display: 'block',
    width: '100%',
    padding: '13px var(--space-lg)',
    borderRadius: '7px',
    fontFamily: 'var(--font-body)',
    fontSize: '0.86rem',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'transform 120ms ease, opacity 120ms ease',
    border: 'none',
    lineHeight: 1.3,
  }

  const variants = {
    primary: {
      background: 'linear-gradient(135deg, #e16884, #cf4f6d)',
      color: '#fff',
      boxShadow: '0 6px 14px rgba(173, 64, 88, .2)',
    },
    secondary: {
      background: '#8d967a',
      color: '#fff',
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
