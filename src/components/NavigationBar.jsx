import React, { useState } from "react";
import { PiHamburgerDuotone } from "react-icons/pi";
import chefLogo from '../assets/cheflogo.png'


const NavigationBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className={`flex w-full items-center bg-white  z-50`}>
      <div className="container">
        <div className="relative -mx-4 flex items-center justify-between">
          <div className="w-60 max-w-full px-4">
            <a href="/chat" className="block w-full py-1">
              <img
                src={chefLogo}
                alt="logo"
                className=""
                height={60}
                width={60}
                
              />
              <img
                src={chefLogo}
                alt="logo"
                className="hidden "
              />
            </a>
          </div>
          {/* <div className="flex w-full items-center justify-between px-4">
            <div>
              <button
                onClick={() => setOpen(!open)}
                id="navbarToggler"
                className={`navbarTogglerActive ${
                  open?"navbarTogglerActive rotate-90":""
                } absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden transition-transform duration-500 ease-in-out`}
              >
                <PiHamburgerDuotone  size={40}/>

              </button>
              <nav
                // :className="!navbarOpen && 'hidden' "
                id="navbarCollapse"
                className={`absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white px-6 py-5 shadow dark:bg-white lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none lg:dark:bg-transparent ${
                  !open && "hidden"
                } `}
              >
                <ul className="block lg:flex">
                  <ListItem NavLink="/home">Home</ListItem>
                  <ListItem NavLink="/chat">Chat</ListItem>
                  <ListItem NavLink="/about">About</ListItem>
                  <ListItem NavLink="/blog">Blog</ListItem>
                </ul>
              </nav>
            </div>
            <div className="hidden justify-end pr-16 sm:flex lg:pr-0">
              <a
                href="/signin"
                className="px-7 py-3 text-base font-medium text-dark  dark:text-black"
              >
                Sign in
              </a>

              <a
                href="/signup"
                className="rounded-md bg-blue-400 px-7 py-3 text-base font-medium text-black "
              >
                Sign Up
              </a>
            </div>
          </div> */}

          <div className="w-full text-center font-bold text-2xl mr-36 text-gray-800">
            Generate Food recipe with AI
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavigationBar;

const ListItem = ({ children, NavLink }) => {
  return (
    <>
      <li>
        <a
          href={NavLink}
          className="flex py-2 text-base font-medium text-body-color hover:text-dark dark:text-black dark:hover:text-gray-900 lg:ml-12 lg:inline-flex"
        >
          {children}
        </a>
      </li>
    </>
  );
};
