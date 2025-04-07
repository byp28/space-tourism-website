"use client"
import { useParams } from 'next/navigation'
import Image from "next/image"
import * as data from '../../Api/data.json';
import TechnologyNav from '@/app/Components/TechnologyNav';

export default function TechnologieIdPage() {
    
    const { TechnologieId } = useParams<{ TechnologieId: string }>();
    
    const id = parseInt(TechnologieId);
    const GetTechnology = data.technology[id];
    
    return (
        <div className="w-full flex justify-between items-center pl-4 max-lg:px-4 py-8 gap-25">
            <div className='max-lg:hidden'>
                <TechnologyNav  id={id}/>
            </div>
            
            <div className="flex flex-col gap-8 text-white max-lg:text-center">
                <Image className='hidden max-lg:block max-lg:self-center' src={GetTechnology.images.landscape} width={400} height={450} alt={GetTechnology.name}/>
                <div className='hidden max-lg:block max-lg:self-center'>
                    <TechnologyNav  id={id}/>
                </div>
                <p>THE TERMINOLOGY...</p>
                <h2 className="text-7xl">{GetTechnology.name}</h2>
                <p className="">See our planet as you’ve never seen it before. A perfect relaxing trip away to help 
                    {GetTechnology.description}
                </p>
            </div>
            <Image className='max-lg:hidden' src={GetTechnology.images.portrait} width={450} height={850} alt={GetTechnology.name}/>
            
        </div>
    )
}
