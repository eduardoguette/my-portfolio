
const Header = () => {
  return (
    <header className="flex justify-between items-center py-4 mb-16 relative z-10">
      <h1 className="font-native text-2xl">
        <span className="font-bold underline decoration-wavy decoration-indigo-600">
          EG.
        </span>
      </h1>

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