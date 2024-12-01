import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className='shadow-lg sticky'>
        <div className="flex justify-between items-center max-w-6xl lg:max-7xl mx-auto p-3">
        <Link to="/" className="hover:opacity-90">
          <h1 className="font-bold text-xl sm:text-2xl flex flex-wrap">
            <span className="text-slate-500">Prime</span>
            <span className="text-slate-900">Insight</span>
          </h1>
        </Link>
        <form  className="p-2 bg-slate-100 rounded-lg flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="focus:outline-none bg-transparent w-24 sm:w-64"
          />
        <button>
            <FaSearch className="text-slate-600"/>
        </button>
        </form>
        <ul className="flex gap-4">
            <Link>
            <li className="hidden lg:inline text-slate-700 hover:underline">Home</li>
            </Link>
            <Link>
            <li className="hidden lg:inline text-slate-700 hover:underline">About</li>
            </Link>
            <Link>
            <li className="hidden lg:inline text-slate-700 hover:underline">News Articles</li>
            </Link>
            
        </ul>
        <Link to={"sign-in"}>Sign In</Link>
        </div>
      
    </header>
  )
}

export default Header
