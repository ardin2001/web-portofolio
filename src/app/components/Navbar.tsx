"use client";
import UseStatus from "../hooks/UseStatus";
import { IoMdMenu } from "react-icons/io";

export default function Navbar() {
    const [status, setStatus]: any = UseStatus();

    return (
        <div className="bg-white grid py-2.5 lg:py-3 md:grid-flow-col md:grid-cols-3 md:items-center px-6 sm:px-10 md:px-16 lg:px-24 xl:px-36 mx-auto drop-shadow-low sticky top-0 z-50">
            <div className="grid grid-flow-col justify-between items-center md:col-span-2">
                <h3 className="text-primary text-xl font-bold">Web Portofolio</h3>
                <IoMdMenu className="text-2xl sm:text-3xl text-primary md:hidden" onClick={setStatus} />
            </div>
            <div className={`${status ? "block" : "hidden"} md:block url text-center`}>
                <ul className="grid gap-5 md:gap-0 py-4 md:py-0 md:grid-flow-col md:justify-between">
                    <li className="font-normal text-tertiary lg:font-medium xl:font-semibold text-sm hover:font-bold hover:text-primary hover:border-b-2 hover:border-primary cursor-pointer">Home</li>
                    <li className="font-normal text-tertiary lg:font-medium xl:font-semibold text-sm hover:font-bold hover:text-primary hover:border-b-2 hover:border-primary cursor-pointer">About</li>
                    <li className="font-normal text-tertiary lg:font-medium xl:font-semibold text-sm hover:font-bold hover:text-primary hover:border-b-2 hover:border-primary cursor-pointer">Info</li>
                    <li className="font-normal text-tertiary lg:font-medium xl:font-semibold text-sm hover:font-bold hover:text-primary hover:border-b-2 hover:border-primary cursor-pointer">Contact</li>
                </ul>
            </div>
        </div>
    );
}
