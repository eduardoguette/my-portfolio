const Header = () => {
  const string = '{'
  const string2 = '}'
  return (
    <header className="flex justify-between items-center py-4 mb-16 relative z-10 header">
      <div className="max-content">
        <h1 className="font-bold font-mono text-xl">
          {string}
          <span className="text-indigo-500">EduardoGuette</span>
          {string2}
        </h1>
      </div>

      <nav className="flex items-center gap-2 text-gray-800">
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
