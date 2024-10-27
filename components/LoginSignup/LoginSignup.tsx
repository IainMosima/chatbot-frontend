import "./LoginSignup.scss";

function LoginSignup() {
    return (
        <div className="justify-center place-content-center gap-10 px-4 flex">
            <button className="border border-slate-300 px-10 py-3 rounded-full bg-neutral">Login</button>
            <button className="border border-slate-300 px-10 py-3 rounded-full">Sign Up</button>
        </div>
    )
}

export default LoginSignup