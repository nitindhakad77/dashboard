import { signOut } from 'firebase/auth';
import React from 'react'
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import Slider from '../components/Slider';
import Card from '../components/Card';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import SideNav from '../components/SideNav';

const Home = () => {

  // const user = JSON.parse(localStorage.getItem('user'));
  // const navigate = useNavigate();

  // const handleLogout = async () => {
  //   try {
  //     await signOut(auth);
  //     localStorage.removeItem('token');
  //     localStorage.removeItem('user');
  //     navigate("/login");
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  return (
    
      <div className="bg-white shadow-lg">
        <Header/>
        <div className="flex mt-20">
          <div className="w-1/4 h-screen sticky top-20 bg-white shadow-md z-10">
             <SideNav/>
          </div>
          <div className="w-1/2  justify-center items-center overflow-y-auto ">
            <Card/>
            <Slider/>
          </div>
          <div className="w-1/4 justify-center items-center overflow-y-auto">
            <Sidebar/>
          </div>
        </div>
      </div>
      // <button onClick={handleLogout}>Logout</button>
  )
}

export default Home