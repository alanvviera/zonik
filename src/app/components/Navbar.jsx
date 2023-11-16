'use client'
import {useState, useEffect} from 'react'

function NavLink({to, children}) {
    return <a href={to} className={`mx-4`}>
        {children}
    </a>
}

function MobileNav({open, setOpen}) {
    return (
        <div className={`absolute top-0 left-0 h-screen w-screen bg-[rgba(252, 189, 215, 0.2)] transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md lg:hidden bg-white `}>
            <div className="flex items-center justify-center filter drop-shadow-md bg-white h-20 "> {/*logo container*/}
                <a className="text-xl font-semibold" href="/">LOGO</a>
            </div>
            <div className="flex flex-col ml-4 ">
                <a className="text-xl font-medium my-4" href="/about" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    COMING SOON
                </a>
                <a className="text-xl font-normal my-4" href="/contact" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    COOMING SOON
                </a>
            </div>  
        </div>
    )
}

export default function Navbar() {

    
    const [open, setOpen] = useState(false)
    useEffect(() => {
        setOpen()
      }, [])
    return (
        
        <nav className="flex filter relative  drop-shadow-xl transparent p-1 h-20 items-center  
         ">
            
                <div className='flex filter  w-screen rounded-full mx-6 px-4 py-4 from-gray-900 to-gray-600 bg-gradient-to-r border-white'>
                        <MobileNav open={open} setOpen={setOpen}/>
                        <div className="w-2/6 flex items-center ml-5">
                            <a className="text-white text-2xl font-semibold" href="/"> ZONIK</a>
                        </div>
                        <div className="w-9/12 flex justify-end items-center">

                            <div className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden bg-white " onClick={() => {
                                setOpen(!open)
                            }}>
                                {/* hamburger button */}
                                <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5" : ""}`} />
                                <span className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
                                <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5" : ""}`} />
                            </div>

                            <div className="hidden md:flex text-white">
                                <NavLink to="/alumnos">
                                    Portfolio
                                </NavLink>
                                <NavLink to="/contact">
                                    Contact
                                </NavLink>
                            </div>
                        </div>
                </div>
            
        </nav>
    )
}