"use client";
import "./Navbar.scss"
import { useMenuToggler } from '@/hooks/menuToggle';

const Navbar = () => {
    const { menuToggle, setMenuToggle } = useMenuToggler();

    return (
        <div className="w-full flex justify-between place-items-center">

            <div className="flex gap-7 place-items-center justify-start">
                {/* harmbuger menu */}
                <div className='flex flex-col gap-[0.4rem] cursor-pointer' onClick={() => setMenuToggle()}>
                    <div className={`w-[2.2rem] h-1 bg-white rounded-full ${menuToggle ? 'rotate-45 origin-left' : ''} ease-out duration-150`}></div>
                    <div className={`w-[2.2rem] h-1 bg-white rounded-full ${menuToggle ? 'opacity-0' : ''} ease-out duration-150`}></div>
                    <div className={`w-[2.2rem] h-1 bg-white rounded-full -rotate ${menuToggle ? '-rotate-45 origin-left' : ''} ease-out duration-150`} ></div>
                </div>

                <h1 className="text-xl">Dening.ai</h1>
            </div>

            <div className="flex justify-center place-content-center gap-10 px-4">
                <button className="border border-slate-300 px-10 py-3 rounded-full bg-neutral">Login</button>
                <button className="border border-slate-300 px-10 py-3 rounded-full">Sign Up</button>
            </div>


        </div>
    )
}

export default Navbar