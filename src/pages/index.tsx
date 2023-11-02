import { Poppins } from 'next/font/google'
import Header from '@/components/Header'
import { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import Swal from 'sweetalert2';
import amumu from '../assets/amumu.png'
import Image from 'next/image'
import { randomInt } from 'crypto';


const poppins = Poppins({ weight: '500', subsets: ['latin'] })

export default function Home() {
  const [accepted, setAccepted] = useState(false);
  const [declined, setDeclined] = useState(false);
  const [hover, setHover] = useState(false)
  const [timesDeclined, setTimesDeclined] = useState(0);
  const [randomNumber, setRandomNumber] = useState(0);

  function handleToast() {
    switch (timesDeclined) {
      case 5: {
        return toast('É sério? 🥺')
      }
      case 10: {
        return toast('Tudo bem 😞')
      }
      case 15: {
        return toast('😭')
      }
      case 20: {
        return toast('Já entendi que você me odeia! 😭')
      }
      case 25: {
        return toast('Não era mais fácil sair do site?')
      }
      case 30: {
        window.location.assign('https://www.youtube.com/watch?v=o5Sg1dIaHCU')
      }
    }
  }



  return (
    <main className={poppins.className}>
      <Header declined={timesDeclined >= 10 ? true : false} />
      <div className={`flex min-h-screen flex-col items-center justify-center p-24`}>
        {timesDeclined < 15 && (
          <p className='text-8xl text-red-400'>🤔♥️</p>
        )}
        {timesDeclined >= 15 && (
          <div className={`flex transition-all ${timesDeclined >= 15 ? 'scale' : ''}`}>
            <Image
              src={amumu}
              width={96}
              height={96}
              quality={100}
              priority={true}
              alt='mumu tristinho pedindo desculpa por ser homem'
              onClick={()=>{
                Swal.fire({
                  title: 'Desculpa por ser homem!😭',
                  confirmButtonText: ':(',
                  timer: 5000,
                  timerProgressBar: true,
                })
              }}
            />
            <p className='text-8xl'>💔</p>
          </div>
        )}
        <p className='text-5xl text-red-400'>Mary, você aceita namorar comigo?💍</p>
        <div className='flex justify-between w-80 h-40 mt-4'>
          <button className=' rounded-full bg-white h-12 w-28 shadow-lg transition hover:bg-red-400 hover:text-white duration-200	z-10'
            onClick={async () => {
              Swal.fire({
                title: 'Prometo lhe fazer feliz!💞',
                imageUrl: 'https://www.visaooeste.com.br/wp-content/uploads/2020/06/a-noiva-cad%C3%A1ver-netflix--e1591385014142.jpg',
                imageWidth: 400,
                imageHeight: 200,
                confirmButtonText: 'Te amo!🥰',
                timer: 10000,
                timerProgressBar: true,
              })
            }}
            onMouseEnter={() => {
              setTimesDeclined(timesDeclined + 1)
            }}
          > Sim </button>

          <button className={`rounded-full bg-red-400 text-white h-12 w-28 shadow-lg transition-all relative duration-500
          ${timesDeclined != 9 ? timesDeclined % 2 == 0 ? '-translate-x-0' : 'translate-x-40 ' : 'translate-x-50'}`}
            onClick={() => {
              setDeclined(true)
              window.location.assign('https://www.youtube.com/watch?v=LbLbkAMjPeM')
            }}
            onMouseEnter={() => {
              setHover(true)
              setTimesDeclined(timesDeclined + 1)
              handleToast()
            }}
          >Não</button>
        </div>
      </div>

      <Toaster
        position='bottom-center'
      />
    </main>
  )
}
