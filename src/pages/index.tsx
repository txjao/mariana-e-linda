import { Poppins } from 'next/font/google'
import Header from '@/components/Header'
import { useState } from 'react'
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Modal } from '@mui/material';
import toast, { Toaster } from 'react-hot-toast';

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
      return toast('É sério? 🥺')
    } else if (timesDeclined == 10) {
      return toast('Tudo bem 😞')
    }
  }

  return (
    <main className={poppins.className}>
      <Header />
      <div className={`flex min-h-screen flex-col items-center justify-center p-24`}>
        <p className='text-8xl text-red-400'>🤔♥️</p>
        <p className='text-5xl text-red-400'>Mary, aceita namorar comigo?💍</p>
        <div className='flex justify-between w-80 h-40 mt-4'>
          <button className=' rounded-full bg-white h-12 w-28 shadow-lg transition hover:bg-red-400 hover:text-white duration-200	z-10'
            onClick={() => {
              handleOpen()
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

      <Dialog
        open={isModalOpen}
      >
        <DialogTitle
          style={{
            backgroundColor: '#F6F6F6',
            color: '#F87171',
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          🥰Muito Obrigado!😍
        </DialogTitle>
        <DialogContent
          style={{
            backgroundColor: '#F6F6F6',
            display: 'flex',
            justifyContent: 'center',
          }}>
          <DialogContentText style={{
            color: '#F87171'
          }}>
            💞Prometo lhe fazer feliz!💘
          </DialogContentText>
        </DialogContent>
        <DialogActions
          style={{
            backgroundColor: '#F6F6F6',
            display: 'flex',
            justifyContent: 'center'
          }}>
          <Button onClick={() => {
            handleClose()
            setAccepted(true)
          }}
            style={{
              color: '#F87171',
              textDecoration: 'none',
            }}>
            te amo!💖
          </Button>
        </DialogActions>
      </Dialog>

      <Toaster
        position='bottom-center'
      />
    </main>
  )
}
