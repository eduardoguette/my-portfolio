const Header = () => {
  const string = '<'
  const string2 = '/>'
  return (
    <header className="flex justify-between items-center py-4 mb-16 relative z-10 header  lg:w-[80ch] mx-auto">
      

      <nav className="hidden items-center gap-2 ml-auto">
        <a href="/" className="hover:text-indigo-600">
          EN
        </a>
        <span>{'/'}</span>
        <a href="/es" className="hover:text-indigo-600">
          ES
        </a>
      </nav>
    </header>
  )
}

export default Header
