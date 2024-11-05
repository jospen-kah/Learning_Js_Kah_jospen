import  { useState } from 'react';
import { Search, Bell, MailOpen, Logs, SunMedium, Grip, Menu } from 'lucide-react';
import Navbar from "./Navbar";

const Header = () => {
    // State to control navbar visibility
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);

    // Function to toggle navbar
    const toggleNavbar = () => {
        setIsNavbarOpen(!isNavbarOpen);
    };

    return (
        <div className='main-header'>
            <div className="headers">
                {/* Menu icon with onClick handler */}
                <div className='menu' onClick={toggleNavbar}>
                    <Menu color="#6b7785" size={24} />
                </div>

                <div className="search-bar">
                    <Search color="#6b7785" size={24} />
                    <input placeholder='Search' />
                </div>

                <div className="bar-content">
                    <div className="notification"><Bell />
                        <div className='dot'></div>
                    </div>
                    <div className="log"><Logs />
                        <div className='dot'></div>
                    </div>
                    <div className="mail"><MailOpen />
                        <div className='dot'></div>
                    </div>
                    <div className="mode"><SunMedium /></div>
                    <div className="profile-picture">
                        <img src='./user.jpeg' alt="User Profile" />
                    </div>
                    <div className="agenda"><Grip /></div>
                </div>
            </div>

            {/* Navbar component with conditional rendering */}
            {isNavbarOpen && <Navbar />}
        </div>
    );
};

export default Header;
