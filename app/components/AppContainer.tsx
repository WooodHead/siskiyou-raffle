export const AppContainer = ({ children }: { children: React.ReactNode }) => (
  <div style={{
    display: 'flex',
    height: '100vh',
    width: '100vw',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  }}>{children}</div>
)
