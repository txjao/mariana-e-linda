import { Poppins } from 'next/font/google'
import Header from '@/components/Header'
import { useState } from 'react'

const poppins = Poppins({ weight: '500', subsets: ['latin'] })

export default function Home() {
  const [declined, setDeclined] = useState(false);

  return (
    <main className={poppins.className}>
      <Header />
      <div className={`flex min-h-screen flex-col items-center justify-center p-24`}>
        <p className='text-3xl text-red-400'>Mary, aceita namorar comigo?</p>
        <div className='flex justify-between w-80 h-40 mt-4 '>
          <button className=' rounded-full bg-white h-12 w-28 shadow-lg transition hover:bg-red-400 hover:text-white duration-200	z-10'
          onClick={() => {
            alert('Aceita?')
          }}> Sim </button>

          <button className={`rounded-full bg-red-400 text-white h-12 w-28 shadow-lg transition-all relative duration-300
          ${ declined ? 'translate-x-40' : '' }`}
            onClick={() => {
              
            }}
            onMouseEnter={() => {
              setDeclined(!declined)
            }}
          >Não</button>
        </div>
      </div>
    </main>
  )
}
