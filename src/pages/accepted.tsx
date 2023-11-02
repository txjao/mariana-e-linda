import { Poppins } from "next/font/google";
import Image from 'next/image'
import nana from '../assets/nana2.jpg'
import mike from '../assets/mikelove.jpg'
import veigar from '../assets/veigar.gif'
import ghibli from '../assets/ghibli.gif'
import beijocas from '../assets/beijocas.gif'

const poppins = Poppins({ weight: '500', subsets: ['latin'] })

export default function Aceppted() {

    return (
        <main className={poppins.className}>
            <div className={`flex min-h-screen flex-col items-center justify-center p-24`}>
                <div className="flex w-3/4 justify-between">
                    <Image
                        src={mike}
                        width={160}
                        height={96}
                        quality={100}
                        priority={true}
                        alt='mumu tristinho pedindo desculpa por ser homem'
                    />
                    <Image
                        src={ghibli}
                        width={200}
                        height={96}
                        quality={100}
                        priority={true}
                        alt='mumu tristinho pedindo desculpa por ser homem'
                    />
                </div>
                <div className="flex items-center">
                    <h1 className='text-5xl'>Te amo!
                    </h1>
                    <Image
                        src={beijocas}
                        width={64}
                        height={64}
                        quality={100}
                        priority={true}
                        alt='mumu tristinho pedindo desculpa por ser homem'
                    />
                </div>
                <h1 className='text-5xl'>Prometo lhe fazer feliz!💞</h1>
                <div className="flex w-3/4 justify-between">
                    <Image
                        src={veigar}
                        width={160}
                        height={96}
                        quality={100}
                        priority={true}
                        alt='mumu tristinho pedindo desculpa por ser homem'
                    />
                    <Image
                        src={nana}
                        width={160}
                        height={96}
                        quality={100}
                        priority={true}
                        alt='mumu tristinho pedindo desculpa por ser homem'
                    />
                </div>
            </div>
        </main>
    );
}