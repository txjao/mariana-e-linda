import { Poppins } from 'next/font/google'
import Header from '@/components/Header'
import { useState } from 'react'
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Modal } from '@mui/material';

const poppins = Poppins({ weight: '500', subsets: ['latin'] })

export default function Home() {
  const [declined, setDeclined] = useState(false);
  const [timesDeclined, setTimesDeclined] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  timesDeclined == 5 ? alert('já entendi :(') : ''

  function handleOpen() {
    setIsModalOpen(true)
  }
  function handleClose() {
    setIsModalOpen(false)
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
          ${declined && timesDeclined != 5? 'translate-x-40' : ''} `}
            onClick={() => {

            }}
            onMouseEnter={() => {
              setDeclined(!declined)
              setTimesDeclined(timesDeclined + 1)
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

          </DialogContentText>
        </DialogContent>
        <DialogActions
          style={{
            backgroundColor: '#F6F6F6',
            display: 'flex',
            justifyContent: 'center'
          }}>
          <Button onClick={() => handleClose()}
            style={{
              color: '#F87171',
              textDecoration: 'none',
            }}>
            close
          </Button>
        </DialogActions>
      </Dialog>

      <Modal
        open={isModalOpen}
        onClose={handleClose}
      >
        <Box sx={{ width: 400 }}>
          <h2 >🥰Muito Obrigado!😍</h2>
          <p>
            💞Prometo lhe fazer feliz!💘
          </p>
        </Box>
      </Modal>
    </main>
  )
}
