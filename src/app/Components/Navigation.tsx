"use client"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

export default function Navigation({pageName}:{
    pageName : string
}) {

    const [EnableMenu, SetEnableMenu] = useState("hidden");

    const OpenMenu = ()=>{
        SetEnableMenu("block w-full h-screen bg-black/90 flex fixed z-10 top-0 left-0 items-center justify-center");
    }

    const CloseMenu = ()=>{
        SetEnableMenu("hidden");
    }

    return (
        <div className="w-full flex justify-between py-12 pl-15 items-center max-sm:px-4 max-sm:pl-4 max-sm:py-12 max-lg:py-0 max-lg:px-0 max-lg:pl-8">
            <h1><Image src="/assets/shared/logo.svg" width={50} height={50} alt="Logo"/></h1>
            <div className="w-135 translate-x-10 z-2 size-1 border-b-1 border-b-white max-sm:hidden max-lg:hidden"></div>
            <nav className="w-165 max-lg:w-120 h-20 max-lg:h-30 z-1 bg-bleu-500 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-90 max-sm:hidden">
                <ul className="flex items-center justify-center w-full h-full text-white gap-6">
                    <li className={pageName === "Home" ? "flex cursor-pointer items-center relative h-full before:absolute before:content-[' '] before:w-full before:h-1 before:bottom-0 before:bg-white" : "flex cursor-pointer items-center relative h-full hover:text-black hover:before:absolute hover:before:content-[' '] hover:before:w-full hover:before:h-1 hover:before:bottom-0 hover:before:bg-white"}>
                        <Link href={'/'}>00 HOME</Link>
                    </li>
                    <li className={pageName === "Destination" ? "flex cursor-pointer items-center relative h-full before:absolute before:content-[' '] before:w-full before:h-1 before:bottom-0 before:bg-white" : "flex cursor-pointer items-center relative h-full hover:text-black hover:before:absolute hover:before:content-[' '] hover:before:w-full hover:before:h-1 hover:before:bottom-0 hover:before:bg-white"}>
                        <Link href={'/Destination/0'}>01 DESTINATION</Link>
                    </li>
                    <li className={pageName === "Crew" ? "flex cursor-pointer items-center relative h-full before:absolute before:content-[' '] before:w-full before:h-1 before:bottom-0 before:bg-white" : "flex cursor-pointer items-center relative h-full hover:text-black hover:before:absolute hover:before:content-[' '] hover:before:w-full hover:before:h-1 hover:before:bottom-0 hover:before:bg-white"}>
                        <Link href={'/Crew/0'}>02 CREW</Link>
                    </li>
                    <li className={pageName === "Technologie" ? "flex cursor-pointer items-center relative h-full before:absolute before:content-[' '] before:w-full before:h-1 before:bottom-0 before:bg-white" : "flex cursor-pointer items-center relative h-full hover:text-black hover:before:absolute hover:before:content-[' '] hover:before:w-full hover:before:h-1 hover:before:bottom-0 hover:before:bg-white"}>
                        <Link href={'/Technologie/0'}>03 TECHNOLOGY</Link>
                    </li>
                </ul>
            </nav>
            <span onClick={()=>OpenMenu()} className="hidden max-sm:block max-sm:cursor-pointer">
                <Image src="/assets/shared/icon-hamburger.svg" width={30} height={30} alt="menu"/>
            </span>
            <div className={EnableMenu}>
                <span onClick={()=>CloseMenu()} className="absolute top-15 right-4 cursor-pointer">
                    <Image src="/assets/shared/icon-close.svg" width={30} height={30} alt="close"/>
                </span>
                <ul className="flex text-2xl flex-col items-center justify-center w-full h-full text-white gap-6">
                    <li>
                        <Link href={'/'}>00 HOME</Link>
                    </li>
                    <li>
                        <Link href={'/Destination/0'}>01 DESTINATION</Link>
                    </li>
                    <li>
                        <Link href={'/Crew/0'}>02 CREW</Link>
                    </li>
                    <li>
                        <Link href={'/Technologie/0'}>03 TECHNOLOGY</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
