import SiskiyouLogo from '@/app/components/SiskiyouLogo'
import HeaderButtons from '@/app/components/HeaderButtons'

export default async function Header() {
  return (
    <header
      style={{
        gridArea: 'header',
        padding: '1rem',
        height: '50px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <SiskiyouLogo />
      <HeaderButtons />
    </header>
  )
}
