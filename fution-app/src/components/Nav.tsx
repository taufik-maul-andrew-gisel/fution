import Link from 'next/link'
import React from 'react'

function Nav() {
    return (
<div className="flex flex-row justify-center items-center shadow-[0_1px_8px_#ddd] bg-white sticky z-[2] top-0">
    <img
        src="https://media.discordapp.net/attachments/1182644325969047673/1184452706723704958/Logo_Fution-transformed-removebg-preview.png?ex=658c068b&is=6579918b&hm=be9bee5adb5de639ff2907f57dd3b6f32869213486f0789008c6aab397fe50b5&=&format=webp&quality=lossless&width=500&height=500"
        alt=""
        className="h-28 mr-96 w-28"
    />
    <h3 className="px-5 py-0 text-black">How it works</h3>
    <h3 className="px-5 py-0 text-black">About us</h3>
    <h3 className="px-5 py-0 text-black">FAQ</h3>
    <Link href="/login" className="px-5 py-0 text-black">Login</Link>
    <Link href="/register" className="px-5 py-0 text-black">Register</Link>
</div>
    )
}

export default Nav