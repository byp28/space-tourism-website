"use client"
import { useParams } from 'next/navigation'
import Image from "next/image"
import * as data from '../../Api/data.json';
import CrewNav from '@/app/Components/CrewNav';

export default function DestinationIdPage() {
    
    const { CrewId } = useParams<{ CrewId: string }>();
    
    const id = parseInt(CrewId);
    const GetCrew = data.crew[id];
    
    return (
        <div className="w-full flex justify-around items-center px-4 pt-2 gap-25 max-sm:px-1">
            <div className="flex flex-col gap-5 text-white max-sm:gap-8 max-lg:items-center max-lg:text-center">
                <Image className='hidden max-lg:block' src={GetCrew.images.png} width={250} height={250} alt={GetCrew.name}/>
                <div className='hidden max-lg:block'>
                    <CrewNav CrewId={id}/>
                </div>
                <h3 className='text-neutral-600 text-4xl'>{GetCrew.role}</h3>
                <h2 className="text-6xl">{GetCrew.name}</h2>
                <p className="pt-2 pb-18">
                    {GetCrew.bio}
                </p>
                <div className='max-lg:hidden'>
                    <CrewNav CrewId={id}/>
                </div>
                
            </div>
            <Image className='max-lg:hidden' src={GetCrew.images.png} width={450} height={450} alt={GetCrew.name}/>
        </div>
    )
}
