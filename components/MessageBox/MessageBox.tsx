import React from 'react'
import Image from 'next/image'
import "./MessageBox.scss"
import { Images } from '@/constants'

function MessageBox() {
  return (
    <div className='flex place-items-center w-[80%] bg-foreground gap-4 border border-slate-200 px-7 py-2 rounded-full'>
        <button><Image src={Images.paperClip} alt="paper-clip"/></button>
        <input placeholder='Ask Denning' className='w-full bg-transparent outline-none'/>
        <button><Image src={Images.send} alt="send"/></button>
    </div>
  )
}

export default MessageBox