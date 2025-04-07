import Link from 'next/link'
import React from 'react'

export default function TechnologyNav({id}:{id : number}) {
    return (
    <>
        <div className='flex flex-col gap-10 max-lg:flex-row max-lg:justify-around max-lg:w-full'>
            <Link className={id==0 ? "w-20 h-20 text-3xl bg-white flex justify-center items-center text-center text-black rounded-full border-1 border-white" : "w-20 h-20 text-3xl flex justify-center items-center text-center text-white rounded-full border-1 border-white"} href="/Technologie/0">1</Link>
            <Link className={id==1 ? "w-20 h-20 text-3xl bg-white flex justify-center items-center text-center text-black rounded-full border-1 border-white" : "w-20 h-20 text-3xl flex justify-center items-center text-center text-white rounded-full border-1 border-white"} href="/Technologie/1">2</Link>
            <Link className={id==2 ? "w-20 h-20 text-3xl bg-white flex justify-center items-center text-center text-black rounded-full border-1 border-white" : "w-20 h-20 text-3xl flex justify-center items-center text-center text-white rounded-full border-1 border-white"} href="/Technologie/2">3</Link>

        </div>
    </>
    )
}
