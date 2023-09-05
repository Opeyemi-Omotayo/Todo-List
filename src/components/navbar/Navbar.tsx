import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { TfiClose } from "react-icons/tfi";

const Navbar = () => {
    const [nav, setNav] = useState(false);

    return (
        <>
            <nav className="font-mono">
                <div className="lg:flex hidden border-b shadow-sm  py-4 px-[25px] lg:px-[45px] text-black items-center justify-between">
                    <div className="flex items-center">
                        <h1 className="text-2xl">ToDo</h1>
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
                <div className="lg:hidden flex justify-between border-b shadow-sm items-center p-6 ">
                    <ul
                        onClick={() => setNav(!nav)}
                        className={`absolute top-[80px] z-20 bg-gray-50 items-center w-full left-0 py-10 h-full ${nav ? "block" : "hidden"
                            }`}
                    >
                        <div className="flex flex-col h-[20rem] text-lg  items-center justify-between">
                            <li className="cursor-pointer bg-white  p-2 w-32 flex items-center justify-center rounded-full">
                                <img src="/assets/settings.png" alt="settings" width={45} />
                            </li>
                            <li className="cursor-pointer bg-white  p-2 w-32 flex items-center justify-center rounded-full">
                                <img src="/assets/notification.png" alt="notification" width={45} />
                            </li>
                            <li className="cursor-pointer bg-black  p-2 w-32 flex items-center justify-center rounded-full">
                                <img src="/assets/Avatar.png" alt="avatar"  width={45}/>
                            </li>
                        </div>
                    </ul>
                    <div className="flex items-center ">
                        <h1 className="text-3xl md:text-4xl font-semibold">ToDo</h1>
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
