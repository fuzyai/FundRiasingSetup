import React from 'react'
import Link from 'next/link'

export default function Header() {
    return (
        <nav className="bg-slate-300 px-[30%]">
            <ul className="flex justify-between items-center h-20 contain-style-dot">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/">About</Link></li>
                <li><Link href="/">Resources</Link></li>
                <li><Link href="/">Contact</Link></li>

            </ul>
        </nav>
    )
}
// const Home = () => {
//     return <div>Hello World</div>;
//   };
//   export default Home;