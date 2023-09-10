import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { TfiClose } from "react-icons/tfi";

const Navbar = () => {
    const [nav, setNav] = useState(false);

    return (
        <>
            <nav className="font-workSans ">
                <div className="items-center justify-between hidden px-8 py-6 text-black border-b shadow-sm lg:flex xl:px-16">
                    <div className="flex items-center">
                        <h1 className="text-2xl font-bold">ToDo</h1>
                    </div>
                    <div className="flex items-center">
                        <div className="mx-2">
                            <img src="/assets/settings.png" alt="settings" width={35} />
                        </div>
                        <div className="flex items-center mx-2">
                            <img src="/assets/notification.png" alt="notification" width={35} />
                        </div>
                        <div className="flex items-center ml-2">
                            <img src="/assets/avatar.png" alt="avatar" width={30} />
                        </div>
                    </div>
                </div>

                {/* mobile */}
                <div className="flex items-center justify-between p-4 border-b shadow-sm lg:hidden ">
                    <ul
                        onClick={() => setNav(!nav)}
                        className={`absolute top-[65px] z-20 bg-gray-50 items-center w-full left-0 py-10 h-full ${nav ? "block" : "hidden"
                            }`}
                    >
                        <div className="flex flex-col h-[20rem] text-lg  items-center justify-between">
                            <li className="flex items-center justify-center px-4 py-2 bg-white rounded-full cursor-pointer">
                                <img src="/assets/settings.png" alt="settings" width={45} />
                                <span>Settings</span>
                            </li>
                            <li className="flex items-center justify-center px-4 py-2 bg-white rounded-full cursor-pointer">
                                <img src="/assets/notification.png" alt="notification" width={45} />
                                <span>Notification</span>
                            </li>
                            <li className="flex items-center justify-center w-32 p-2 bg-black rounded-full cursor-pointer">
                                <img src="/assets/Avatar.png" alt="avatar"  width={45}/>
                            </li>
                        </div>
                    </ul>
                    <div className="flex items-center ">
                        <img src="/assets/logo.png" alt="logo" width={30} className='mr-2'/>
                        <h1 className="text-2xl font-bold">ToDo</h1>
                    </div>
                    <div
                        className="block text-3xl lg:hidden"
                        onClick={() => setNav(!nav)}
                    >
                        {!nav ? <CiMenuBurger /> : <TfiClose />}
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
