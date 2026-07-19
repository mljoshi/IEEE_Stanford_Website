import React from 'react'

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { error: null }
  }

  static getDerivedStateFromError(error) {
    return { error }
  }

  render() {
    if (this.state.error) {
      return (
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem',
          background: '#0a0a0b',
          color: 'rgba(255,255,255,0.88)',
          fontFamily: 'system-ui, sans-serif',
        }}>
          <div style={{ maxWidth: '480px', textAlign: 'center' }}>
            <h1 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>Something went wrong</h1>
            <p style={{ color: 'rgba(255,255,255,0.55)', marginBottom: '1.25rem', lineHeight: 1.6 }}>
              The page hit a runtime error. Try a hard refresh (Ctrl+Shift+R).
            </p>
            {import.meta.env.DEV && (
              <pre style={{
                textAlign: 'left',
                fontSize: '0.75rem',
                padding: '1rem',
                borderRadius: '8px',
                background: '#141416',
                border: '1px solid rgba(255,255,255,0.1)',
                overflow: 'auto',
                color: '#e66',
              }}>
                {this.state.error.message}
              </pre>
            )}
          </div>
        </div>
      )
    }
    return this.props.children
  }
}
