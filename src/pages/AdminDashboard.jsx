import AdminQuestion from "../components/AdminQuestion"
import Users from "../components/Users"
import { db } from "../firebase"
import { collection, getDocs } from "firebase/firestore"
import { useState, useEffect } from "react"

const AdminDashboard = () => {
    const [users, setUsers] = useState([{}])

    const fetchPost = async () => {
         
      await getDocs(collection(db, "users"))
          .then((querySnapshot)=>{               
              const newData = querySnapshot.docs
                  .map((doc) => ({...doc.data(), id:doc.id }));
              setUsers(newData);                
              console.log(users, newData);
          })
     
  }
  
  useEffect(()=>{
      fetchPost();
  }, [])

    return (
        <div className="admin-dashboard">
            <div className="flex justify-between items-center">
                <h1 className="text-[24px] font-bold">Questions</h1>
                <button className="rounded-lg bg-black text-white p-3">Add Questions</button>
            </div>
            <div>
                <AdminQuestion />
            </div>
            <div className="flex justify-between items-center">
                <h1 className="text-[24px] font-bold">Users</h1>
            </div>
            <div>
                <Users users={users} />
            </div>
        </div>
    )
}

export default AdminDashboard