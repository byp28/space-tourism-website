"use client"
import { useParams } from 'next/navigation'
import DestinationNav from "@/app/Components/destinationNav"
import Image from "next/image"
import * as data from '../../Api/data.json';

export default function DestinationIdPage() {
    
    const { DestinationId } = useParams<{ DestinationId: string }>();
    
    const id = parseInt(DestinationId);
    const GetDestination = data.destinations[id];
    
    return (
        <div className="w-full flex justify-around max-lg:flex-col max-lg:justify-center max-lg:items-center max-lg:text-center px-4 py-8 gap-25 max-lg:gap-15">

            <Image src={GetDestination.images.png} width={450} height={450} alt={GetDestination.name}/>
            <div className="flex flex-col gap-5 text-white">
                <DestinationNav destinationName={id}/>
                <h2 className="text-8xl">{GetDestination.name}</h2>
                <p className="pt-2 pb-18 border-b-1 border-b-white">See our planet as you’ve never seen it before. A perfect relaxing trip away to help 
                    {GetDestination.description}
                </p>
                <div className="flex w-full gap-15">
                    <div className="flex flex-col gap-2">
                        <p className="text-xl">Avg. distance</p>
                        <p className="text-3xl">{GetDestination.distance}</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="text-xl">Est. travel time</p>
                        <p className="text-3xl">{GetDestination.travel}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
