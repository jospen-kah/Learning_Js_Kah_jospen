import { Search, Bell, MailOpen, Logs, SunMedium, Grip, Menu } from 'lucide-react';
// import ThemeContext  from './theme';


const Header = () => {

    return (
        <div className='main-header'>
            <div className="headers">
                <div className='menu'>
                    <Menu  color="#6b7785" size={24} />
                </div>
                <div className="search-bar">
                    <Search color="#6b7785" size={24} />
                    <input placeholder='Search' />
                </div>
                <div className="bar-content">
                    <div className="notification" ><Bell />
                        <div className='dot'></div>
                    </div>
                    <div className="log"><Logs />
                        <div className='dot'></div></div>
                        
                    <div className="mail"  ><MailOpen />
                    <div className='dot'></div></div>
                    
                    <div className="mode"  ><SunMedium /></div>
                    {/* {theme === 'light' ? '🌞 Light Mode' : '🌙 Dark Mode'} */}
                    <div className="profile-picture" ></div>
                    <div className="agenda" ><Grip /></div>
                </div>
            </div>
        </div>
    )
}

export default Header