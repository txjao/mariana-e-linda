import { Poppins } from 'next/font/google'
import Header from '@/components/Header'
import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import Swal from 'sweetalert2';
import amumu from '../assets/amumu.png'
import Image from 'next/image'
import router from 'next/router';
import Draggable from 'react-draggable';

const poppins = Poppins({ weight: '500', subsets: ['latin'] })

export default function Home() {
  const [timesDenied, setTimesDenied] = useState(0);

  function handleToast() {
    switch (timesDenied) {
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
      <Header declined={timesDenied >= 10 ? true : false} />
      <div className={`flex min-h-screen flex-col items-center justify-center p-24`}>
        {timesDenied < 15 && (
          <div className='flex'>
            <div className='flex flex-col items-center justify-center'>
              <span className='relative top-10'
                onClick={async () => {
                  await router.push('/three-months')
                }}>hehe</span>
              <Draggable>
                <p className='text-8xl relative bottom-6'>🤔</p>
              </Draggable>
            </div>
            <p className='text-8xl text-red-400'>♥️</p>
          </div>
        )}
        {timesDenied >= 15 && (
          <div className={`flex transition-all ${timesDenied >= 15 ? 'scale' : ''}`}>
            <Image
              src={amumu}
              width={96}
              height={96}
              quality={100}
              priority={true}
              alt='mumu tristinho pedindo desculpa por ser homem'
              onClick={() => {
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
        <div className='flex'>
          <p className='text-5xl text-red-400' onClick={() => {
            Swal.fire({
              title: 'A MAIS LINDA DO MUNDO!',
              confirmButtonText: '♥️',
              timer: 5000,
              timerProgressBar: true,
            })
          }}>Mary</p>
          <p className='text-5xl text-red-400'>, você aceita namorar comigo?
          </p>
          <p className='text-5xl'>💍</p>
        </div>
        <div className='flex justify-between w-80 h-40 mt-4'>
          <button className=' rounded-full bg-white h-12 w-28 shadow-lg transition hover:bg-red-400 hover:text-white duration-200	z-10'
            onClick={async () => {
              await router.push('/accepted')
            }}
            onMouseEnter={() => {
              if (timesDenied == 9) {
                setTimesDenied(timesDenied + 1)
              }
            }}> Sim </button>

          <button className={`rounded-full bg-red-400 text-white h-12 w-28 shadow-lg transition-all relative duration-500
          ${timesDenied != 9 ? timesDenied % 2 == 0 ? '-translate-x-0' : 'translate-x-40 ' : 'translate-x-50'}`}
            onClick={() => {
              window.location.assign('https://www.youtube.com/watch?v=LbLbkAMjPeM')
            }}
            onMouseEnter={() => {
              setTimesDenied(timesDenied + 1)
              handleToast()
            }}> Não </button>
        </div>
      </div>
      <div className='w-full h-24 bg-white'>
        © 2023 - Todos os direitos reservados
      </div>
      <Toaster position='bottom-center' />
    </main>
  )
}
