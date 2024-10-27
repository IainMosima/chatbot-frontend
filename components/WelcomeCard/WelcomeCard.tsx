import React from 'react'
import "./WelcomeCard.scss"
import MessageBox from '../MessageBox/MessageBox'

// const cardInfo = [
//     {title: "", }
// ]
function WelcomeCard() {
  return (
    <div className='flex flex-col justify-center place-items-center h-full'>
        <MessageBox/>
    </div>
  )
}

export default WelcomeCard