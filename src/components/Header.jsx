
const Header = () => {
  return (
    <header class="flex justify-between items-center py-4 mb-16 relative z-10">
      <h1 class="font-native text-2xl">
        <span class="font-bold underline decoration-wavy decoration-indigo-600">
          EG.
        </span>
      </h1>

      <nav class="flex items-center gap-2 text-gray-800">
        <a href="/" class="hover:text-indigo-600">
          EN
        </a>
        <span>{'/'}</span>
        <a href="/es" class="hover:text-indigo-600">
          ES
        </a>
      </nav>
    </header>
  )
}

export default Header