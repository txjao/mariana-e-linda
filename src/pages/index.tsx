import { Poppins } from 'next/font/google'
import Header from '@/components/Header'
import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import Swal from 'sweetalert2';

const poppins = Poppins({ weight: '500', subsets: ['latin'] })

export default function Home() {
  const [accepted, setAccepted] = useState(false);
  const [declined, setDeclined] = useState(false);
  const [timesDeclined, setTimesDeclined] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleOpen() {
    setIsModalOpen(true)
  }
  function handleClose() {
    setIsModalOpen(false)
  }

  function handleToast() {
    if (timesDeclined == 5) {

    } else if (timesDeclined == 10) {
      return toast('Tudo bem 😞')
    } else if (timesDeclined == 15) {
      return toast('😭')
    } else if (timesDeclined == 20) {
      return toast('Já entendi que você me odeia! 😭')
    } else if (timesDeclined == 25) {
      return toast('Não era mais fácil sair do site?')
    }

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
      <Header />
      <div className={`flex min-h-screen flex-col items-center justify-center p-24`}>
        <p className='text-8xl text-red-400'>🤔♥️</p>
        <p className='text-5xl text-red-400'>Mary, você aceita namorar comigo?💍</p>
        <div className='flex justify-between w-80 h-40 mt-4'>
          <button className=' rounded-full bg-white h-12 w-28 shadow-lg transition hover:bg-red-400 hover:text-white duration-200	z-10'
            onClick={async () => {
              Swal.fire({
                  title: 'Muito Obrigado!😍',
                  text: 'Prometo lhe fazer feliz!💞',
                  imageUrl: 'https://www.visaooeste.com.br/wp-content/uploads/2020/06/a-noiva-cad%C3%A1ver-netflix--e1591385014142.jpg',
                  imageWidth: 400,
                  imageHeight: 200,
                confirmButtonText: 'Te amo!🥰',
                timer: 10000,
                timerProgressBar: true,
              })
            }}> Sim </button>

          <button className={`rounded-full bg-red-400 text-white h-12 w-28 shadow-lg transition-all relative duration-300
          ${declined ? 'translate-x-40' : ''} `}
            onClick={() => {

            }}
            onMouseEnter={() => {
              setDeclined(!declined)
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
