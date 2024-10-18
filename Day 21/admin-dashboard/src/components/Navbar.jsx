import { ChevronDown, Volleyball, Gauge, Droplet, Pencil, Puzzle, MousePointer2, BookText, Star, Bell, Calculator, Grid3x3, Layers, Map, Calendar, PieChart } from 'lucide-react';
import { NavLink } from "react-router-dom";
import { useState } from 'react';

const Navbar = () => {
    const [openDropdown, setOpenDropdown] = useState(null);

    const toggleDropdown = (dropdownId) => {
        setOpenDropdown(openDropdown === dropdownId ? null : dropdownId);
    };

    return (


        <div className="navbar">
            <div className='header-icon'>
                <div className='icon'><Volleyball size={30} color='rgba(255, 255, 255, 0.38)' /></div>
                <h2>Core UI</h2>
            </div>

            <div className='nav-content'>

                <NavLink
                    to='/'
                    className={'dashboard'}
                    end
                >
                    <div className='icon'><Gauge size={25} color='rgba(255, 255, 255, 0.38)' /></div>
                    <h4 className="name">Dashboard</h4>
                    <div className="new">New</div>

                </NavLink>


                <h3>THEME</h3>

                <NavLink
                    to='Color'
                    className={'dashboard'}
                    end
                >

                    <div className='icon'><Droplet size={25} color='rgba(255, 255, 255, 0.38)' /></div>
                    <h4 className="name">Colors</h4>

                </NavLink>

                <NavLink
                    to='Typography'
                    className={'dashboard'}
                    end
                >

                    <div className='icon'><Pencil size={25} color='rgba(255, 255, 255, 0.38)' /></div>
                    <h4 className="name">Typography</h4>

                </NavLink>


                <h3>COMPONENTS</h3>

                <div className="component">

                    {/* base */}
                    <div className="component-icon" onClick={() => toggleDropdown(1)}>
                        <div className='icon'><Puzzle size={25} color='rgba(255, 255, 255, 0.38)' /></div>
                        <h4 className="name">Base</h4>
                        <div className={`icon chevron ${openDropdown === 1 ? 'rotate' : ''}`}>
                            <ChevronDown size={25} color="rgba(255, 255, 255, 0.38)" />
                        </div>
                    </div>
                    <div>
                        {openDropdown === 1 && (
                            <ul className="dropdown">
                                <li className="dropdown-item">
                                    <NavLink
                                        to='Typography'
                                        className={'dashboard'}
                                        end
                                    >

                                        <h4 className="name">base</h4>

                                    </NavLink>
                                </li>
                                <li className="dropdown-item">
                                    <NavLink
                                        to='Typography'
                                        className={'dashboard'}
                                        end
                                    >

                                        <h4 className="name">base</h4>

                                    </NavLink>
                                </li>
                                <li className="dropdown-item">
                                    <NavLink
                                        to='Typography'
                                        className={'dashboard'}
                                        end
                                    >

                                        <h4 className="name">base</h4>

                                    </NavLink>
                                </li>
                                <li className="dropdown-item">
                                    <NavLink
                                        to='Typography'
                                        className={'dashboard'}
                                        end
                                    >

                                        <h4 className="name">base</h4>

                                    </NavLink>
                                </li>


                            </ul>
                        )}
                    </div>

                    {/* button */}
                    <div className="component-icon" onClick={() => toggleDropdown(2)}>
                        <div className='icon'><MousePointer2 size={25} color='rgba(255, 255, 255, 0.38)' /></div>
                        <h4 className="name">Button</h4>
                        <div className={`icon chevron ${openDropdown === 2 ? 'rotate' : ''}`}>
                            <ChevronDown size={25} color="rgba(255, 255, 255, 0.38)" />
                        </div>
                    </div>
                    <div>
                        {openDropdown === 2 && (
                            <ul className="dropdown">
                                <li className="dropdown-item">
                                    <NavLink
                                        to='Typography'
                                        className={'dashboard'}
                                        end
                                    >

                                        <h4 className="name">base</h4>

                                    </NavLink>
                                </li>
                                <li className="dropdown-item">
                                    <NavLink
                                        to='Typography'
                                        className={'dashboard'}
                                        end
                                    >

                                        <h4 className="name">base</h4>

                                    </NavLink>
                                </li>
                                <li className="dropdown-item">
                                    <NavLink
                                        to='Typography'
                                        className={'dashboard'}
                                        end
                                    >

                                        <h4 className="name">base</h4>

                                    </NavLink>
                                </li>
                                <li className="dropdown-item">
                                    <NavLink
                                        to='Typography'
                                        className={'dashboard'}
                                        end
                                    >

                                        <h4 className="name">base</h4>
                                       <div className="new" id='new'>New</div>

                                    </NavLink>
                                </li>
                            </ul>
                        )}
                    </div>

                    {/* forms */}
                    <div className="component-icon" onClick={() => toggleDropdown(3)}>
                        <div className='icon'><BookText size={25} color='rgba(255, 255, 255, 0.38)' /></div>
                        <h4 className="name">Forms</h4>
                        <div className={`icon chevron ${openDropdown === 3 ? 'rotate' : ''}`}>
                            <ChevronDown size={25} color="rgba(255, 255, 255, 0.38)" />
                        </div>
                    </div>
                    <div>
                        {openDropdown === 3 && (
                            <ul className="dropdown">
                                <li className="dropdown-item">
                                    <NavLink
                                        to='Typography'
                                        className={'dashboard'}
                                        end
                                    >

                                        <h4 className="name">base</h4>

                                    </NavLink>
                                </li>
                                <li className="dropdown-item">
                                    <NavLink
                                        to='Typography'
                                        className={'dashboard'}
                                        end
                                    >

                                        <h4 className="name">base</h4>

                                    </NavLink>
                                </li>
                                <li className="dropdown-item">
                                    <NavLink
                                        to='Typography'
                                        className={'dashboard'}
                                        end
                                    >

                                        <h4 className="name">base</h4>

                                    </NavLink>
                                </li>
                                <li className="dropdown-item">
                                    <NavLink
                                        to='Typography'
                                        className={'dashboard'}
                                        end
                                    >

                                        <h4 className="name">base</h4>

                                    </NavLink>
                                </li>
                            </ul>
                        )}
                    </div>

                    {/* icons */}
                    <div className="component-icon" onClick={() => toggleDropdown(4)}>
                        <div className='icon'><Star size={25} color='rgba(255, 255, 255, 0.38)' /></div>
                        <h4 className="name">Icons</h4>
                        <div className={`icon chevron ${openDropdown === 4 ? 'rotate' : ''}`}>
                            <ChevronDown size={25} color="rgba(255, 255, 255, 0.38)" />
                        </div>
                    </div>
                    <div>
                        {openDropdown === 4 && (
                            <ul className="dropdown">
                                <li className="dropdown-item">
                                    <NavLink
                                        to='Typography'
                                        className={'dashboard'}
                                        end
                                    >

                                        <h4 className="name">base</h4>

                                    </NavLink>
                                </li>
                                <li className="dropdown-item">
                                    <NavLink
                                        to='Typography'
                                        className={'dashboard'}
                                        end
                                    >

                                        <h4 className="name">base</h4>

                                    </NavLink>
                                </li>
                                <li className="dropdown-item">
                                    <NavLink
                                        to='Typography'
                                        className={'dashboard'}
                                        end
                                    >

                                        <h4 className="name">base</h4>

                                    </NavLink>
                                </li>
                                <li className="dropdown-item">
                                    <NavLink
                                        to='Typography'
                                        className={'dashboard'}
                                        end
                                    >

                                        <h4 className="name">base</h4>

                                    </NavLink>
                                </li>
                            </ul>
                        )}
                    </div>

                    <div className="component-icon" onClick={() => toggleDropdown(5)}>
                        <div className='icon'><Bell size={25} color='rgba(255, 255, 255, 0.38)' /></div>
                        <h4 className="name">Notifications</h4>
                        <div className={`icon chevron ${openDropdown === 5 ? 'rotate' : ''}`}>
                            <ChevronDown size={25} color="rgba(255, 255, 255, 0.38)" />
                        </div>
                    </div>
                    <div>
                        {openDropdown === 5 && (
                            <ul className="dropdown">
                                <li className="dropdown-item">
                                    <NavLink
                                        to='Typography'
                                        className={'dashboard'}
                                        end
                                    >

                                        <h4 className="name">base</h4>

                                    </NavLink>
                                </li>
                                <li className="dropdown-item">
                                    <NavLink
                                        to='Typography'
                                        className={'dashboard'}
                                        end
                                    >

                                        <h4 className="name">base</h4>

                                    </NavLink>
                                </li>
                                <li className="dropdown-item">
                                    <NavLink
                                        to='Typography'
                                        className={'dashboard'}
                                        end
                                    >

                                        <h4 className="name">base</h4>

                                    </NavLink>
                                </li>
                                <li className="dropdown-item">
                                    <NavLink
                                        to='Typography'
                                        className={'dashboard'}
                                        end
                                    >

                                        <h4 className="name">base</h4>

                                    </NavLink>
                                </li>
                            </ul>
                        )}
                    </div>

                    <NavLink
                        to='Widget'
                        className={'dashboard'}
                        end
                    >

                        <div className='icon'><Calculator size={25} color='rgba(255, 255, 255, 0.38)' /></div>
                        <h4 className="name">Widgets</h4>
                        <div className="new">New</div>

                    </NavLink>

                    <NavLink
                        to='Smart'
                        className={'dashboard'}
                        end
                    >

                        <div className='icon'><Grid3x3 size={25} color='rgba(255, 255, 255, 0.38)' /></div>
                        <h4 className="name">Smart Table</h4>
                        <div className="pro">Pro</div>

                    </NavLink>

                </div>

                <h3>PLUGINS</h3>

                <div className="plugin">

                    <NavLink
                        to='Calendar'
                        className={'dashboard'}
                        end
                    >

                        <div className='icon'><Calendar size={25} color='rgba(255, 255, 255, 0.38)' /></div>
                        <h4 className="name">Calendar</h4>
                        <div className="pro">Pro</div>

                    </NavLink>


                    <NavLink
                        to='Charts'
                        className={'dashboard'}
                        end
                    >

                        <div className='icon'><PieChart size={25} color='rgba(255, 255, 255, 0.38)' /></div>
                        <h4 className="name">Charts</h4>

                    </NavLink>


                    <NavLink
                        to='Map'
                        className={'dashboard'}
                        end
                    >

                        <div className='icon'><Map size={25} color='rgba(255, 255, 255, 0.38)' /></div>
                        <h4 className="name">Map</h4>
                        <div className="pro">Pro</div>

                    </NavLink>
                </div>

            </div>
        </div>




    );
};



export default Navbar;
