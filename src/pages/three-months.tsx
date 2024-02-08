import { Poppins } from "next/font/google";
import Image from 'next/image'
import abelhinha from '../assets/abelhinha.webp'
import beijocas from '../assets/beijocas.gif'


const poppins = Poppins({ weight: '500', subsets: ['latin'] })

export default function Aceppted() {

    return (
        <main className={poppins.className}>
            <div>
                <div className={`flex min-h-screen flex-col items-center justify-center`}>
                    <div className="flex items-center">
                        <h1 className='text-5xl'>Que esses 3 meses se torne a vida toda!</h1>
                        <Image
                            src={beijocas}
                            width={64}
                            height={64}
                            quality={100}
                            priority={true}
                            alt='imagem fofinha'
                        />
                    </div>
                    <h1 className='text-5xl'>Te amo!</h1>
                    <Image
                            src={abelhinha}
                            width={128}
                            height={128}
                            quality={100}
                            priority={true}
                            alt='imagem fofinha'
                        />
                </div>
            </div>
        </main>
    );
}