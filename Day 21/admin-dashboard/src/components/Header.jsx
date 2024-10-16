import { Search, Bell, MailOpen, Logs, SunMedium, Grip  } from 'lucide-react';



const Header = () => {

    return (
        <div className="headers">
            <div className="search-bar">
            <Search color="red" size={24} />
               <p>Search</p>
            </div>
            <div className="bar-content">
                <div className="notification" ><Bell />
                <div className='dot'></div>
                </div>
                <div className="notification"><Logs />
                <div className='dot'></div></div>
                <div className="notification"  ><MailOpen />
                <div className='dot'></div></div>
                <div className="mode" ><SunMedium /></div>
                <div className="profile-picture" ></div>
                <div className="agenda" ><Grip /></div>
            </div>
        </div>
    )
}

export default Header