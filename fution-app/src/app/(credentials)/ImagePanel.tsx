import React from 'react'

function ImagePanel({ left }: { left: boolean }) {
return (
    <div className="w-full bg-blue-700 lg:w-1/2 flex items-center justify-center">
        <img
            src={left ? "/login-img.jpg" : "/register-img.jpg"}
            alt="image"
            className="h-full w-full object-cover"
        />
    </div>
)
}

export default ImagePanel