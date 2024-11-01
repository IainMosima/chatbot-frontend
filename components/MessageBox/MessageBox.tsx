import React from 'react'
import Image from 'next/image'
import "./MessageBox.scss"
import { Images } from '@/constants'

function MessageBox() {
  return (
    <div className='flex  place-items-center md:w-[80%] w-full bg-neutralBlack gap-4 border border-slate-200 px-7 py-4 rounded-full'>
        <button><Image src={Images.paperClip} alt="paper-clip" width={30} priority={true}/></button>
        <input placeholder='Ask Denning' className='w-full bg-transparent outline-none'/>
        <button><Image src={Images.send} alt="send" width={30} priority={true}/></button>
    </div>
  )
}

export default MessageBox