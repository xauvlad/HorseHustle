"use client"

import MaskedCursor from '../components/MaskedCursor/MaskedCursor.jsx';
import PrettyButton from '../components/PrettyButton/PrettyButton.jsx';
import Footer from '../components/Footer/Footer.jsx';
import Link from 'next/link';
import { Unbounded } from 'next/font/google';


const unbounded = Unbounded({
  weight: "400",
  subsets: ['latin']
})

export default function Home() {
  const handleButtonClick= () => {

  }
  return (
    <div className={unbounded.className}>
      <div className='layer'>
        <h1>HorseHustle</h1>
        <p style={{textAlign: 'center', fontSize: '1.1vw', color: '#8f3b76'}}>Первый сервис для менеджмента<br/> скачек в России</p>
        <Link href="/register"><PrettyButton text="Начать работу" handleClick={handleButtonClick}/></Link>
      </div>
      <MaskedCursor />
      <Footer />
    </div>
  );
}
