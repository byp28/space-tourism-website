"use client"
import Link from "next/link"
import * as data from '../Api/data.json';

export default function DestinationNav({destinationName}:{
    destinationName : number,
}) {

    const listDestination = data.destinations.map((destination,i)=>
        <li key={i} className={destinationName === i ? "flex cursor-pointer items-center relative h-full before:absolute before:content-[' '] before:w-full before:h-1 before:bottom-0 before:bg-white" : "flex cursor-pointer items-center relative h-full hover:text-black hover:before:absolute hover:before:content-[' '] hover:before:w-full hover:before:h-1 hover:before:bottom-0 hover:before:bg-white"}>
            <Link href={`/Destination/${i}`}>{destination.name}</Link>
        </li>
    )
    
    //console.log(data.destinations[0])
    return (
        <>
            <ul className="w-full h-10 flex gap-10 text-white max-lg:self-center max-lg:justify-around">
                {listDestination}
            </ul>
        </>
    )
}
