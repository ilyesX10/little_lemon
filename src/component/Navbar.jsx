import React from 'react'
import Logo from '../assets/Logo.svg'
import MenuIcon from '../assets/hamburger_menu.svg'
import { CgCloseR } from "react-icons/cg";
import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
function Navbar() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    useEffect(()=>{
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        }
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    },[isMobile])
  return (
        <nav className={`h-20 fixed top-0 right-0 left-0 z-100 p-2 flex items-center ${isMobile ? "justify-between" : "justify-around"} overflow-hidden bg-white text-[var(--text)]`}>
            <a href="/" className="flex items-center"><img src={Logo} alt="Little Lemon Logo" /></a>
            {isMobile?(
                <>
                <button onClick={()=>setIsMenuOpen(prev=>!prev)} className="p-1 py-2 text-[var(--text)] hover:cursor-pointer">
                    {isMenuOpen ? <CgCloseR className="w-10 h-10" /> : <img src={MenuIcon} alt="Menu" className="w-10 h-10" />}
                </button>
                <aside className={`flex flex-col fixed z-100 top-20 right-0 w-full bg-white p-4 rounded-b-[var(--radius)] shadow-lg right-0 transition-transform duration-300 ${isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-30"}`}>
                    <ul className="flex flex-col items-center space-y-4 font-[var(--weight-bold)]">
                        <li><NavLink to="/" className={({ isActive }) => isActive ? "p-3 rounded-[var(--radius)] bg-[var(--surface)]" : "p-3 rounded-[var(--radius)] hover:bg-[var(--surface)]"}>Home</NavLink></li>
                        <li><NavLink to="/About" className={({ isActive }) => isActive ? "p-3 rounded-[var(--radius)] bg-[var(--surface)]" : "p-3 rounded-[var(--radius)] hover:bg-[var(--surface)]"}>About</NavLink></li>
                        <li><NavLink to="/Menu" className={({ isActive }) => isActive ? "p-3 rounded-[var(--radius)] bg-[var(--surface)]" : "p-3 rounded-[var(--radius)] hover:bg-[var(--surface)]"}>Menu</NavLink></li>
                        <li><NavLink to="/Booking" className={({ isActive }) => isActive ? "p-3 rounded-[var(--radius)] bg-[var(--surface)]" : "p-3 rounded-[var(--radius)] hover:bg-[var(--surface)]"}>Reservations</NavLink></li>
                        <li><NavLink to="/Order_Online" className={({ isActive }) => isActive ? "p-3 rounded-[var(--radius)] bg-[var(--surface)]" : "p-3 rounded-[var(--radius)] hover:bg-[var(--surface)]"}>Order Online</NavLink></li>
                        <li><NavLink to="/Login" className={({ isActive }) =>isActive ? "p-3 rounded-[var(--radius)] bg-[var(--surface)]" : "p-3 rounded-[var(--radius)] hover:bg-[var(--surface)]"}>Login</NavLink></li>
                    </ul>
                </aside>
                </>
            ):
            (<>
            <ul className="flex gap-4">
                <li><NavLink to="/" className={({ isActive }) => isActive ? "p-3 rounded-[var(--radius)] bg-[var(--surface)]" : "p-3 rounded-[var(--radius)] hover:bg-[var(--surface)]"}>Home</NavLink></li>
                <li><NavLink to="/About" className={({ isActive }) => isActive ? "p-3 rounded-[var(--radius)] bg-[var(--surface)]" : "p-3 rounded-[var(--radius)] hover:bg-[var(--surface)]"}>About</NavLink></li>
                <li><NavLink to="/Menu" className={({ isActive }) => isActive ? "p-3 rounded-[var(--radius)] bg-[var(--surface)]" : "p-3 rounded-[var(--radius)] hover:bg-[var(--surface)]"}>Menu</NavLink></li>
                <li><NavLink to="/Booking" className={({ isActive }) => isActive ? "p-3 rounded-[var(--radius)] bg-[var(--surface)]" : "p-3 rounded-[var(--radius)] hover:bg-[var(--surface)]"}>Reservations</NavLink></li>
                <li><NavLink to="/Order_Online" className={({ isActive }) => isActive ? "p-3 rounded-[var(--radius)] bg-[var(--surface)]" : "p-3 rounded-[var(--radius)] hover:bg-[var(--surface)]"}>Order Online</NavLink></li>
                <li><NavLink to="/Login" className={({ isActive }) => isActive ? "p-3 rounded-[var(--radius)] bg-[var(--surface)]" : "p-3 rounded-[var(--radius)] hover:bg-[var(--surface)]"}>Login</NavLink></li>
            </ul>
            </>
            )}
        </nav>
  )
}

export default Navbar