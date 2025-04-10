import Image from "next/image";
import Link from "next/link";


export default function bassGuitar() {
    return (
        <div className="bg-blue-800 min-h-screen">
            <header className="flex flex-col justify-center text-4xl items-center">Description</header>
            <div className="flex flex-col ml-20 mt-20 items-start justify-start bg-blue-800"> 
                <Image
                src="https://avatars.mds.yandex.net/i?id=004a8d0100461fa8c687ecfc3fb448ce62272d14-12856446-images-thumbs&n=13"  alt="Guitar"
                width={400}
                height={150}
                className="mt-5"
                />
            </div>
            <div className="flex absolute flex-col text-4xl top-50 right-0 bg-blue-800  mr-150">
                <div>super cool BASS guitar</div> <br/>
                <div>(づ｡◕‿‿◕｡)づ ♥: 300 </div> <br />
                <div>makes <span className="text-orange-600">fun</span> noises</div> <br/>
                <div><span className="text-red-600">PRICE:</span> 1000$</div>
            </div>
            <Link 
                className=' bg-red-800 absolute block p-8 m-2 w-fit mb-5 rounded-xl text-white right-150 top-100 hover:bg-red-400'
                href="/buy" 
                >
                    BUY
            </Link>
            <Link 
                className=' bg-green-800 absolute block p-12 m-2 w-fit mb-5 rounded-4xl text-white right-50 top-50 hover:bg-red-400'
                href="/" 
                >
                    get back to reality
            </Link>
        </div>
        
    )
}