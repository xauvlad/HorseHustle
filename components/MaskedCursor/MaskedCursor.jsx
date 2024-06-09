import React, { useEffect, useState, useRef } from 'react'
import {motion} from "framer-motion"
import "./maskedcursor.css"
import Image from 'next/image'

const MaskedCursor = () => {
    const [mousePos, setMousePos] = useState({x : 0, y : 0});
    const [isHovered, setIsHovered] = useState(false);
    useEffect(() => {
        const setFromEvent = (e) => {
            setMousePos({x: e.clientX, y: e.clientY});
        };
        window.addEventListener('mousemove', setFromEvent)
        return () => {
            window.removeEventListener('mousemove', setFromEvent)
        }
    }, []);

    const size = isHovered ? "500" : '500'

  return (
    <div className='container'>
        <motion.div className="mask" animate={{
                WebkitMaskPosition: `${mousePos.x - size / 2}px ${mousePos.y - size / 2}px`,
                WebkitMaskSize: `${size}px`
            }}
            transition={{ ease: "backOut", duration: 0.4 }}>
            <Image className='n'
            src = {'/images/horsec.svg'}
            width={600}
            height={500}
            alt=""
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            />
        </motion.div> 
        <div className="normal">    
            <Image className="n"
            src = {'/images/horse.svg'}
            width={600}
            height={500}
            alt=""
            />
        </div> 
    </div>
  )
}

export default MaskedCursor