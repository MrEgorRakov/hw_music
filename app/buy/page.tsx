import Link from "next/link";

export default function buy() {
    return (
        <div className="flex flex-col justify-center text-4xl mt-15 items-center">DONT WASTE YOUR MONEY
                <Link 
                className=' bg-red-800 absolute block p-12 m-2 w-fit mb-5 rounded-4xl text-white right-150 top-50 hover:bg-red-400'
                href="/" 
                >
                    get back to reality
                </Link>
            </div>
    )
}