import resume from "../assets/SiddhantShah.pdf"
import React from 'react';
import { useState } from "react";
import { Link } from "react-router-dom";
import { Fragment } from 'react'
import { Disclosure } from '@headlessui/react' //Menu, Transition
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import logo from '../assets/n.jpg';
const navigation = [
  {name: 'Siddhant Shah', href:'./', current: true},
  { name: 'Education', href: './education', current: false },
  { name: 'Blogs', href: './blogs', current: false },
  { name: 'Projects', href: './projects', current: false },
  { name: 'Experience', href: './experience', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
export default function Navbar() {
    
    // const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false

//     return (
//         <>
//     <nav className=' z-50 bg-dark-500 w-full top-0 left-0 px-8 py-2 lg:px-20 text-white dark:text-black xl:px-36 border-b border-zinc-300 dark:border-b dark:border-teal-800'>
//         {/* <div className="flex justify-between items-center text-white">
//              <button
//                 className="toggle"
//                 onClick={() => setNavbarOpen((prev) => !prev)}
//             >
//                 {navbarOpen ? 'close' : 'open'}
//             </button> 
//             <Link to="/" className='text-2xl'>Siddhant Shah</Link>
//             <ul className={`hidden md:flex menu-nav ${navbarOpen ? ' show-menu':''}`}>
//                 <li className="p-2 md:text-xl"><Link to='/projects' className="hover:underline">Projects</Link></li>
//                 <li className="p-2 md:text-xl"><Link to="/blogs" className="hover:underline">Blogs</Link></li>
//             </ul> 
//             <a href={resume} rel="noreferrer" target="_blank" className=" bg-teal-500 rounded-full px-4 py-1 border border-teal-800 border-4">Resume</a>
//         </div> */}
//          <section className="MOBILE-MENU justify-between flex lg:hidden">
//           <div className="flex-row">
//           <div
//             className="HAMBURGER-ICON space-y-2"
//             onClick={() => setIsNavOpen((prev) => !prev)} 
//           >
//             <span className="block h-0.5 w-8 bg-white "></span>
//             <span className="block h-0.5 w-8 bg-white "></span>
//             <span className="block h-0.5 w-8 bg-white "></span>
//           </div>

//           <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}> 
//             <div
//               className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
//               onClick={() => setIsNavOpen(false)} 
//             >
//               <svg
//                 className="h-8 w-8 text-gray-600"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               >
//                 <line x1="18" y1="6" x2="6" y2="18" color="white"/>
//                 <line x1="6" y1="6" x2="18" y2="18" color="white"/>
//               </svg>
//             </div>
//             <Link to="/" className='text-2xl dark:text-white'  onClick={() => setIsNavOpen(false)}>Siddhant Shah</Link>
//             <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center text-white justify-between min-h-[250px]">
//               <li className="border-b border-gray-400 my-8 ">
//                 <Link to="/projects" onClick={() => setIsNavOpen(false)}>Projects</Link>
//               </li>
//               <li className="border-b border-gray-400 my-8 ">
//                 <Link to="/blogs"  onClick={() => setIsNavOpen(false)}>Blogs</Link>
//               </li>
//               <li className="border-b border-gray-400 my-8 ">
//                 <Link to="/education"  onClick={() => setIsNavOpen(false)}>Education</Link>
//               </li>
             
//             </ul>
//           </div>
//           </div>
//           <div className="float-right flex-row">
//           <a href={resume} rel="noreferrer" target="_blank" className=" bg-teal-500 rounded-full px-4 py-1 border border-teal-800 border-4">Resume</a>
//           </div>
//         </section>


// {/* 
//           <div className="DESKTOP-MENU text-white hidden lg:flex justify-between">
//         <ul className=" space-x-8 flex-row">
//           <li>
//           <Link to="/" className='text-2xl dark:text-white flex-col'>Siddhant Shah</Link>
//           </li>
//         <li className=" flex-col">
//                 <Link to="/projects " >Projects</Link>
//               </li>
//               <li className=" flex-col">
//                 <Link to="/blogs"  >Blogs</Link>
//               </li>
//               <li className="flex-col">
//                 <Link to="/education" >Education</Link>
//               </li>
//         </ul>
        
//         <div className="float-right hidden lg:flex">
//           <a href={resume} rel="noreferrer" target="_blank" className=" bg-teal-500 rounded-full px-4 py-1 border border-teal-800 border-4">Resume</a>
//           </div>
//           </div> */}
//       </nav>
//       <style>{`
//       .hideMenuNav {
//         display: none;
//       }
//       .showMenuNav {
//         display: block;
//         position: absolute;
//         width: 100%;
//         height: 100vh;
//         top: 0;
//         left: 0;
//         background: black;
//         z-index: 10;
//         display: flex;
//         flex-direction: column;
//         justify-content: space-evenly;
//         align-items: center;
//       }
//     `}</style>
//     </>
//     )
return (
  <Disclosure as="nav" className="bg-gray-800">
    {({ open }) => (
      <>
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button*/}
              <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                )}
              </Disclosure.Button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                {/* First image is for the mobile view, second one is for desktop view */}
                <img
                  className="block h-8 w-auto lg:hidden rounded-full"
                  src={logo}
                  alt="Siddhant Shah"
                />
                <img
                  className="hidden rounded-full h-8 w-auto lg:block"
                  src={logo}
                  alt="Siddhant Shah"
                />
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <Link
                      // key={item.name}
                      to={item.href}
                      className={classNames(
                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'rounded-md px-3 py-2 text-sm font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button
                type="button"
                // className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <span className="sr-only">View Resume</span>
                <a href={resume} rel="noreferrer" target="_blank" className=" bg-teal-500 rounded-full px-4 py-1 border border-teal-800 border-4">Resume</a>
              </button>

              {/* Profile dropdown */}
              {/* <Menu as="div" className="relative ml-3">
                <div>
                  <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-8 w-8 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                        >
                          Your Profile
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                        >
                          Settings
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                        >
                          Sign out
                        </a>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
              </Menu> */}
            </div>
          </div>
        </div>

        <Disclosure.Panel className="sm:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {navigation.map((item) => (
              <Disclosure.Button
                key={item.name}
                // as="a"
                // href={item.href}
                className={classNames(
                  item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                  'block rounded-md px-3 py-2 text-base font-medium'
                )}
                aria-current={item.current ? 'page' : undefined}
              >
                <Link to={item.href}>{item.name}</Link>
              </Disclosure.Button>
            ))}
          </div>
        </Disclosure.Panel>
      </>
    )}
  </Disclosure>
)
}