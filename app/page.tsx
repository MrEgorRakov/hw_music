'use client'
import { useState } from "react"
import Image from "next/image";
import Link from 'next/link';

export default function MyApp() {

    return (
        <div className="min-h-screen bg-green-200 md:bg-green-500"> 
            <div className="flex mt-5 flex-col min-w-xl items-center justify-start bg-black">
                <header className="text-2xl">Welcome to the reality</header>
            </div>
            <div className="grid grid-cols-5 max-md:grid-cols-2 grid-cols-2items-center justify-start bg-green ">
                <div className=" mt-30 ml-15 min-w-50 border-black border-4 w-1/7 flex flex-col items-center text-black justify-start bg-white ">
                cool guitar
                    <Image
                    src="https://avatars.mds.yandex.net/i?id=dfd4773dd98724b64e1a08f158e1ebeafb82c557-4231170-images-thumbs&n=13"
                    alt="Guitar"
                    width={200}
                    height={200}
                    className="mt-5"
                    />
                    <Link 
                        className=' bg-black block p-2 m-2 w-fit mb-5 rounded text-white hover:bg-gray-600'
                        href="/guitar" 
                        >
                        BUY
                    </Link>
                </div>
                <div className=" mt-30 ml-15 min-w-50 border-black border-4 w-1/7 flex flex-col items-center text-black justify-start bg-white">
                cool BASS guitar
                    <Image
                    src="https://avatars.mds.yandex.net/i?id=004a8d0100461fa8c687ecfc3fb448ce62272d14-12856446-images-thumbs&n=13"
                    alt="Guitar"
                    width={150}
                    height={150}
                    className="mt-5"
                    />
                    <Link 
                        className=' bg-black block p-2 m-2 w-fit mb-5 rounded text-white hover:bg-gray-600'
                        href="/bassGuitar" 
                        >
                        BUY
                    </Link>
                </div>
                <div className=" mt-30 ml-15 min-w-50 border-black border-4 w-1/7 flex flex-col items-center text-black justify-start bg-white">
                cool saxophone 
                    <Image
                    src="https://avatars.mds.yandex.net/i?id=a04cc2a9eb97c938f5d36a8806ac95fee36afc57-4230821-images-thumbs&n=13"
                    alt="Guitar"
                    width={150}
                    height={150}
                    className="mt-5"
                    />
                    <Link 
                        className=' bg-black block p-2 m-2 w-fit mb-5 rounded text-white hover:bg-gray-600'
                        href="/saxophone" 
                        >
                        BUY
                    </Link>
                </div>
                <div className=" mt-30 ml-15 min-w-50 border-black border-4 w-1/7 flex flex-col items-center text-black justify-start bg-white">
                cool piano 
                    <Image
                    src="https://avatars.mds.yandex.net/i?id=8905d2b37a17f8c3042b7a56fdd247016d0eedf0-4146177-images-thumbs&n=13"
                    alt="piano"
                    width={150}
                    height={150}
                    className="mt-5"
                    />
                    <Link 
                        className=' bg-black block p-2 m-2 w-fit mb-5 rounded text-white hover:bg-gray-600'
                        href="/piano" 
                        >
                        BUY
                    </Link>
                </div>
                <div className=" mt-30 ml-15 border-black min-w-50 border-4 w-1/7 flex flex-col items-center text-black justify-start bg-white">
                cool triangle
                    <Image
                    src="https://avatars.mds.yandex.net/i?id=7dccb3050066b862db216c4e3e36ed41690f30f2-3839645-images-thumbs&n=13"
                    alt="piano"
                    width={150}
                    height={150}
                    className="mt-5"
                    />
                    <Link 
                        className=' bg-black block p-2 m-2 w-fit  mb-5 rounded text-white hover:bg-gray-600'
                        href="/triangle" 
                        >
                        BUY
                    </Link>
                </div>
                <div className=" mt-30 ml-15 border-black border-4 min-w-50 w-1/7 flex flex-col items-center text-black justify-start bg-white">
                cool triangle
                    <Image
                    src="https://avatars.mds.yandex.net/i?id=3d0bb81aa7b90c135287a6f74b7eec4dfded154d-4575531-images-thumbs&n=13"
                    alt="piano"
                    width={150}
                    height={150}
                    className="mt-5"
                    />
                    <Link 
                        className=' bg-black block p-2 m-2 w-fit mb-5 rounded text-white hover:bg-gray-600'
                        href="/triangle" 
                        >
                        BUY
                    </Link>
                </div>
                <div className=" mt-30 ml-15 border-black border-4 w-1/7 min-w-50 flex flex-col items-center text-black justify-start bg-white">
                cool triangle
                    <Image
                    src="https://avatars.mds.yandex.net/i?id=b887f6d8d105280046cc325282c7f768008b8b53-12653362-images-thumbs&n=13"
                    alt="piano"
                    width={150}
                    height={150}
                    className="mt-5"
                    />
                    <Link 
                        className=' bg-black block p-2 m-2 w-fit mb-5 rounded text-white hover:bg-gray-600'
                        href="/triangle" 
                        >
                        BUY
                    </Link>
                </div>
                <div className=" mt-30 ml-15 border-black border-4 w-1/7 min-w-50 flex flex-col items-center text-black justify-start bg-white">
                cool triangle
                    <Image
                    src="https://avatars.mds.yandex.net/i?id=c241ee7e452fc218d85b3b9ef7d8c4a69384a370-6436951-images-thumbs&n=13"
                    alt="piano"
                    width={150}
                    height={150}
                    className="mt-5"
                    />
                    <Link 
                        className=' bg-black block p-2 m-2 w-fit mb-5 rounded text-white hover:bg-gray-600'
                        href="/triangle" 
                        >
                        BUY
                    </Link>
                </div>
                <div className=" mt-30 ml-15 border-black border-4 w-1/7 min-w-50 flex flex-col items-center text-black justify-start bg-white">
                cool triangle
                    <Image
                    src="https://avatars.mds.yandex.net/i?id=ea9307eb62439735b24250649d0cea8183d71c12-9106685-images-thumbs&n=13"
                    alt="piano"
                    width={150}
                    height={150}
                    className="mt-5"
                    />
                    <Link 
                        className=' bg-black block p-2 m-2 w-fit mb-5 rounded text-white hover:bg-gray-600'
                        href="/triangle" 
                        >
                        BUY
                    </Link>
                </div>
                <div className=" mt-30 ml-15 border-black border-4 w-1/7 min-w-50 flex flex-col items-center text-black justify-start bg-white">
                cool triangle
                    <Image
                    src="https://avatars.mds.yandex.net/i?id=73899c2266d9a90ff94f6a419c559a6aa7ce6cc9-5209454-images-thumbs&n=13"
                    alt="piano"
                    width={150}
                    height={150}
                    className="mt-5"
                    />
                    <Link 
                        className=' bg-black block p-2 m-2 w-fit mb-5 rounded text-white hover:bg-gray-600'
                        href="/triangle" 
                        >
                        BUY
                    </Link>
                </div>
            </div>
            <footer className="text-black flex justify-center bg-green mt-65">copyright@:,)</footer>
        </div>
    )
}
// 'use client'

