"use client";
import LoginSignup from "../LoginSignup/LoginSignup";
import "./Navbar.scss"
import { useMenuToggler } from '@/hooks/menuToggle';

const Navbar = () => {
    const { menuToggle, setMenuToggle } = useMenuToggler();

    return (
        <div className="w-full flex justify-between place-items-center mb-4">

            <div className="flex gap-7 place-items-center justify-start md:basis-[50%]">
                {/* harmbuger menu */}
                <div className='flex flex-col gap-[0.4rem] cursor-pointer' onClick={() => setMenuToggle()}>
                    <div className={`w-[2.2rem] h-1 bg-white rounded-full ${menuToggle ? 'rotate-45 origin-left' : ''} ease-out duration-150`}></div>
                    <div className={`w-[2.2rem] h-1 bg-white rounded-full ${menuToggle ? 'opacity-0' : ''} ease-out duration-150`}></div>
                    <div className={`w-[2.2rem] h-1 bg-white rounded-full -rotate ${menuToggle ? '-rotate-45 origin-left' : ''} ease-out duration-150`} ></div>
                </div>

                <>
                    <h1 className="text-xl text-center md:text-left">Dening.ai</h1>
                </>
            </div>

            <div className="hidden md:inline-block">
                <LoginSignup/>
            </div>


        </div>
    )
}

export default Navbar