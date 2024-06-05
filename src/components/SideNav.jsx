import React from 'react'
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

function SideNav() {
  const user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  }
  
  
  return (
    <div className=''>
      <nav class="py-4 px-6">
              <a href="#" class="flex items-center  text-gray-700 hover:text-indigo-500 py-2">
              <img src="home.png" alt="Home" className='mr-3'/>
              Home
              </a>
              <a href="#" class="flex items-center text-gray-700 hover:text-indigo-500 py-2">
              <img src="notification.png" alt="Notification" className='mr-3'/>
              Notification
              </a>
              <a href="#" class="flex items-center text-gray-700 hover:text-indigo-500 py-2">
              <img src="heart.png" alt="Shop" className='mr-3'/>
              Shop
              </a>
              <a href="#" class="flex items-center text-gray-700 hover:text-indigo-500 py-2">
              <img src="message.png" alt="Logout" className='mr-3'/>
              Conversation
              </a>
              <a href="#" class="flex items-center text-gray-700 hover:text-indigo-500 py-2">
              <img src="message1.png" alt="Home" className='mr-3'/>
              Wallet
              </a>
              <a href="#" class="flex items-center text-gray-700 hover:text-indigo-500 py-2">
              <img src="favorite.png" alt="Home" className='mr-3'/>
              Subscription
              </a>
              <a href="#" class="flex items-center text-gray-700 hover:text-indigo-500 py-2">
              <img src="profile.png" alt="Home" className='mr-3'/>
              My Profile
              </a>
              <a href="#" class="flex items-center text-gray-700 hover:text-indigo-500 py-2">
              <img src="setting.png" alt="Home" className='mr-3'/>
              Settings
              </a>
              <button onClick={handleLogout} class="flex items-center px-4 mt-56 bg-white text-green-200 font-semibold rounded-lg  hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
              <img src="logout.svg" alt="Icon" class="w-6 h-6 mr-2"/>
                Logout
              </button>
            </nav>
            
            
            
           
    </div>
  )
}

export default SideNav