// import { useState } from "react"

// export default function Todo() {

//     const [todos, setTodos] = useState([
//         { id: 1, title: 'Writing Next.js', complete: true },
//         { id: 2, title: 'Do homework', complete: false },
//         { id: 3, title: 'Sleeping', complete: true },
//     ])

//     const [task, setTask] = useState('')

//     const addTask = () => {
//         if (!task) return
//         const newTask = {
//             id: todos.length + 1,
//             title: task,
//             complete: false
//         }
//         setTodos([...todos, newTask])
//         setTask('')
//     }

//     const deleteTask = (id: number) => { 
//         console.log("Id: ", id)  
//         const newTodos = todos.filter(todo => todo.id !== id) 
//         setTodos(newTodos)
//     }

//     return (<div className="border-2 max-w-sm border-gray-300 rounded-lg mx-auto p-4">
//         <h1 className="text-xl font-bold">Todo</h1>
//         <div>
//             <ul>
//                 {todos.map(todo => (
//                     <li key={todo.id} className="my-2">
//                         <span>{todo.id}. </span>
//                         <span className="mr-2"
//                         >{todo.title}</span>
//                         <input
//                             className="mr-2"
//                             type="checkbox"
//                             defaultChecked={todo.complete} />
//                         <button
//                             onClick={() => deleteTask(todo.id)} 
//                             className="border-2 border-gray-300 px-2 hover:bg-red-500 hover:text-white"
//                             > x </button>
//                     </li>
//                 ))}
//             </ul>
 
//             <input
//                 className="border-2 border-gray-300 rounded-lg p-2 m-2"
//                 type="text"
//                 value={task}
//                 onChange={e => setTask(e.target.value)}
//                 placeholder="Add a new todo" />
//             <button
//                 onClick={addTask}
//                 className="border-2 border-gray-300 rounded-lg p-2 m-2 bg-blue-500 text-white"
//             >Add</button>
//         </div>
//     </div>)
// }