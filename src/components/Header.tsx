import Image from 'next/image'
import mike from '../assets/mike.png'

export default function Header() {

    return (
        <div className="flex justify-center items-center h-24 w-full bg-white shadow-lg gap-3">
            <h1 className="text-4xl font-semibold text-red-400 uppercase">namora comigo?</h1>
            <Image
                src={mike}
                width={40}
                height={40}
                quality={100}
                priority={true}
                alt='mike'
            />
        </div>
    );
}