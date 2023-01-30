import { Link } from "react-router-dom"
import bg from "../assets/splash.jpg"
import PrimaryBtn from "../components/PrimaryBtn"

const AdminLogin = () => {
  return (
    <div className="login flex h-screen">
        <img src={bg} alt="" className="w-[50%] fixed top-0 hidden md:block" />
        <div className="md:max-w-[50%] w-[100%] md:w-[70em] m-auto login-container flex justify-center items-center md:ml-[50%]">
            <form className="border-2 rounded-[10px] flex flex-col p-10 w-[60%]">
                <h1 className="text-3xl font-bold pb-10">Admin Login</h1>
                <input className="border-2 p-3 rounded-[10px] mb-10 outline-none" type="email" placeholder="email" />
                <input className="border-2 p-3 rounded-[10px] mb-10 outline-none" type="password" placeholder="password" />
                <PrimaryBtn text="Log in as admin" />
                <Link to="/login" className="text-primary font-medium text-center underline pt-4">Login as student</Link>
            </form>
        </div>
    </div>
  )
}

export default AdminLogin