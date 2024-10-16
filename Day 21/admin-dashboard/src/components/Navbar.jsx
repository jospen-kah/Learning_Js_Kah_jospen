import { ChevronDown, Volleyball, Gauge, Droplet, Pencil, Puzzle, MousePointer2, BookText, Star, Bell, Calculator, Grid3x3, ChartPie, Columns2, Layers, Calendar } from 'lucide-react';
import { NavLink } from "react-router-dom";



const Navbar = () => {
    return (
        //Header of the Nav bar
        <div className="navbar">

            <div className="header-icon">
                <Volleyball size={40} color='rgba(255, 255, 255, 0.38)' />
            </div>

            <div className="icons">
                <NavLink
                    to='/'
                    className={({ isActive }) => (isActive ? 'color' : 'color1')}
                    end
                >
                    <div className='color'>
                        <div className='icon'><Gauge size={25} color='rgba(255, 255, 255, 0.38)' /></div>
                        <span className='text'>Dashboard</span>
                    </div>

                </NavLink>

                <h3 className='theme'>THEME</h3>

                <NavLink
                    to='/Color'
                    className={({ isActive }) => (isActive ? 'color' : 'color1')}

                >
                    <div className='color'>
                        <Droplet size={25} color='rgba(255, 255, 255, 0.38)' />
                        <span className='text'>color</span>
                    </div>

                </NavLink>

                <NavLink
                    to='/Typography'
                    className={({ isActive }) => (isActive ? 'color' : 'color1')}

                >
                    <div className='color'>
                        <Pencil size={25} color='rgba(255, 255, 255, 0.38)' />
                        <span className='text'>Typography</span>
                    </div>

                </NavLink>

                <h3 className='theme'>COMPONENTS</h3>
                <NavLink
                    to='/Typography'
                    className={({ isActive }) => (isActive ? 'color' : 'color1')}
                >
                    <div className='color'>
                        <Puzzle size={25} color='rgba(255, 255, 255, 0.38)' />
                        <span className='text'>Base</span>
                        <div className="drop"><ChevronDown color='rgba(255, 255, 255, 0.38)' /></div>
                    </div>

                </NavLink>

                <NavLink
                    to='/Typography'
                    className={({ isActive }) => (isActive ? 'color' : 'color1')}
                    end
                >
                    <div className='color'>
                        <MousePointer2 size={25} color='rgba(255, 255, 255, 0.38)' />
                        <span className='text'>Button</span>
                        <div className="drop"><ChevronDown color='rgba(255, 255, 255, 0.38)' /></div>
                    </div>
                </NavLink>
                <NavLink
                    to='/Typography'
                    className={({ isActive }) => (isActive ? 'color' : 'color1')}
                    end
                >
                    <div className='color'>
                        <BookText size={25} color='rgba(255, 255, 255, 0.38)' />
                        <span className='text'>Form</span>
                        <div className='drop'><ChevronDown color='rgba(255, 255, 255, 0.38)' /></div>
                    </div>
                </NavLink>
                <NavLink
                    to='/Typography'
                    className={({ isActive }) => (isActive ? 'color' : 'color1')}
                    end
                >
                    <div className='color'>
                        <Star size={25} color='rgba(255, 255, 255, 0.38)' />
                        <span className='text'>Icons</span>
                        <div className="drop"><ChevronDown color='rgba(255, 255, 255, 0.38)' /></div>
                    </div>
                </NavLink>
                <NavLink
                    to='/notifications'
                    className={({ isActive }) => (isActive ? 'color' : 'color1')}
                    end
                >
                    <div className='color'>
                        <Bell size={25} color='rgba(255, 255, 255, 0.38)' />
                        <span className='text'>Notifications</span>
                    </div>

                </NavLink>

                <NavLink
                    to='/widget'
                    className={({ isActive }) => (isActive ? 'color' : 'color1')}
                    end
                >
                    <div className='color'>
                        <Calculator size={25} color='rgba(255, 255, 255, 0.38)' />
                        <span className='text'>Widgets</span>
                    </div>
                </NavLink>

                <NavLink
                    to='/smart'
                    className={({ isActive }) => (isActive ? 'color' : 'color1')}
                    end
                >
                    <div className='color'>
                        <Grid3x3 size={25} color='rgba(255, 255, 255, 0.38)' />
                        <span className='text'>Smart Table</span>
                    </div>
                </NavLink>

                <h3 className='theme'>PLUGINS</h3>
                <NavLink
                    to='/calendar'
                    className={({ isActive }) => (isActive ? 'color' : 'color1')}
                    end
                >

                    <div className='color'>
                        <Calendar size={25} color='rgba(255, 255, 255, 0.38)' />
                        <span className='text'>Calendar</span>
                    </div>
                </NavLink>

                <NavLink
                    to='/charts'
                    className={({ isActive }) => (isActive ? 'color' : 'color1')}
                    end
                >
                    <div className='color'>
                        <ChartPie size={25} color='rgba(255, 255, 255, 0.38)' />
                        <span className='text'>Charts</span>
                    </div>
                </NavLink>

                <NavLink
                    to='/map'
                    className={({ isActive }) => (isActive ? 'color' : '')}
                    end
                >
                    <div className='color'>
                        <Columns2 size={25} color='rgba(255, 255, 255, 0.38)' />
                        <span className='text'>Google Maps </span>
                    </div>
                </NavLink>

                <h3 className='theme'>EXTRAS</h3>
                <NavLink
                    to='/pages'
                    className={({ isActive }) => (isActive ? 'color' : '')}
                    end
                >
                    <div className='color'>
                        <Star size={25} color='rgba(255, 255, 255, 0.38)' />
                        <span className='text'>Pages</span>
                    </div>
                </NavLink>

                <NavLink
                    to='/apps'
                    className={({ isActive }) => (isActive ? 'color' : '')}
                    end
                >
                    <div className='color'>
                        <Layers size={25} color='rgba(255, 255, 255, 0.38)' />
                        <span className='text'>Apps</span>
                    </div>
                </NavLink>


            </div>
        </div>
    )
}



export default Navbar;