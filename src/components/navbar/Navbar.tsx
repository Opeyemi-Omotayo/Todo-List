import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { TfiClose } from "react-icons/tfi";

const Navbar = () => {
    const [nav, setNav] = useState(false);

    return (
        <>
            <nav className="font-mono ">
                <div className="lg:flex hidden border-b shadow-sm  py-6 px-8 text-black items-center justify-between">
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
                <div className="lg:hidden flex justify-between border-b shadow-sm items-center p-4 ">
                    <ul
                        onClick={() => setNav(!nav)}
                        className={`absolute top-[65px] z-20 bg-gray-50 items-center w-full left-0 py-10 h-full ${nav ? "block" : "hidden"
                            }`}
                    >
                        <div className="flex flex-col h-[20rem] text-lg  items-center justify-between">
                            <li className="cursor-pointer bg-white  py-2 px-4 flex items-center justify-center rounded-full">
                                <img src="/assets/settings.png" alt="settings" width={45} />
                                <span>Settings</span>
                            </li>
                            <li className="cursor-pointer bg-white  py-2 px-4 flex items-center justify-center rounded-full">
                                <img src="/assets/notification.png" alt="notification" width={45} />
                                <span>Notification</span>
                            </li>
                            <li className="cursor-pointer bg-black  p-2 w-32 flex items-center justify-center rounded-full">
                                <img src="/assets/Avatar.png" alt="avatar"  width={35}/>
                            </li>
                        </div>
                    </ul>
                    <div className="flex items-center ">
                        <h1 className="text-2xl font-bold">ToDo</h1>
                    </div>
                    <div
                        className="lg:hidden block text-3xl"
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
