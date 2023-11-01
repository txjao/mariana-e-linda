import Image from 'next/image'
import mike from '../assets/mike.png'
import wazowski from '../assets/wazowski.png'
import { useState } from 'react';

interface HeaderProps {
    declined: boolean;
}

export default function Header(props: HeaderProps) {
    const [timesHovered, setTimesHovered] = useState(0)

    const handleChangeImage = () => {
       return props.declined ? wazowski :mike
    }
    
    return (
        <div className="flex justify-center items-center h-24 w-full bg-white shadow-lg gap-3">
            <h1 className="text-4xl font-semibold text-red-400 uppercase">namora comigo?</h1>
            <Image
                src={handleChangeImage()}
                width={40}
                height={40}
                quality={100}
                priority={true}
                alt='mike'
                className={`origin-center transition-all duration-200
                ${ timesHovered > 0 ?  timesHovered % 3 == 0 ? 'hover:rotate-180' : 'hover:rotate-360' : ''}`}
                onMouseEnter={ () => {
                    setTimesHovered(timesHovered + 1)
                }}
            />

        </div>
    );
}