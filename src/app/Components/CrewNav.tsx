"use client"
import Link from "next/link"
import * as data from '../Api/data.json';

export default function CrewNav({CrewId}:{
    CrewId: number,
}) {

    const listDestination = data.crew.map((crew,i)=>
        <li key={i} className={CrewId === i ? "w-4 h-4 rounded-full bg-white cursor-pointer" : "w-4 h-4 rounded-full bg-neutral-500 hover:bg-white cursor-pointer"}>
            <Link key={i} href={`/Crew/${i}`} className="text-white/0">{crew.name}</Link>
        </li>
    )
    
    //console.log(data.destinations[0])
    return (
        <>
            <ul className="w-full flex gap-5">
                {listDestination}
            </ul>
        </>
    )
}
