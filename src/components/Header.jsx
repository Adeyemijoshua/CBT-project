import avatar from "../assets/avatar.png"
import { useState } from "react"
import { Link } from "react-router-dom"
import { useAuthValue } from "../context/AuthContext"
import { signOut } from 'firebase/auth' 
import { auth } from '../firebase'

const Header = () => {
  const [showMenu, setshowMenu] = useState(false)
  const {currentUser} = useAuthValue()

  const toggleMenu = () => {
    setshowMenu(prevShowMenu => !prevShowMenu)
  }

  return (
    <div className="header z-10 bg-white flex w-[100%] justify-between items-center py-8">
    <h1 className="logo text-2xl font-bold">Testly</h1>
        <div className="relative account flex items-center space-x-3">
          <div onClick={toggleMenu} className="avatar rounded-[50%] overflow-hidden w-10 cursor-pointer">
              <img src={avatar} alt="" />
          </div>
          <h2 className='font-bold'>{currentUser?.email}</h2>
          { showMenu && <div className="menu absolute bg-white shadow-md rounded-[10px] flex flex-col p-4 pr-10 gap-4 top-12 left: 0 z-40">
            <Link to="/">Dashboard</Link>
            <Link to="/settings">Settings</Link>
            <div onClick={() => signOut(auth)}>Log Out</div>
          </div> }
        </div>
    </div>
  )
}

export default Header